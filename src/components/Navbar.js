import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <nav className="bg-white border-blue-200 px-2 sm:px-4 py-2.5 dark:bg-blue-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          {/* <a
            href="/"
            className="flex items-center">
            <img
              src="favicon.ico"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Hamro MCQ
            </span>
          </a> */}
          <Link
            to="/"
            className="flex items-center">
            <img
              src="favicon.ico"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Hamro MCQ
            </span>
          </Link>
          <div className="flex md:order-2">
            <Link
              to="/get-start"
              className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
              Get started
            </Link>

            

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-blue-200 text-white hover:bg-blue-700 "
              aria-controls="navbar-cta"
              aria-expanded="false">
              <svg
                className="w-6 h-6 "
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta">
            <ul className="flex flex-col p-4 mt-4 border border-blue-100 rounded-lg bg-blue-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-blue-800 md:dark:bg-blue-900 dark:border-blue-700">
              <li>
                {/* <a
                  href="/question-bank"
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:p-0 dark:hover:bg-blue-700 hover:underline">
                  Questions Banks
                </a> */}
                <Link
                  to="/question-bank"
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:p-0 dark:hover:bg-blue-700 hover:underline">
                  Questions Banks
                </Link>
              </li>

              <li>
                {/* <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:p-0 dark:hover:bg-blue-700 hover:underline">
                  Exams
                </a> */}
                <Link
                  to="/exam"
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:p-0 dark:hover:bg-blue-700 hover:underline">
                  Exams
                </Link>
              </li>
              <li>
                {/* <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:p-0 dark:hover:bg-blue-700 hover:underline">
                  Halls
                </a> */}
                <Link
                  to="/halls"
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:p-0 dark:hover:bg-blue-700 hover:underline">
                  Halls
                </Link>
              </li>
              <li>
                {/* <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:p-0 dark:hover:bg-blue-700 hover:underline">
                  Contact Us
                </a> */}
                <Link
                  to="/contact-us"
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:p-0 dark:hover:bg-blue-700 hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
