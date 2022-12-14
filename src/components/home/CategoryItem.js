import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryItem = (props) => {
  return (
    <Link key={props.id} href="#">
      <div className="justify-center items-center text-center cursor-pointer">
        <Image
          alt={`${props.id}-cat`}
          src={props.image}
          height={150}
          width={150}
          className="hover:scale-105 duration-150"
        />
        <p className="text-md">{props.title}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
