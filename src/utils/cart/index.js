import { getSession, storeSession } from "./session";
import { getApiCartConfig } from "./api";
import axios from "axios";
import { CART_ENDPOINT } from "../endpoints";
import { isEmpty, isArray } from "lodash";

/**
 * Add To Cart Request Handler.
 *
 * @param {int} productId Product Id.
 * @param {int} qty Product Quantity.
 * @param {Function} setCart Sets The New Cart Value
 * @param {Function} setIsAddedToCart Sets A Boolean Value If Product Is Added To Cart.
 * @param {Function} setLoading Sets A Boolean Value For Loading State.
 */

export const addToCart = (
  productId,
  qty = 1,
  setCart,
  setIsAddedToCart,
  setIsLoading
) => {
  const storedSession = getSession();
  const addOrViewCartConfig = getApiCartConfig();

  // Loading once the request been sent
  setIsLoading(true);

  axios
    .post(
      CART_ENDPOINT,
      { product_id: productId, quantity: qty },
      addOrViewCartConfig
    )
    .then((res) => {
      if (isEmpty(storedSession)) {
        storeSession(res?.headers?.["x-wc-session"]);
      }
      setIsAddedToCart(true);
      setIsLoading(false); // stop loading
      viewCart(setCart);
    })
    .catch((err) => {
      setIsLoading(false); // stop loading
      console.log("error", err);
    });
};

export const viewCart = (setCart, setProcessing = () => {}) => {
  const addOrViewCartConfig = getApiCartConfig();

  axios
    .get(CART_ENDPOINT, addOrViewCartConfig)
    .then((res) => {
      const formattedCartData = getFormattedCartData(res?.data ?? []);
      setCart(formattedCartData);
      setProcessing(false);
    })
    .catch((err) => {
      console.log("error", err);
      setProcessing(false);
    });
};

/**
 * Update Cart Request Handler
 */
export const updateCart = (cartKey, qty = 1, setCart, setUpdatingProduct) => {
  const addOrViewCartConfig = getApiCartConfig();

  setUpdatingProduct(true);

  axios
    .put(
      `${CART_ENDPOINT}${cartKey}`,
      {
        quantity: qty,
      },
      addOrViewCartConfig
    )
    .then((res) => {
      viewCart(setCart, setUpdatingProduct);
    })
    .catch((err) => {
      console.log("err", err);
      setUpdatingProduct(false);
    });
};

/**
 * Clear Cart Request Handler
 *
 * @param {Function} setCart Set Cart
 * @param {Function} setClearCartProcessing Set Clear Cart Processing.
 */
export const clearCart = async (setCart, setClearCartProcessing) => {
  setClearCartProcessing(true);

  const addOrViewCartConfig = getApiCartConfig();

  try {
    const response = await axios.delete(CART_ENDPOINT, addOrViewCartConfig);
    viewCart(setCart, setClearCartProcessing);
  } catch (err) {
    console.log("err", err);
    setClearCartProcessing(false);
  }
};

/**
 * Delete a cart item Request handler.
 *
 * Deletes all products in the cart of a
 * specific product id ( by its cart key )
 * In a cart session, each product maintains
 * its data( qty etc ) with a specific cart key
 *
 * @param {String} cartKey Cart Key.
 * @param {Function} setCart SetCart Function.
 * @param {Function} setRemovingProduct Set Removing Product Function.
 */
export const deleteCartItem = (cartKey, setCart, setRemovingProduct) => {
  const addOrViewCartConfig = getApiCartConfig();

  setRemovingProduct(true);

  axios
    .delete(`${CART_ENDPOINT}${cartKey}`, addOrViewCartConfig)
    .then((res) => {
      viewCart(setCart, setRemovingProduct);
    })
    .catch((err) => {
      console.log("err", err);
      setRemovingProduct(false);
    });
};

/**
 * Get Formatted Cart Data.
 *
 * @param cartData
 * @return {null|{cartTotal: {totalQty: number, totalPrice: number}, cartItems: ({length}|*|*[])}}
 */
const getFormattedCartData = (cartData) => {
  if (!cartData.length) {
    return null;
  }
  const cartTotal = calculateCartQtyAndPrice(cartData || []);
  return {
    cartItems: cartData || [],
    ...cartTotal,
  };
};

/**
 * Calculate Cart Qty And Price.
 *
 * @param cartItems
 * @return {{totalQty: number, totalPrice: number}}
 */
const calculateCartQtyAndPrice = (cartItems) => {
  const qtyAndPrice = {
    totalQty: 0,
    totalPrice: 0,
  };

  if (!isArray(cartItems) || !cartItems?.length) {
    return qtyAndPrice;
  }

  cartItems.forEach((item, index) => {
    qtyAndPrice.totalQty += item?.quantity ?? 0;
    qtyAndPrice.totalPrice += item?.line_total ?? 0; // cart total cost
  });

  return qtyAndPrice;
};
