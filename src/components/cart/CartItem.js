import React, { useEffect, useState, useRef } from "react";
import { isEmpty } from "lodash";
import { deleteCartItem, updateCart } from "../../utils/cart";
import spinner from "../../../public/cart-spinner.gif";
import Image from "next/image";

import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { TfiMedallAlt } from "react-icons/tfi";
import { MdDelete } from "react-icons/md";
import LoadingCart from "./LoadingCart";

const CartItem = ({ item, products, setCart }) => {
  const [productCount, setProductCount] = useState(item.quantity);
  const [updatingProduct, setUpdatingProduct] = useState(false);
  const [removingProduct, setRemovingProduct] = useState(false);
  const productImg = item?.data?.images?.[0] ?? "";

  /**
   * Do not allow state update on an unmounted component.
   *
   * isMounted is used so that we can set it's value to false
   * when the component is unmounted.
   * This is done so that setState ( e.g setRemovingProduct ) in asynchronous calls
   * such as axios.post, do not get executed when component leaves the DOM
   * due to product/item deletion.
   * If we do not do this as unsubscription, we will get
   * "React memory leak warning- Can't perform a React state update on an unmounted component"
   *
   * @see https://dev.to/jexperton/how-to-fix-the-react-memory-leak-warning-d4i
   * @type {React.MutableRefObject<boolean>}
   */

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    // When component is unmounted, set isMounted.current to false.
    return () => {
      isMounted.current = false;
    };
  }, []);

  /*
   * Handle remove product click.
   *
   * @param {Object} event event
   * @param {Integer} Product Id.
   *
   * @return {void}
   */
  const handleRemoveProductClick = (event, cartKey) => {
    event.stopPropagation();

    // If the component is unmounted, or still previous item update request is in process, then return.
    if (!isMounted || updatingProduct) {
      return;
    }

    deleteCartItem(cartKey, setCart, setRemovingProduct);
  };

  /*
   * When user changes the qty from product input update the cart in localStorage
   * Also update the cart in global context
   *
   * @param {Object} event event
   *
   * @return {void}
   */
  const handleQtyChange = (event, cartKey, type) => {
    if (process.browser) {
      event.stopPropagation();
      let newQty;

      // If the previous cart request is still updatingProduct or removingProduct, then return.
      if (
        updatingProduct ||
        removingProduct ||
        ("decrement" === type && 1 === productCount)
      ) {
        return;
      }

      if (!isEmpty(type)) {
        newQty = "increment" === type ? productCount + 1 : productCount - 1;
      } else {
        // If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
        newQty = event.target.value ? parseInt(event.target.value) : 1;
      }

      // Set the new qty in state.
      setProductCount(newQty);

      if (products.length) {
        updateCart(item?.key, newQty, setCart, setUpdatingProduct);
      }
    }
  };

  return (
    <>
      {/* Product Box*/}
      <div className="flex justify-between my-2 p-1 pb-3 divider">
        {/* Image Box */}
        <div className="flex">
          <div className="ml-5">
            <Image
              src={!isEmpty(productImg?.src) ? productImg.src : ""}
              width={180}
              height={180}
              className="rounded-md"
            />
          </div>
          {/* Details Box */}
          <div className="flex flex-col justify-between space-y-3 lg:py-4 md:py-2">
            <div>
              <h3 className="text-lg font-bold mb-2">{item?.data?.name}</h3>
              <div className="bg-shadeLight flex justify-center items-center farsi-text w-max dark:bg-shadeDark rounded-md p-1 px-2 text-sm text-gray-400 text-center">
                <TfiMedallAlt />
                <a className="mr-1">
                  {item?.data?.guarantee
                    ? item.data.guarantee
                    : "گارانتی (اصالت و سلامت فیزیکی)"}
                </a>
              </div>
            </div>
            {/* Stock input handle Box */}
            <div className="flex items-center">
              <a className="ml-4">تعداد:</a>
              <div className="flex ml-3">
                {/* Increment product */}
                <button
                  onClick={(event) =>
                    handleQtyChange(event, item?.cartKey, "increment")
                  }
                  className="hover:scale-105 hover:shadow-sm cursor-pointer"
                >
                  <CiSquarePlus color="green" size={26} />
                </button>
                {/* <a className="ml-2 mr-2 text-lg">24</a> */}
                <input
                  type="number"
                  min="1"
                  data-cart-key={item?.data?.cartKey}
                  className="text-center w-[50px] ml-2 mr-2 items-center"
                  value={productCount}
                  onChange={(event) =>
                    handleQtyChange(event, item?.cartKey, "")
                  }
                />
                {/* decrement product */}
                <button
                  onClick={(event) =>
                    handleQtyChange(event, item?.cartKey, "decrement")
                  }
                  className="hover:scale-105 hover:shadow-sm cursor-pointer"
                >
                  <CiSquareMinus color="red" size={26} />
                </button>
              </div>
              {/* updating loading spinner */}
              <div>
                {updatingProduct || removingProduct ? <LoadingCart /> : null}
              </div>
            </div>
          </div>
        </div>
        {/* Price Box */}
        <div className="flex flex-col justify-between text-center items-end lg:py-4 md:py-2">
          <button
            onClick={(event) => {
              handleRemoveProductClick(event, item?.key);
            }}
            className="hover:scale-105 duration-150"
          >
            <MdDelete className="hover:fill-red-500" size={26} />
          </button>

          <div className="flex">
            <p className="ml-4">قیمت:</p>
            <div className="flex">
              <div className="ml-2">{item?.line_subtotal}</div>
              <div>{item?.currency}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
