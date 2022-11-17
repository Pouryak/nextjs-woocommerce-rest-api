import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../cart/AddToCart";

const ProductCard = ({ slug, id, title, price, imageURL }) => {
  return (
    <div key={id} className="product-card ">
      <div>
        <Link
          key={`${id}-link`}
          href={{ pathname: `/product/${slug}` }}
          className="items-center"
        >
          <a>
            <Image
              className="border rounded-md cursor-pointer"
              src={imageURL}
              width={220}
              height={220}
              alt={`product-${id}`}
            />
          </a>
        </Link>
      </div>
      <div className="mt-2 farsi-text">
        <p className="text-sm mb-1">{title}</p>
        <div className="flex items-center">
          <p
            className="ml-1 text-md"
            dangerouslySetInnerHTML={{ __html: price.replace("تومان", "") }}
          ></p>
          <span className="text-sm">تومان</span>
        </div>
        <AddToCart productId={id} />
      </div>
    </div>
  );
};

export default ProductCard;
