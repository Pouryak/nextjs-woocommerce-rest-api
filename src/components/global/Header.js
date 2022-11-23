import Link from "next/link";
import { useContext } from "react";
import { useTheme } from "next-themes";
import { CartContext } from "../context/cart-context";
import { MdOutlineLightMode, MdBedtime } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import User from "../icons/User";
import Bag from "../icons/Bag";
import LoginButton from "./LoginButton";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [cart, setCart] = useContext(CartContext);

  return (
    <>
      {/* Desktop/Tablet */}
      <div className="bg-primaryLight dark:bg-primaryDark xsm:hidden md:block">
        <div className="container mx-auto pt-4 space-y-4">
          <div className="flex xsm:flex-col md:flex-row md:space-x-6 md:space-y-0 xsm:space-y-4 xsm:space-x-0 items-center justify-between">
            <div className="flex space-x-4 items-center">
              <LoginButton />

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
              className="rounded-md py-2 px-4 bg-gray-100 dark:bg-shadeDark focus:outline-none border border-gray-300 dark:border-secondaryDark placeholder:text-right grow farsi-text max-w-[600px]"
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
              <div className="menu-items">
                <Link href="/">
                  <a>صفحه اصلی</a>
                </Link>
              </div>
              <div className="menu-items">
                <Link href="/categories/computer-and-parts">
                  <a>کامپیوتر و تجهیزات</a>
                </Link>
              </div>
              <div className="menu-items">
                <Link href="/categories/laptop-and-accessories">
                  <a>لپ تاپ و قطعات</a>
                </Link>
              </div>
              <div className="menu-items">
                <Link href="/categories/mobile-and-tablet">
                  <a>موبایل و تبلت</a>
                </Link>
              </div>
              <div className="menu-items">
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
