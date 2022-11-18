import Image from "next/image";
import Link from "next/link";
import React from "react";
import enamad from "../../../public/enamad.png";
import zarinpal from "../../../public/zarinpal.svg";
import { footerMenuOne, footerMenuTwo } from "../../data/footer-data";

const Footer = () => {
  return (
    <footer className="bg-secondaryLight dark:bg-secondaryDark p-4 ">
      {/* Main container */}
      <div className="container mx-auto flex md:flex-row md:text-right xsm:flex-col xsm:text-center xsm:space-y-5 justify-between py-16">
        {/* Logos */}
        <div className="flex space-x-4 justify-center">
          <div className="border border-gray-200 dark:border-secondaryDark rounded-md p-2 grow-0 h-fit">
            <Image alt="enamad-logo" src={enamad} height={100} width={100} />
          </div>
          <div className="border border-gray-200 dark:border-secondaryDark rounded-md p-2 grow-0 h-fit">
            <Image
              alt="zarinpal-logo"
              src={zarinpal}
              height={100}
              width={100}
            />
          </div>
        </div>
        {/* Menu 1: Articles */}
        <div className="flex flex-col space-y-1 farsi-text">
          <h3 className="text-bold mb-4">منوی اصلی</h3>
          <div className="flex flex-col space-y-2">
            {footerMenuOne.map((item) => (
              <Link href={item.slug} key={item.id}>
                <a className="footer-item">{item.name}</a>
              </Link>
            ))}
          </div>
        </div>
        {/* Menu 2: Articles */}
        <div className="flex flex-col space-y-1 farsi-text">
          <h3 className="text-bold mb-4">منوی اصلی</h3>
          <div className="flex flex-col space-y-2">
            {footerMenuTwo.map((item) => (
              <Link href={item.slug} key={item.id}>
                <a className="footer-item">{item.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-gray-400">
        کلیه حقوق این وبسایت محفوض می باشد © 2022
      </p>
    </footer>
  );
};

export default Footer;
