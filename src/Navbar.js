import React from "react";
import "./App.css";
import { useState } from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(true);

  return (
    <>
      {/* name and logo */}
      <nav className="bg-bgcolor px-2 sm:px-4 sticky py-2.5 dark:bg-gray-900 z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between">
          <a
            href="https://portal.gct.ac.in/"
            className="flex items-center mx-auto lg:mx-0"
          >
            <img
              src="https://i.postimg.cc/N0wHQPw0/gct-logo-2.png"
              className="mr-3 h-6 sm:h-9"
              alt="GCTLOGO"
            />
            <span className="font-black text-xl text-bubble">GCTPORTAL</span>
          </a>
          {/* breadcrums */}
          <div className="md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="sr-only"></span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* search bar */}
          <div
            className={
              navbarOpen
                ? " hidden  items-center w-full md:flex md:w-auto md:order-1 "
                : " items-center w-full md:flex md:w-auto md:order-1"
            }
            id="navbar-sticky"
          ></div>
          <div
            className={
              navbarOpen
                ? "hidden lg:block mx-auto w-5/12 "
                : " items-center w-full mx-auto"
            }
          >
            <form className="w-full">
              <label
                for="default-search"
                className="text-white mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              ></label>
              <div className="relative ">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                <input
                  type="search"
                  id="default-search"
                  className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-bubble hover:bg-bubble focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-bubble dark:hover:bg-bubble dark:focus:ring-orange-800"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-full text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
