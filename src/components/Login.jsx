import React from "react";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div>
      <div className="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden">
        <div className="xl:flex xl:flex-col xl:items-center xl:justify-center xl:w-1/2 bg-black ">
          <img className="w-40" src={logo} alt="my zomato" />
          <span className="text-4xl tracking-light mt-0">VirtualR</span>
        </div>

        <div className="w-full xl:w-1/2 p-8">
          <form method="post" action="#" onSubmit="return false">
            <h1 className=" text-2xl font-bold">Sign in to your account</h1>
            <div>
              <span className="text-gray-600 text-sm">
                Don't have an account?
              </span>
              <span className="text-gray-700 text-sm font-semibold">
                Sign up
              </span>
            </div>
            <div className="mb-4 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="text"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-6 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                placeholder="Your password"
              />
              <a
                className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex w-full mt-8">
              <button
                className="py-2 px-3 border rounded-md flex-auto bg-gradient-to-r from-orange-500 to-orange-800"
                type="button"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
