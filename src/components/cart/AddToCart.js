import React from "react";
import { addToCart } from "../../utils/cart";
import { MdAddBox } from "react-icons/md";

function AddToCart({ productId }) {
  return (
    <button onClick={() => addToCart(productId)}>
      <MdAddBox
        size={32}
        className="group cursor-pointer hover:fill-green-500 duration-75"
      />
    </button>
  );
}

export default AddToCart;
