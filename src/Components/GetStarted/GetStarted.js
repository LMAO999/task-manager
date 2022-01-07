import React from "react";
import NavBar from '../NavBar/NavBar';

const GetStarted = () => {
  return (
    <div>
      <NavBar/>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Ready To Dive In</span>
          </h1>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-indigo-600 xl:inline">
              Task Schedular
            </span>
          </h1>
          <p className="mt-3 text-base text-black-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Add your tasks here. Create groups and invite your friends and work together.
            Manage Your Schedules Here.
            Get many more features.
          </p>
          <div className="mb-0 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
      {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://media.istockphoto.com/vectors/schedule-appointment-planning-clock-and-calendar-with-marked-date-and-vector-id1185278760?s=2048x2048"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default GetStarted;
