import React from "react";

const DashBoard = () => {
  return (
    <>
        <div className="bg-indigo-600 flex items-center">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-5% flex-1 flex items-center">
                <span className="flex p-3 rounded-lg bg-indigo-800 flex items-center">
                  <h1 className="flex pr-4 pl-4 text-white text-bold">
                    DashBoard
                  </h1>
                </span>
              </div>
            </div>
          </div>
        </div>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        />

        <div className="min-h-screen flex flex-row bg-gray-100">
          <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
            <div className="flex items-center justify-center h-20 shadow-md">
              <h1 className="text-3xl uppercase text-indigo-500"></h1>
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-menu bx-tada-hover bx-lg"></i>
              </span>
            </div>
            <ul className="flex flex-col py-4">
              <li>
                <a
                  href="/home"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <i className="bx bx-home bx-tada-hover"></i>
                  </span>
                  <span className="text-sm font-medium">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <i className="bx bx-plus bx-tada-hover"></i>
                  </span>
                  <span className="text-sm font-medium">Invite</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <i className="bx bx-task bx-tada-hover"></i>
                  </span>
                  <span className="text-sm font-medium">Tasks</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <i className="bx bx-book bx-tada-hover"></i>
                  </span>
                  <span className="text-sm font-medium">Calender</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <i className="bx bx-user bx-tada-hover"></i>
                  </span>
                  <span className="text-sm font-medium">Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <i className="bx bx-log-out bx-tada-hover"></i>
                  </span>
                  <span className="text-sm font-medium">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
};

export default DashBoard;
