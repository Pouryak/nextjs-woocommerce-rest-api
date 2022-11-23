import { useRouter } from "next/router";
import { useRef, useState } from "react";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  async function formSubmitHandler(e) {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    // router.push("/my-account");
  }

  return (
    <div className="mx-auto items-center justify-center">
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
        action=""
      >
        <label className="font-semibold text-xs" htmlFor="usernameField">
          Username or Email
        </label>
        <input
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="text"
          ref={usernameRef}
        />
        <label className="font-semibold text-xs mt-3" htmlFor="passwordField">
          Password
        </label>
        <input
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="password"
          ref={passwordRef}
        />
        <button
          type="submit"
          className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
        >
          Login
        </button>
        <div className="flex mt-6 justify-center text-xs">
          <a className="text-blue-400 hover:text-blue-500" href="#">
            Forgot Password
          </a>
          <span className="mx-2 text-gray-300">/</span>
          <a className="text-blue-400 hover:text-blue-500" href="#">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
