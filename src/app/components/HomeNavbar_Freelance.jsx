"use client";
import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import { Routes } from "../routes";
import { useState } from "react";
import SvgIcon from "./SvgIcon";
import { useRouter } from "next/navigation";
import toastStore from "../store/toastStore";
import Button from "./button/Button";
import userApiStore from "../store/userStore";
import ClearIcon from "@mui/icons-material/Clear";

export default function HomeNavbarFreelance() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const showSuccess = toastStore.getState().showSuccess;
  const showError = toastStore.getState().showError;
  const { user, loading, error, fetchProfile, logout } = userApiStore();
  const user_logout = () => {
    try {
      logout();
      localStorage.removeItem("token");
      router.push(Routes.home);
      //currenly just removing from localstorage but still in cookie
      showSuccess("Logged Out Successfully!", "success");
    } catch (error) {
      showError(error, "error");
    }
  };

  const NavLinks = [
    {
      label: "Find Work",
      href: "",
      icon: "",
    },
    {
      label: "Deliver Work",
      href: "",
      icon: "",
    },
    {
      label: "Manage Finances",
      href: "",
      icon: "",
    },
    {
      label: "Message",
      href: "",
      icon: "",
    },
  ];

  const SidebarLinks = [
    {
      label: "Profile",
      href:
        user?.role_id === 2 ? Routes.profile.client.home
                            : Routes.profile.freelancer.home,
      className: "text-3xl sm:text-2xl text-paragraph px-4 font-medium",
    },
    {
      label: "Find Work",
      href: "",
      icon: "",
    },
    {
      label: "Deliver Work",
      href: "",
      icon: "",
    },
    {
      label: "Manage Finances",
      href: "",
      icon: "",
    },
    {
      label: "Message",
      href: "",
      icon: "",
    },
  ];

  return (
    <>
      <div className="w-full  relative ">
        <div className="max-w-[1420px] w-full mx-auto ">
          <div className="flex justify-between items-center py-5 ">
            <div className="flex justify-evenly gap-1  items-center px-2">
              <Link href={Routes.freelancer.get_started}>
                <Image
                  src="/logo_freelance.png"
                  alt="logo image"
                  height={500}
                  width={500}
                  style={{ width: 40, height: 40 }}
                  className="cursor-pointer"
                />
              </Link>
              <h2 className="text-paragraph font-bold cursor-pointer">
                <Link href={Routes.freelancer.get_started}>Venejobs</Link>
              </h2>
            </div>
            <div className="lg:block hidden">
              <nav>
                <ul className="flex justify-around gap-6  items-center sm:w-[500]   xl:mx-50">
                  {NavLinks.map((item, idx) => (
                    <li className="text-paragraph" key={item.label} >
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <ProfileDropdown />

            <div className="text-center">
              <Button
                className="text-black lg:hidden  hover:bg-brand-strong  font-medium leading-5 rounded-base text-sm px-4 py-2.5"
                type="button"
                aria-controls="drawer-navigation"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
              >
                <SvgIcon name="ToggleMenu" />
              </Button>
            </div>

            {menuOpen && (
              <>
                <div
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={() => setMenuOpen(false)}
                ></div>

                <div
                  className={`fixed top-0 right-0 lg:hidden h-full w-50 bg-white shadow-xl z-50 p-4 flex flex-col gap-8 transform transition-transform duration-300 ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <div className="flex justify-between items-center  mt-10">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/logo_freelance.png"
                        alt="logo image"
                        height={500}
                        width={500}
                        style={{ width: 30, height: 30 }}
                        className="cursor-pointer"
                      />
                      <h5 className="text-xl font-semibold text-gray-900">
                        Venejobs
                      </h5>
                    </div>
                    <Button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      <ClearIcon fontSize="small" />
                    </Button>
                  </div>
                  <hr />
                  <nav className="flex flex-col items-start gap-8 sm:gap-3">
                    {SidebarLinks.map((item, idx) => {
                      return (
                      <div
                        role="button"
                        className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 text-lg "
                      key={item.label}>
                        <Link
                          href={item.href}
                          className="text-xl text-paragraph px-4 font-medium"
                        >
                          {item.label}
                        </Link>
                      </div>
                    )
                    })}

                    <div
                      role="button"
                      className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 md:text-2xl"
                    >
                      <Button
                        type="button"
                        onClick={() => user_logout()}
                        className="w-full text-left flex  items-center gap-1 px-4 py-2 text-xl font-medium  text-red-600 cursor-pointer"
                      >
                        <SvgIcon name="Signout" /> Sign out
                      </Button>
                    </div>
                  </nav>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
