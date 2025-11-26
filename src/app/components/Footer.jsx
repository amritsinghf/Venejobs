"use client";

import { useState } from "react";
import Footerdropdown from "./FooterDropdown";
import SvgIcon from "./SvgIcon";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer className="bg-footerclient w-[600px] sm:w-full ">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="px-4 py-6 bg-footerclient  flex justify-between ">
            <div className="flex items-center justify-start gap-2  ">
              <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center ">
                <SvgIcon name="Footerlogo" />
              </span>
              <h2 className="text-white font-extrabold text-lg">Venejobs</h2>
            </div>
            <div className="flex items-center mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <p className="text-white font-medium text-[16px]">Follow Us</p>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <SvgIcon name="Facebook_logo" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <SvgIcon name="Twitter" />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <SvgIcon name="Instagram" />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <SvgIcon name="Linkedin" />
              </a>
            </div>
          </div>
        </div>

        <hr className="text-white" />
        <div className="mx-auto w-7xl max-w-full ">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-lg font-medium text-gray-900  dark:text-white">
                About
              </h2>
              <ul className="text-gray-500 dark:text-white/70 ">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Become Seller
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Jobs
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-medium text-gray-900  dark:text-white">
                Categories
              </h2>
              <ul className="text-gray-500 dark:text-white/70 ">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Design & Creative
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Development & IT
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Music & Audio
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Programming & Tech
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Digital Marketing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Finance & Accouting
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Writing & Translation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-medium text-gray-900  dark:text-white">
                Support
              </h2>
              <ul className="text-gray-500 dark:text-white/70 ">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Help & Support
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-medium text-gray-900 text-lg dark:text-white">
                Subscribe
              </h2>

              <form>
                <div className="relative">
                  <input
                    type="search"
                    id="search"
                    className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                                            focus:ring-blue-500 focus:border-blue-500 
                                            dark:bg-[#666666] dark:border-gray-600 dark:placeholder-gray-400 
                                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Email Address"
                    required
                  />

                  <button
                    type="submit"
                    className="text-primary text-[16px] font-medium absolute end-2.5 bottom-2.5 rounded-lg text-sm px-4 py-2 "
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="px-4 py-6 bg-neutral-900 md:flex md:items-center md:justify-between">
            <span className="text-[16px] text-gray-500 dark:text-gray-300 sm:text-center">
              Copyright <b> Venejobs.</b> 2024 All Rights Reserved.
            </span>
            <div className="flex items-center mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Terms of policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Privacy Policy
              </a>

              <button
                onClick={() => setOpen((prev) => !prev)}
                className="me-3 mb-3 md:mb-0 text-white bg-white/5 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
              >
                English
                <svg className="w-2.5 h-2.5 ms-3" fill="none">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="absolute left-0 bottom-full mb-2 w-44 rounded-lg shadow bg-neutral-900 z-50">
            <Footerdropdown />
          </div>
        )}
      </footer>
    </>
  );
}
