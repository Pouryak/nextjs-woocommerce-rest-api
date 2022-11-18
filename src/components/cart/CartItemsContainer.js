import React, { useContext, useState } from "react";
import EmptyCart from "./EmptyCart";
import { CartContext } from "../context/cart-context";
import { clearCart } from "../../utils/cart";
import CartItem from "./CartItem";

const CartItemsContainer = () => {
  const [cart, setCart] = useContext(CartContext);
  const { cartItems, totalPrice, totalQty } = cart || {};
  const [isClearCartProcessing, setClearCartProcessing] = useState(false);

  const handleClearCart = (event) => {
    event.stopPropagation();

    if (isClearCartProcessing) {
      return;
    }

    clearCart(setCart, setClearCartProcessing);
  };

  return (
    <div className="container mx-auto flex lg:flex-row xsm:flex-col my-6 farsi-text">
      {/* Cart Products List */}
      <div className="flex flex-col lg:w-4/6 xsm:w-full dark:bg-secondaryDark bg-secondaryLight shadow-md rounded-md ml-4 p-4 md:mb-4 x   xsm:mb-5">
        {cart ? (
          cartItems.map((item) => (
            <CartItem
              key={item.product_id}
              item={item}
              products={cartItems}
              setCart={setCart}
            />
          ))
        ) : (
          <EmptyCart />
        )}
      </div>
      {/* Cart Total */}
      <div className="flex flex-col space-y-2 lg:w-2/6 sm:w-full dark:bg-secondaryDark bg-secondaryLight shadow-md rounded-md h-max p-4">
        <h2 className="mb-4">فاکتور</h2>
        <div className="flex justify-between">
          <p>مبلغ کل:</p>
          <a className="flex">
            <span className="ml-1">
              {totalPrice ? Math.ceil(totalPrice) : 0}
            </span>
            <span>{cartItems?.[0]?.currency ?? ""}</span>
          </a>
        </div>
        <div className="flex justify-between">
          <p>هزینه ارسال:</p>
          <p>وابسته به آدرس</p>
        </div>
        <div className="divider" />
        <button className="bg-green-500 px-4 py-2 rounded-md text-white hover:shadow-sm hover:scale-105 duration-200">
          ادامه ثبت سفارش
        </button>
        {/* <button
          onClick={(event) => handleClearCart(event)}
          className="border border-green-500 px-4 py-1 rounded-md hover:bg-green-500 hover:shadow-sm hover:scale-105 duration-200"
          disabled={isClearCartProcessing}
        >
          <span>{!isClearCartProcessing ? "Clear Cart" : "Clearing.."}</span>
        </button> */}
      </div>
    </div>
  );
};

export default CartItemsContainer;
