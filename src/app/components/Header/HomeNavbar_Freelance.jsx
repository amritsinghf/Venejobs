"use client";
import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import { Routes } from "../../routes";
import { useState } from "react";
import SvgIcon from "../Utility/SvgIcon";
import { useRouter } from "next/navigation";
import toastStore from "../../store/toastStore";
import userApiStore from "../../store/userStore";

import HomeNavbarMobileFreelance from "../navbar/HomeNavbarMobileFreelance";

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
      href:Routes.freelancer.profileData,
        // user?.role_id === 2
        //   ? Routes.profile.client.home
        //   : Routes.profile.freelancer.home,
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
        <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:w-[2000px] lg:max-w-[960px] xl:max-w-[1240px] 2xl:max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center py-5">
            <div className="flex gap-3 items-center">
              {/* <Link href={Routes.freelancer.page}> */}
                <Image
                  className="cursor-pointer w-10 md:w-[50px] md:h-[50px]"
                  src="/logo_freelance.png"
                  alt="logo image"
                  height={500}
                  width={500}
                  style={{ width: 40, height: 40 }}
                />
              {/* </Link> */}
              <h2 className="text-gray-600  text-lg font-extrabold cursor-pointer">
                {/* <Link href={Routes.freelancer.page}> */}
                Venejobs
                {/* </Link> */}
              </h2>
            </div>

            <div className="lg:block hidden">
              <nav>
                <ul className="flex items-center gap-6 lg:gap-3 xl:gap-15 md:gap-10">
                  {NavLinks.map((item) => (
                    <li
                      className="text-paragraph text-base font-medium"
                      key={item.label}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <ProfileDropdown />

            <div
              role="button"
              tabIndex={0}
              className="text-black lg:hidden hover:bg-brand-strong font-medium leading-5 rounded-base text-sm  cursor-pointer"
              aria-controls="drawer-navigation"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(true)}
            >
              <SvgIcon name="ToggleMenu" />
            </div>

            <HomeNavbarMobileFreelance
              isOpen={menuOpen}
              setIsOpen={setMenuOpen}
              SidebarLinks={SidebarLinks}
              logout={user_logout}
            />
          </div>
        </div>
      </div>
    </>
  );
}
