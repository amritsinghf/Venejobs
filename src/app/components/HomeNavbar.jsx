"use client";
import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import { Routes } from "../routes";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SvgIcon from "./SvgIcon";
import toastStore from "../store/toastStore";
import userApiStore from "../store/userStore";
import ClearIcon from "@mui/icons-material/Clear";

export default function HomeNavbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const showSuccess = toastStore.getState().showSuccess;
  const showError = toastStore.getState().showError;

  const { user, loading, error, fetchProfile } = userApiStore();

  const logout = () => {
    try {
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
      label: "Find Talent",
      href: "",
      icon: "",
    },
    {
      label: "Post a Job",
      href: Routes.job_post.form,
      icon: "",
    },
    {
      label: "Manage Work",
      href: "",
      icon: "",
    },
    {
      label: "Reports",
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
        user?.role_id === 2
          ? Routes.profile.client.home
          : Routes.profile.freelancer.home,
    },
    {
      label: "Find Talent",
      href: "",
      icon: "",
    },
    {
      label: "Post a job",
      href: "",
      icon: "",
    },
    {
      label: "Manage Work",
      href: "",
      icon: "",
    },
    {
      label: "Reports",
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
      <div className="w-full relative">
        <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1240px] 2xl:max-w-[1600px] mx-auto">
          <div className="flex justify-between items-center gap-3 py-5">
            <div className="flex gap-2 items-center ">
              <Link href={Routes.client}>
                <Image
                  className="cursor-pointer w-10 md:w-[50px] md:h-[50px]"
                  src="/home/logo-home.png"
                  alt="logo image"
                  height={500}
                  width={500}
                  style={{ width: 40, height: 40 }}
                />
              </Link>
              <h2 className="text-paragraph font-extrabold text-lg cursor-pointer">
                <Link href={Routes.client}>Venejobs</Link>
              </h2>
            </div>
            <div className="lg:block hidden">
              <nav>
                <ul className="flex justify-around gap-6 items-center">
                  {NavLinks.map((item, idx) => (
                    <li className="text-paragraph" key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <ProfileDropdown />

          </div>

          {menuOpen && (
            <>
              <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 `}
                onClick={() => setMenuOpen(false)}
              ></div>

              <div
                className={`fixed top-0 right-0 lg:hidden h-full w-50 bg-white shadow-xl z-50 p-4 flex flex-col gap-4 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                  }`}
              >
                <div className="flex justify-between items-center  mt-10">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/home/logo-home.png"
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
                  <button
                    className="text-gray-500 hover:text-gray-700 "
                    onClick={() => setMenuOpen(false)}
                  >
                    <ClearIcon fontSize="small" />
                  </button>
                </div>
                <hr />

                <nav className="flex flex-col items-start gap-4 sm:gap-3 ">
                  {SidebarLinks.map((item, idx) => {
                    return (
                      <div
                        role="button"
                        className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 text-lg"
                        key={item.label}
                      >
                        <Link
                          href={item.href}
                          className="text-xl  text-paragraph px-4 font-medium"
                        >
                          {item.label}
                        </Link>
                      </div>
                    );
                  })}

                  <div
                    role="button"
                    className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 text-2xl"
                  >
                    <button
                      type="button"
                      onClick={() => logout()}
                      className="w-full text-left flex items-center gap-1 px-4 py-2 text-xl font-medium text-red-600 cursor-pointer"
                    >
                      <SvgIcon name="Signout" /> Sign out
                    </button>
                  </div>
                </nav>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
