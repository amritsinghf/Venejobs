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
  return (
    <>
      <div className="sm:w-full w-[600px] relative ">
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
                  <li className="text-paragraph">
                    <Link href="">Find Work</Link>
                  </li>
                  <li className="text-paragraph">
                    <Link href="">Deliver Work</Link>
                  </li>
                  <li className="text-paragraph">
                    <Link href="">Manage Finances</Link>
                  </li>
                  <li className="text-paragraph">
                    <Link href="">Messge</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <ProfileDropdown />

            <div className="text-center">
              <Button
                className="text-black lg:hidden   hover:bg-brand-strong  font-medium leading-5 rounded-base text-sm px-4 py-2.5"
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
                  className={`fixed top-0 right-0 lg:hidden h-full w-110 bg-white shadow-xl z-50 p-4 flex flex-col gap-8 transform transition-transform duration-300 ${
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
                        style={{ width: 50, height: 50 }}
                        className="cursor-pointer"
                      />
                      <h5 className="text-4xl sm:text-2xl  font-semibold text-gray-900">
                        Venejobs
                      </h5>
                    </div>
                    <Button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      <ClearIcon fontSize="large" />
                    </Button>
                  </div>
                  <hr />
                  <nav className="flex flex-col items-start gap-8 sm:gap-3">
                    <div
                      role="button"
                      className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50"
                    >
                      <Link
                        href={
                          user?.role_id === 2
                            ? Routes.profile.client.home
                            : Routes.profile.freelancer.home
                        }
                        className="text-3xl sm:text-2xl text-paragraph px-4 font-medium"
                      >
                        Profile
                      </Link>
                    </div>
                    <div
                      role="button"
                      className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 md:text-2xl"
                    >
                      <Link
                        href={""}
                        className="text-3xl sm:text-2xl text-paragraph px-4 font-medium"
                      >
                        Find Work
                      </Link>
                    </div>
                    <div
                      role="button"
                      className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 md:text-2xl"
                    >
                      <Link
                        href={""}
                        className="text-3xl sm:text-2xl text-paragraph px-4 font-medium"
                      >
                        Deliver Work
                      </Link>
                    </div>
                    <div
                      role="button"
                      className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 md:text-2xl"
                    >
                      <Link
                        href={""}
                        className="text-3xl sm:text-2xl text-paragraph px-4 font-medium"
                      >
                        Manage Finances
                      </Link>
                    </div>

                    <div
                      role="button"
                      className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 md:text-2xl"
                    >
                      <Link
                        href={""}
                        className="text-3xl sm:text-2xl text-paragraph px-4 font-medium"
                      >
                        Message
                      </Link>
                    </div>

                    <div
                      role="button"
                      className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 md:text-2xl"
                    >
                      <Button
                        type="button"
                        onClick={() => user_logout()}
                        className="w-full text-left flex  items-center gap-1 px-4 py-2 text-2xl font-medium  text-red-600 cursor-pointer"
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
