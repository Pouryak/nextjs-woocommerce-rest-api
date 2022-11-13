import Image from "next/image";
import React from "react";
import { isEmpty, isArray } from "lodash";
import enamad from "../public/enamad.png";
import zarinpal from "../public/zarinpal.svg";

const Footer = ({ data }) => {
  const { footerMenuItems, socialLinks } = data;

  return (
    <footer className="bg-secondaryLight dark:bg-secondaryDark p-4 ">
      {/* Main container */}
      <div className="container mx-auto flex justify-between py-16">
        {/* Logos */}
        <div className="flex space-x-4">
          <div className="border border-gray-200 dark:border-secondaryDark rounded-md p-2 grow-0 h-fit">
            <Image src={enamad} height={100} width={100} />
          </div>
          <div className="border border-gray-200 dark:border-secondaryDark rounded-md p-2 grow-0 h-fit">
            <Image src={zarinpal} height={100} width={100} />
          </div>
        </div>
        {/* Menu 1: Articles */}
        {!isEmpty(footerMenuItems) && footerMenuItems.length
          ? footerMenuItems.map((itemList) => (
              <div
                key={itemList.pageSlug}
                className="flex flex-col space-y-1 farsi-text"
              >
                <h3 className="text-bold mb-4">{itemList.title}</h3>
                <div className="flex flex-col space-y-2">
                  {itemList.children.map((item) => (
                    <p key={item.pageSlug} className="footer-item">
                      {item.title}
                    </p>
                  ))}
                </div>
              </div>
            ))
          : null}
      </div>

      <p className="text-center text-sm text-gray-400">
        کلیه حقوق این وبسایت محفوض می باشد © 2022
      </p>
      {/* social icons */}
      {/* <div className="mt-5">
        {!isEmpty(socialLinks) && isArray(socialLinks) ? (
          <div className="flex items-center justify-center space-x-8 mx-auto">
            {socialLinks.map((link) => (
              <div key={link.iconName} className="text-sm">
                <a href="">
                  <span className="">{link?.iconName}</span>
                </a>
              </div>
            ))}
          </div>
        ) : null}
      </div> */}
    </footer>
  );
};

export default Footer;
