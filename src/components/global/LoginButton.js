import useUser from "../../../lib/useUser";

export default function LoginButton() {
  const { user } = useUser();

  console.log(user);

  return (
    <div class="flex justify-center">
      <div class="relative inline-block">
        <button class="relative z-10 flex items-center text-white p-3 text-sm rounded-md focus:outline-none duration-200 bg-blue-600 hover:bg-blue-800">
          <span class="mx-1">
            {user?.data?.login?.user ? (
              <div>
                <a>{user?.data?.login?.user?.name}</a>
                <svg
                  class="w-5 h-5 mx-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            ) : (
              "ورود / ثبت نام"
            )}
          </span>
        </button>
        <div class="absolute left-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
          <a
            href="#"
            class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <img
              class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
              src={
                user?.data?.login?.user
                  ? user?.data?.login?.user?.avatar?.url
                  : "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
              }
              alt="user-profile-picture"
            />
            <div class="mx-1">
              <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">
                First Lastname
              </h1>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                example@mail.com
              </p>
            </div>
          </a>

          <hr class="border-gray-200 dark:border-gray-700 " />

          <a
            href="#"
            class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            پروفایل
          </a>

          <a
            href="#"
            class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            تنظیمات
          </a>

          <hr class="border-gray-200 dark:border-gray-700 " />

          <a
            href="#"
            class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            تماس با پشتیبانی
          </a>
          <a
            href="#"
            class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            خروج
          </a>
        </div>
      </div>
    </div>
  );
}
