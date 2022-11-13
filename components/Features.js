import React from "react";
import {
  CiDeliveryTruck,
  CiStar,
  CiCreditCard1,
  CiCalendar,
  CiPhone,
} from "react-icons/ci";

const Features = () => {
  return (
    <div className="container mx-auto flex space-x-3 justify-between my-6 pb-8 divider">
      <div className="feature-box">
        <div>
          <CiDeliveryTruck fill="green" className="mb-2" size={26} />
        </div>
        <h3 className="mb-1">ارسال سریع محصول</h3>
        <p className="text-xsm text-gray-500">به سرار ایران</p>
      </div>
      <div className="feature-box">
        <div>
          <CiStar fill="green" className="mb-2" size={26} />
        </div>
        <h3 className="mb-1">تضمین اصالت کالا</h3>
        <p className="text-xsm text-gray-500">با خیال راحت خرید کن</p>
      </div>
      <div className="feature-box">
        <div>
          <CiCreditCard1 fill="green" className="mb-2" size={26} />
        </div>
        <h3 className="mb-1">پرداخت ایمن</h3>
        <p className="text-xsm text-gray-500">پرداخت با درگاه معتبر زرینپال</p>
      </div>
      <div className="feature-box">
        <div>
          <CiCalendar fill="green" className="mb-2" size={26} />
        </div>
        <h3 className="mb-1">ضمانت بازگشت</h3>
        <p className="text-xsm farsi-text text-gray-500">
          7 روز ضمانت بازگشت وجه
        </p>
      </div>
      <div className="feature-box">
        <div>
          <CiPhone fill="green" className="mb-2" size={26} />
        </div>
        <h3 className="mb-1">پشتیبانی فروش</h3>
        <p className="text-xsm farsi-text text-gray-500">از ساعت 10 الی 17</p>
      </div>
    </div>
  );
};

export default Features;
