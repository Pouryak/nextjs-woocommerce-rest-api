import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../cart/AddToCart";
import { IoAddCircleOutline } from "react-icons/io5";

const ProductCard = ({ slug, id, title, price, imageURL }) => {
  return (
    <div key={id} className="product-card farsi-text">
      <div>
        <Link
          key={`${id}-link`}
          href={{ pathname: `/product/${slug}` }}
          className="items-center"
        >
          <a>
            <Image
              className="border rounded-sm cursor-pointer"
              src={imageURL}
              width={220}
              height={220}
              alt={`product-${id}`}
            />
          </a>
        </Link>
      </div>
      <div className="mt-2">
        <p className="text-md font-bold mb-1">{title}</p>
        <div className="flex font-bold items-center dark:text-green-400 text-green-700">
          <p
            className="ml-1 text-lg"
            dangerouslySetInnerHTML={{ __html: price.replace("تومان", "") }}
          ></p>
          <span className="text-sm">تومان</span>
        </div>

        <AddToCart className="add-cart-button border-gray-300" productId={id}>
          <IoAddCircleOutline size={26} />
        </AddToCart>
      </div>
    </div>
  );
};

export default ProductCard;
