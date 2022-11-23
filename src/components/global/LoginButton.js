import Link from "next/link";
import { useRouter } from "next/router";

import fetchJson from "../../../lib/fetchJson";
import useUser from "../../../lib/useUser";

export default function LoginButton() {
  const { user, mutateUser } = useUser();
  const router = useRouter();

  if (!user || user.isLoggedIn === false) {
    return (
      <button className="z-10 flex items-center text-white  text-sm rounded-md focus:outline-none p-3 bg-blue-500 hover:bg-blue-700">
        <Link href="/login">
          <a>ورود / ثبت نام</a>
        </Link>
      </button>
    );
  }

  return (
    <div className="flex justify-center relative group">
      <button className="z-10 flex items-center dark:text-white text-gray-700 text-sm rounded-md focus:outline-none duration-200 nav-button">
        <a className="flex space-x-1 items-center">
          <span>{user?.data?.login?.user?.name}</span>
          <svg
            className="w-5 h-5 inline-block"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </button>
      <div className="absolute right-0 top-7 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800 group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform farsi-text">
        <a
          href="#"
          className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <img
            className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
            src={
              user?.data?.login?.user
                ? user?.data?.login?.user?.avatar?.url
                : "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
            }
            alt="user-profile-picture"
          />
          <div className="mx-1">
            <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              First Lastname
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              example@mail.com
            </p>
          </div>
        </a>

        <hr className="border-gray-200 dark:border-gray-700 " />

        <a
          href="#"
          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          پروفایل
        </a>

        <a
          href="#"
          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          تنظیمات
        </a>

        <hr className="border-gray-200 dark:border-gray-700 " />

        <a
          href="#"
          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          تماس با پشتیبانی
        </a>
        <a
          onClick={async (e) => {
            e.preventDefault();
            mutateUser(
              await fetchJson("/api/logout", { method: "POST" }),
              false
            );
            router.push("/");
          }}
          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
        >
          خروج
        </a>
      </div>
    </div>
  );
}
