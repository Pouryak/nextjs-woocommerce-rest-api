import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../cart/AddToCart";

const ProductCard = ({ slug, id, dbId, title, price, imageURL }) => {
  return (
    <div key={id} className="product-card farsi-text my-4">
      <Link
        key={`${id}-link`}
        href={{ pathname: `/product/${slug}` }}
        className=""
      >
        <a>
          <Image
            className="border rounded-md cursor-pointer"
            src={imageURL}
            width={210}
            height={210}
            alt={`product-${id}`}
          />
        </a>
      </Link>
      <div className="mt-2">
        <p className="text-sm mb-3">{title}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p
              className="ml-1 text-md"
              dangerouslySetInnerHTML={{ __html: price.replace("تومان", "") }}
            ></p>
            <span className="text-sm">تومان</span>
          </div>
          <AddToCart productId={dbId} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
