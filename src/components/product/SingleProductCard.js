import React from "react";
import Image from "next/image";
import AddToCart from "../cart/AddToCart";

import { CiDeliveryTruck, CiStar, CiCalendar } from "react-icons/ci";
import { RiHeartAddLine } from "react-icons/ri";
import { IoBagAddSharp } from "react-icons/io5";

const SingleProductCard = ({ data }) => {
  return (
    <div className="container bg-secondaryLight dark:bg-secondaryDark shadow-md rounded-md my-6 farsi-text ">
      {/* Main container */}
      <div className="flex p-6 justify-between">
        <div className="flex">
          {/* Image */}
          <div className="z-0">
            <Image
              src={data.images[0].src}
              height={350}
              width={350}
              className="rounded-md relative"
              alt={data.images[0].alt}
            />
          </div>
          {/* Product Information */}
          <div className="flex flex-col space-y-3 pr-14 justify-between">
            <div>
              {/* Category */}
              <p className="text-xsm tracking-wide dark:text-gray-300 text-gray-600">
                {data.categories[0].name}
              </p>
              {/* Persian Title */}
              <div className="pt-3">
                <h1 className="text-xlg font-bold ">{data.name}</h1>
                {/* English Title */}
                <p className="text-gray-500">{data.name}</p>
              </div>
            </div>
            {/* Special Details */}
            <div className="flex flex-col space-y-2 text-sm">
              <h2>ویژگی ها:</h2>
              <ul className="list-disc list-inside">
                <li>نوع اتصال: باسیم</li>
                <li>یک سال گارانتی شرکت توسن سیستم شرق</li>
              </ul>
            </div>
            {/* Price */}
            <div className="text-xlg text-green-600 dark:text-green-400 font-bold flex">
              <h2 className="ml-2">{data.price.replace("تومان", "")}</h2>
              <span>تومان</span>
            </div>
            {/* Add to Cart */}
            <div className="flex justify-between">
              <button className="flex items-center rounded-md bg-green-500 text-white py-2 px-4 hover:bg-green-700 duration-150">
                <p>افزودن به سبد خرید</p>
                <IoBagAddSharp />
              </button>
              <button className="group rounded-md p-3 border border-gray-500 hover:bg-red-500 duration-150 hover:fill-white">
                <RiHeartAddLine />
              </button>
            </div>
          </div>
        </div>
        {/* Features */}
        <div className="flex flex-col justify-between text-center items-center">
          <div className="flex flex-col items-center justify-center">
            <CiDeliveryTruck fill="green" className="mb-2" size={26} />
            <h3 className="mb-1">ارسال سریع محصول</h3>
            <p className="text-xsm text-gray-500">به سرار ایران</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <CiStar fill="green" className="mb-2" size={26} />
            <h3 className="mb-1">تضمین اصالت کالا</h3>
            <p className="text-xsm text-gray-500">با خیال راحت خرید کن</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <CiCalendar fill="green" className="mb-2" size={26} />
            <h3 className="mb-1">ضمانت بازگشت</h3>
            <p className="text-xsm text-gray-500">هفت روز ضمانت بازگشت</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
