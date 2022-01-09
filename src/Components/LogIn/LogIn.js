import React from "react";

import { LockClosedIcon } from "@heroicons/react/solid";

import NavBar from "../NavBar/NavBar";

const LogIn = () => {
  return (
    <>
    <NavBar/>
        <div className="min-h-full flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 mt-0">
          <div className="max-w-md w-full space-y-8 border-solid border-2 rounded-lg outline-blue-500 p-8  shadow-lg shadow-cyan-700/50 hover:bg-gradient-to-r from-indigo-600">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://img.icons8.com/external-bearicons-blue-bearicons/344/external-login-call-to-action-bearicons-blue-bearicons.png"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" >
                LogIn to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{" "}
                <a
                  href="/signin"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  if not have account please sign in
                </a>
              </p>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="pt-4 shadow-lg shadow-blue-500/50 rounded-lg">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div className="pt-4 shadow-lg shadow-blue-500/50 rounded-lg border-solid border-3 border-black ">
                  <label htmlFor="password" className="sr-only ">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  );
};

export default LogIn;
