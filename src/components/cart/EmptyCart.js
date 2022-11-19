import Image from "next/image";
import Link from "next/link";

import emptyCartImage from "../../../public/empty-cart.png";

const EmptyCart = () => {
  return (
    <div className="flex flex-col space-y-6 py-4 text-center items-center justify-center">
      <Image alt="empty-cart" src={emptyCartImage} />
      <p>سبد خرید شما خالی است!</p>
      <Link href="/">
        <a className="text-blue-300 cursor-pointer hover:text-blue-500">
          بازگشت به صفحه اصلی
        </a>
      </Link>
    </div>
  );
};

export default EmptyCart;
