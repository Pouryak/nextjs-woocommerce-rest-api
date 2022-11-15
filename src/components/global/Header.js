import Link from "next/link";
import Head from "next/head";
import { isEmpty } from "lodash";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdBedtime } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import {
  FaShoppingCart,
  FaUser,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

const Header = ({ data }) => {
  const { theme, setTheme } = useTheme();

  const { headerMenuItems, siteDescription, siteLogoUrl, siteTitle, favicon } =
    data;

  return (
    <>
      <Head>
        <title>{siteTitle || "Next WooCommerce"}</title>
        <link rel="icon" href={favicon || "/favicon.ico"} />
      </Head>
      <div className="bg-secondaryLight dark:bg-secondaryDark">
        <div className="container mx-auto pt-4 space-y-4">
          {/* <!-- Upper Nav --> */}
          <div className="flex justify-between items-center text-sm pb-2 divider">
            {/* <!-- Left nav --> */}
            <div className="flex space-x-4 items-center justify-center text-white">
              <div className="flex space-x-1 justify-center items-center rounded-md bg-green-500 px-3 py-1">
                <ImPhone size={18} />
                <span className="font-medium">021-123456789</span>
              </div>
              <div className="flex space-x-1 justify-center items-center rounded-md bg-red-500 px-3 py-1">
                <FaInstagram size={18} />
                <span className="font-medium ">Instagram</span>
              </div>
              <div className="flex space-x-1 justify-center items-center rounded-md bg-blue-400 px-3 py-1">
                <FaTelegram size={18} />
                <span className="font-medium">Telegram</span>
              </div>
            </div>
            {/* <!-- Right nav --> */}
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
          </div>

          {/* <!-- Lower Nav --> */}
          <div className="flex space-x-6 items-center justify-between">
            <div className="flex space-x-4 items-center">
              <Link href="/my-account">
                <a className="nav-button">
                  <FaUser />
                </a>
              </Link>
              <Link href="/cart">
                <a className="nav-button">
                  <FaShoppingCart />
                </a>
              </Link>
              <a
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="nav-button"
              >
                {theme === "dark" ? <MdBedtime /> : <MdOutlineLightMode />}
              </a>
            </div>

            <input
              className="rounded-md py-2 px-4 focus:outline-none border border-gray-200 dark:border-secondaryDark placeholder:text-right grow max-w-[600px] farsi-text"
              type="search"
              placeholder="کالاتو جستجو کن"
            />

            {/* LOGO */}
            {/* <img
              src={siteLogoUrl}
              alt={`${siteLogoUrl} Logo`}
              className="mr-2"
            /> */}
            <Link href="/">
              <a className="website-logo text-3xl dark:text-white text-gray-800  justify-self-end">
                {siteTitle || "SiteTitle"}
              </a>
            </Link>
          </div>
          {/* Navbar */}
          <nav className="">
            <div className="flex farsi-text text-right">
              {!isEmpty(headerMenuItems) && headerMenuItems.length
                ? headerMenuItems.map((item) => (
                    <div
                      className="px-5 py-1 dark:hover:bg-shadeDark hover:bg-shadeLight duration-150"
                      key={`${item.id}-${item.title}`}
                    >
                      <Link href={item?.url || "/"}>
                        <a>{item.title}</a>
                      </Link>
                    </div>
                  ))
                : null}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;