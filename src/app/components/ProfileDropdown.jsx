"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import userApiStore from "../store/userStore";
import toastStore from "../store/toastStore";
import { Routes } from "../routes";
import SvgIcon from "./SvgIcon";
import { useClickOutside } from "@/hooks/useClickOutside";
import Button from "./button/Button";
import Link from "next/link";

export default function ProfileDropdown() {
  const router = useRouter();
  const [showDropdown, setshowDropdown] = useState(false);
  const { user, loading, error, fetchProfile } = userApiStore();
  const user_logout = userApiStore((s) => s.logout);
  const showSuccess = toastStore.getState().showSuccess;
  const showError = toastStore.getState().showError;

  const logout = () => {
    try {
      user_logout();
      localStorage.removeItem("token");

      router.push(Routes.home);
      showSuccess("Logged Out Successfully!", "success");
    } catch (error) {
      showError(error, "error");
    }
  };

  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => {
    setshowDropdown(false);
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="hidden sm:hidden lg:block ">
      <div className="flex items-center gap-6 md:gap-4">
        <div className="relative ">
          <span className="absolute inset-y-0 px-4  flex items-center ">
            <SvgIcon name="Search_Icon" />
          </span>
          <input
            type="search"
            id="search"
            className="block w-full px-10 py-2 rounded-4xl text-sm text-gray-900 font-medium shadow-sm"
            placeholder="Search"
            required
          />
        </div>

        <SvgIcon name="Question" />

        <button
          type="button"
          className="relative rounded-full p-1 text-paragraph focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <SvgIcon name="Notification" size={25} />
        </button>

        <div
          className="relative inline-block "
          ref={dropdownRef}
        >
          <button
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
          </button>

        </div>
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
            <Link
              href={Routes.profile}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {user?.name}
            </Link>
            <Link
              href={
                user?.role_id === 2
                  ? Routes.profile.client.info
                  : Routes.profile.freelancer.info
              }
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </Link>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <button
              onClick={() => logout()}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
