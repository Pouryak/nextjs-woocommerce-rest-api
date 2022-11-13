import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdAddBox } from "react-icons/md";

const ProductCard = ({ slug, id, title, price, imageURL }) => {
  return (
    <div key={id} className="product-card farsi-text my-4">
      <Link key={`${id}-link`} href={`/product/${slug}`} className="">
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
          <div>
            {price} <span className="text-xsm">تومان</span>
          </div>
          <MdAddBox
            size={32}
            className="cursor-pointer hover:fill-green-500 duration-75"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
