"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import userApiStore from "../store/userStore";
import toastStore from "../store/toastStore";
import { Routes } from "../routes";
import SvgIcon from "./SvgIcon";
import { useClickOutside } from "@/hooks/useClickOutside";
import Button from "./ui/Button";

export default function ProfileDropdown() {
  const router = useRouter();
  const [showDropdown, setshowDropdown] = useState(false);
  const { user, loading, error, fetchData } = userApiStore();
  const showToast = toastStore.getState().showToast;

  const logout = () => {
    localStorage.removeItem("token");

    router.push(Routes.home);
    //currenly just removing from localstorage but still in cookie
    showToast("Logged Out Successfully!", "success");
  };

  const dropdownRef = useRef(null);
  
    useClickOutside(dropdownRef, () => {
      setshowDropdown(false);
    });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="hidden sm:hidden lg:block ">
      <div className="flex items-center gap-1 ">
        <div className="flex items-center  gap-6">
          <div className="relative ">
            <span className="absolute inset-y-0 px-2  flex items-center ">
              <SvgIcon name="Search_Icon" />
            </span>
            <input
              type="search"
              id="search"
              className="block sm:w-[200px] px-8  rounded-2xl text-sm text-gray-900 border border-gray-300  bg-gray-50"
              placeholder="Search"
              required
            />
          </div>

          <SvgIcon name="Question" />
        </div>

        <Button
          type="button"
          className="relative rounded-full p-1 text-paragraph focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            data-slot="icon"
            aria-hidden="true"
            className="size-6"
          >
            <path
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>

        <div className="relative inline-block text-left  px-3" ref={dropdownRef}>
          <Button
            className="relative flex rounded-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            onClick={() => setshowDropdown((prev) => !prev)}
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="size-10 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
            />
          </Button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {user?.name}
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <Button
                onClick={() => logout()}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Sign out
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
