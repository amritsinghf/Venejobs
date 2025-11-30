"use client";
import Image from "next/image";
import Link from "next/link";
import "flowbite";
import ProfileDropdown from "./ProfileDropdown";
import { Routes } from "../routes";
import { useState } from "react";
import SvgIcon from "./SvgIcon";
import { useRouter } from "next/navigation";
import toastStore from "../store/toastStore";
import Button from "./button/Button";
import userApiStore from "../store/userStore";


export default function HomeNavbarFreelance() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const showToast = toastStore.getState().showToast;
  const { user, loading, error, fetchProfile } = userApiStore();
  const logout = () => {
    localStorage.removeItem("token");

    router.push(Routes.home);
    //currenly just removing from localstorage but still in cookie
    showToast("Logged Out Successfully!", "success");
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
                  className={`fixed top-0 right-0 lg:hidden h-full w-74 bg-white shadow-xl z-50 p-4 flex flex-col gap-8 transform transition-transform duration-300 ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <div className="flex justify-between items-center mb-4 ">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/logo_freelance.png"
                        alt="logo image"
                        height={500}
                        width={500}
                        style={{ width: 40, height: 40 }}
                        className="cursor-pointer"
                      />
                      <h5 className="text-xl font-semibold text-blue-gray-900">
                        Venejobs
                      </h5>
                    </div>
                    <Button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      ×
                    </Button>
                  </div>
                  <hr />
                  <nav className="flex flex-col items-start gap-1">
                    <div
                      role="button"
                      className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50"
                    >
                      <div className="mr-4 grid place-items-center"></div>
                    <Link
                        href={
                          user?.role_id === 2
                            ? Routes.profile.client
                            : Routes.profile.freelancer
                        }
                        className="md:text-2xl"
                      >
                        Profile
                      </Link>
                      </div>
                    <div
                      role="button"
                      className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 md:text-2xl"
                    >
                      <div className="mr-4 grid place-items-center"></div>
                      Find Work
                    </div>
                    <div
                      role="button"
                      className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 md:text-2xl"
                    >
                      <div className="mr-4 grid place-items-center"></div>
                      Deliver Work
                    </div>
                    <div
                      role="button"
                      className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 md:text-2xl"
                    >
                      <div className="mr-4 grid place-items-center"></div>
                      Manage Finances
                    </div>

                    <div
                      role="button"
                      className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 md:text-2xl"
                    >
                      <div className="mr-4 grid place-items-center"></div>
                      Message
                    </div>

                    <div
                      role="button"
                      className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 md:text-2xl"
                    >
                      <Button
                        type="button"
                        onClick={() => logout()}
                        className="block w-full text-left flex  items-center gap-1 px-4 py-2 text-lg   text-red-600 cursor-pointer"
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
