import Link from "next/link";
import { useContext } from "react";
import { useTheme } from "next-themes";
import { CartContext } from "../context/cart-context";
import { MdOutlineLightMode, MdBedtime } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { CiUser, CiShoppingCart } from "react-icons/ci";
import { ImPhone } from "react-icons/im";
import { FaTelegram, FaInstagram } from "react-icons/fa";
import User from "../icons/User";
import Bag from "../icons/Bag";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [cart, setCart] = useContext(CartContext);

  return (
    <>
      {/* Desktop/Tablet */}
      <div className="bg-secondaryLight dark:bg-secondaryDark xsm:hidden md:block">
        <div className="container mx-auto pt-4 space-y-4">
          {/* <!-- Upper Nav --> */}
          {/* <div className="flex justify-between items-center text-sm pb-2 divider">
            
            <div className="flex space-x-4 items-center justify-center text-white">
              <a className="social-links">
                <ImPhone size={18} />
                <span className="font-medium ml-1">021-123456789</span>
              </a>
              <a href="https://Instagram.com/pouryak" className="social-links">
                <FaInstagram size={18} />
                <span className="font-medium ml-1">Instagram</span>
              </a>
              <a href="https://telegram.com/pouryak" className="social-links">
                <FaTelegram size={18} />
                <span className="font-medium ml-1">Telegram</span>
              </a>
            </div>
            
            <div className="flex space-x-4">
              <Link href="/blog">
                <a className="cursor-pointer footer-item">بلاگ</a>
              </Link>
              <Link href="/about-us">
                <a className="cursor-pointer footer-item">درباره ما</a>
              </Link>
              <Link href="/contact-us">
                <a className="cursor-pointer footer-item">تماس با ما</a>
              </Link>
            </div>
          </div> */}
          {/* <!-- Lower Nav --> */}
          <div className="flex xsm:flex-col md:flex-row md:space-x-6 md:space-y-0 xsm:space-y-4 xsm:space-x-0 items-center justify-between">
            <div className="flex space-x-4 items-center">
              <Link href="/my-account">
                <a className="nav-button text-sm">
                  {/* <CiUser size={18} /> */}
                  ورود / ثبت نام
                </a>
              </Link>

              <Link href="/cart">
                <a className="nav-button relative">
                  <BsHandbag size={18} />
                  <span className="absolute bg-red-500 text-white rounded-full text-center px-2 -top-3 -right-2">
                    {cart?.totalQty ? `${cart?.totalQty}` : null}
                  </span>
                </a>
              </Link>
              <a
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="nav-button"
              >
                {theme === "dark" ? (
                  <MdBedtime size={18} />
                ) : (
                  <MdOutlineLightMode size={18} />
                )}
              </a>
            </div>
            {/* Search Input */}
            <input
              className="rounded-md py-2 px-4 focus:outline-none border border-gray-200 dark:border-secondaryDark placeholder:text-right grow farsi-text max-w-[600px]"
              type="search"
              placeholder="کالاتو جستجو کن"
            />
            <Link href="/">
              <a className="website-logo text-3xl dark:text-white text-gray-800 justify-self-end">
                SiteTitle
              </a>
            </Link>
          </div>
          {/* Navbar */}
          <nav className="">
            <div className="flex farsi-text text-right">
              {/* Main page */}
              <div className="px-5 py-1 dark:hover:bg-shadeDark hover:bg-shadeLight duration-150">
                <Link href="/">
                  <a>صفحه اصلی</a>
                </Link>
              </div>
              <div className="px-5 py-1 dark:hover:bg-shadeDark hover:bg-shadeLight duration-150">
                <Link href="/categories/computer-and-parts">
                  <a>کامپیوتر و تجهیزات</a>
                </Link>
              </div>
              <div className="px-5 py-1 dark:hover:bg-shadeDark hover:bg-shadeLight duration-150">
                <Link href="/categories/laptop-and-accessories">
                  <a>لپ تاپ و قطعات</a>
                </Link>
              </div>
              <div className="px-5 py-1 dark:hover:bg-shadeDark hover:bg-shadeLight duration-150">
                <Link href="/categories/mobile-and-tablet">
                  <a>موبایل و تبلت</a>
                </Link>
              </div>
              <div className="px-5 py-1 dark:hover:bg-shadeDark hover:bg-shadeLight duration-150">
                <Link href="/categories/home-consoles">
                  <a>کنسول های خانگی</a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex flex-col space-y-3 bg-secondaryLight dark:bg-secondaryDark xsm:block md:hidden p-3">
        {/* Upper Nav */}
        <div className="flex space-x-4 items-center justify-between">
          <div className="flex space-x-4 items-center">
            <Link href="/my-account">
              <a className="nav-button">
                <User />
              </a>
            </Link>
            <Link href="/cart">
              <a className="nav-button relative">
                <Bag />
                <span className="absolute bg-red-500 rounded-full text-center px-1 -top-3 -right-2">
                  {cart?.totalQty ? `${cart?.totalQty}` : null}
                </span>
              </a>
            </Link>
          </div>
          {/* Logo */}
          <div>
            <Link className="shrink" href="/">
              <a className="website-logo text-2xl dark:text-white text-gray-800  justify-self-end">
                SiteTitle
              </a>
            </Link>
          </div>
          {/* Mobile Nav */}
          <div className="flex space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="nav-button"
            >
              {theme === "dark" ? <MdBedtime /> : <MdOutlineLightMode />}
            </button>
            <button className="nav-button">
              <CgMenu />
            </button>
          </div>
        </div>
        {/* Lower Nav/Search bar */}
        <input
          className="rounded-md py-2 px-4 focus:outline-none border border-gray-200 dark:border-secondaryDark placeholder:text-right grow w-full farsi-text"
          type="search"
          placeholder="کالاتو جستجو کن"
        />
      </div>
    </>
  );
};

export default Header;
