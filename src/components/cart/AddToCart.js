import React, { useContext, useState } from "react";
import Link from "next/link";
import LoadingCart from "./LoadingCart";
import Tooltip from "./AddToCartTooltip";
import { addToCart } from "../../utils/cart/index";
import { CartContext } from "../context/cart-context";

function AddToCart({
  children,
  className = "",
  productId,
  showTooltip = false,
}) {
  const [cart, setCart] = useContext(CartContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex mt-2 items-center">
      {showTooltip ? (
        <Tooltip text="افزودن به سبد">
          <button
            onClick={() =>
              addToCart(productId, 1, setCart, setIsAddedToCart, setIsLoading)
            }
            className={className}
            disabled={isLoading}
          >
            <a className="flex items-center">
              {isLoading ? <LoadingCart /> : children}
            </a>
          </button>
        </Tooltip>
      ) : (
        <button
          onClick={() =>
            addToCart(productId, 1, setCart, setIsAddedToCart, setIsLoading)
          }
          className={className}
          disabled={isLoading}
        >
          <a className="flex items-center">
            {isLoading ? <LoadingCart /> : children}
          </a>
        </button>
      )}

      <button>
        {isAddedToCart && !isLoading ? (
          <Link href="/cart">
            <a className="show-cart-button">مشاهده سبد</a>
          </Link>
        ) : null}
      </button>
    </div>
  );
}

export default AddToCart;
