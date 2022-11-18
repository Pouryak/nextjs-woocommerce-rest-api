import React, { useContext, useState } from "react";
import Link from "next/link";
import LoadingCart from "./LoadingCart";
import { addToCart } from "../../utils/cart/index";
import { CartContext } from "../context/cart-context";

function AddToCart({ children, productId }) {
  const [cart, setCart] = useContext(CartContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex">
      <button
        onClick={() =>
          addToCart(productId, 1, setCart, setIsAddedToCart, setIsLoading)
        }
        className="add-cart-button"
        disabled={isLoading}
      >
        {/* <MdAddCircleOutline size={16} /> */}
        <a className="flex items-center">
          {isLoading ? <LoadingCart /> : children}
        </a>
      </button>
      {isAddedToCart && !isLoading ? (
        <Link href="/cart">
          <a className="show-cart-button">مشاهده سبد</a>
        </Link>
      ) : null}
    </div>
  );
}

export default AddToCart;
