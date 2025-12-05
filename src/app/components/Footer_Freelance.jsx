"use client";

import { useState } from "react";
import Footerdropdown from "./FooterDropdown";
import SvgIcon from "./SvgIcon";
import Button from "./button/Button";
import Link from "next/link";

export default function Footer_Freelance() {
  const [open, setOpen] = useState(false);

  const socialLinks = {
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
  };

  const aboutLinks = [
    { label: "About Us", url: "/about" },
    { label: "Become Seller", url: "/become-seller" },
    { label: "Jobs", url: "/jobs" },
    { label: "Pricing", url: "/pricing" },
    { label: "Services", url: "/services" },
    { label: "Terms of Services", url: "/terms" },
  ];

  const categories = [
    { label: "Design & Creative", url: "/categories/design-creative" },
    { label: "Development & IT", url: "/categories/development-it" },
    { label: "Music & Audio", url: "/categories/music-audio" },
    { label: "Programming & Tech", url: "/categories/programming-tech" },
    { label: "Digital Marketing", url: "/categories/digital-marketing" },
    { label: "Finance & Accounting", url: "/categories/finance-accounting" },
    { label: "Writing & Translation", url: "/categories/writing-translation" },
  ];

  const helpLinks = [
    { label: "Help & Support", url: "/help-support" },
    { label: "FAQ", url: "/faq" },
    { label: "Contact Us", url: "/contact" },
  ];

  return (
    <>
      <footer className="bg-footerfreelance w-full 2xl:mt-84">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="px-4 py-6 bg-footerfreelance flex justify-between flex-wrap">
            <div className="flex items-center justify-start gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center ">
                <SvgIcon name="Footerlogo_green" />
              </span>
              <h2 className="text-white font-extrabold text-lg">Venejobs</h2>
            </div>

            <div className="flex items-center mt-4 space-x-5 rtl:space-x-reverse">
              <p className="text-white font-medium text-[16px]">Follow Us</p>

              {Object.entries(socialLinks).map(([key, url]) => (
                <Link
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <SvgIcon
                    name={`${key.charAt(0).toUpperCase() + key.slice(1)}`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <hr className="text-white " />
        <div className="mx-auto w-7xl max-w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-6 lg:py-8 lg:grid-cols-4">
            <div>
              <h2 className="mb-6 text-lg font-medium text-gray-900  dark:text-white">
                About
              </h2>
              <ul className="text-gray-500 dark:text-white opacity-50">
                {aboutLinks.map((item) => (
                  <li key={item.label} className="mb-4">
                    <Link href={item.url} className="hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-medium text-gray-900  dark:text-white">
                Categories
              </h2>
              <ul className="text-gray-500 dark:text-white opacity-50">
                {categories.map((item) => (
                  <li key={item.label} className="mb-4">
                    <Link href={item.url} className="hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-medium text-gray-900  dark:text-white">
                Support
              </h2>
              <ul className="text-gray-500 dark:text-white opacity-50">
                {helpLinks.map((item) => (
                  <li key={item.label} className="mb-4">
                    <Link href={item.url} className="hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-medium text-gray-900 text-lg dark:text-white">
                Subscribe
              </h2>

              <div className="relative">
                <input
                  type="search"
                  id="search"
                  className="block w-full p-6 sm:p-4 text-sm text-black border border-gray-300 rounded-lg  bg-gray-50
                                            dark:bg-[#666666] dark:border-gray-600 dark:placeholder-gray-400 
                                            dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  placeholder="Your Email Address"
                  required
                />

                <Button
                  type="submit"
                  className="text-primary text-[16px] font-medium absolute end-2.5 bottom-2.5 md:top-7 lg:top-2 xl:top-2 2xl:top-2 sm:top-0 rounded-lg text-sm px-4 py-0.9"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
          <div className="px-4 py-6 bg-footerfreelance md:flex md:items-center md:justify-between">
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

              <Button
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
              </Button>
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
