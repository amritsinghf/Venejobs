"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "@/app/components/Footer";
import HomeNavbar from "@/app/components/HomeNavbar";
import SvgIcon from "@/app/components/SvgIcon";
import Button from "@/app/components/button/Button";
import toastStore from "@/app/store/toastStore";
import userApiStore from "@/app/store/userStore";
import { Routes } from "@/app/routes";

export default function Profile() {
  const router = useRouter();

  const { user, logout, fetchProfile } = userApiStore();
  const showToast = toastStore.getState().showToast;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const user_logout = () => {
    logout();
    localStorage.removeItem("token");

    router.push(Routes.home);
    //currenly just removing from localstorage but still in cookie
    showToast("Logged Out Successfully!", "success");
  };

  return (
    <>
      <HomeNavbar />

      <div className="w-[600px] sm:w-full 2xl:w-[1500px] 2xl:mx-auto   h-screen mt-28 px-4   lg:px-12 ">
        <div className="text-center flex">
          <Button
            className="text-black lg:hidden  hover:bg-brand-strong  font-medium leading-5 rounded-base text-sm px-12 py-2.5"
            type="button"
            aria-controls="drawer-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <SvgIcon name="ToggleMenu" />
          </Button>
        </div>

        <div className="flex gap-10 ">
          <div className="flex flex-col  lg:w-[350px]">
            <nav className="hidden lg:flex lg:flex-col lg:gap-8  items-start  gap-1 border border-gray-300 rounded-2xl mb-4 p-5">
              <div className="flex flex-col gap-64 justify-between items-center w-full">
                <div className="flex flex-col gap-4 mt-10">
                  <div
                    role="button"
                    className="flex items-center justify-center w-full py-2 h-[45px] rounded-lg hover:bg-blue-gray-50 bg-primary text-white"
                  >
                      <Link
                        href={""}
                        className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
                      >
                        <SvgIcon name="Preview" /> My Info
                      </Link>
                  </div>
                  <div
                    role="button"
                    className="flex items-center justify-center w-full py-2 h-[45px] rounded-lg hover:bg-blue-gray-50 "
                  >
                    <Link
                      href={""}
                      className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
                    >
                      <SvgIcon name="CreditCard" /> Billing & Payments
                    </Link>
                  </div>

                  <div
                    role="button"
                    className="flex items-center justify-center w-full py-2 h-[45px] rounded-lg hover:bg-blue-gray-50 "
                  >
                    <Link
                      href={""}
                      className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
                    >
                      <SvgIcon name="Notify" /> Notification
                    </Link>
                  </div>
                  <div
                    role="button"
                    className="flex items-center justify-center w-full py-2 h-[45px] rounded-lg hover:bg-blue-gray-50 "
                  >
                    <Link
                      href={""}
                      className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
                    >
                      <SvgIcon name="Premium" /> Subscription Setting
                    </Link>
                  </div>
                  <div
                    role="button"
                    className="flex items-center justify-center w-full py-2 h-[45px] rounded-lg hover:bg-blue-gray-50 "
                  >
                    <Link
                      href={""}
                      className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
                    >
                      <SvgIcon name="Settingss" /> Security Settings
                    </Link>
                  </div>

                  <div
                    role="button"
                    className="flex items-center justify-center w-full py-2 h-[45px] rounded-lg hover:bg-blue-gray-50 "
                  >
                    <Link
                      href={""}
                      className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
                    >
                      <SvgIcon name="leagal_doc" /> Legal & Compliance
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Link
                    href={""}
                    className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6 text-paragraph"
                  >
                    <SvgIcon name="Question" />
                    Help & Support
                  </Link>
                  <Link
                    href={""}
                    className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6 text-paragraph"
                  >
                    <SvgIcon name="Logout" />
                    Sign Out
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          <div className="border-gray-300 border  p-5 rounded-2xl flex flex-col md:w-full  gap-10">
            <div className="flex flex-col gap-3  ">
              <h2 className="text-heading text-3xl sm:text-[32px]">My Info</h2>
              <p className="text-paragraph text-sm sm:text-lg">
                Update your account information
              </p>
            </div>

            <div className="flex items-center justify-between">
              <h2 className="text-heading  text-lg sm:text-2xl">
                Personal Information
              </h2>
              <button className="text-primary">Edit</button>
            </div>

            <div>
              <Image
                className="rounded-full"
                src={"/home/manwithphone.jpg"}
                width={80}
                height={80}
                alt="Profile Image"
              />
            </div>

            <div className="grid grid-cols-2   gap-10">
              <div className="flex flex-col gap-2 ">
                <h3 className="text-heading">Name : </h3>
                <input
                  type="text"
                  placeholder="Name"
                  value={user?.name ?? ""}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="border border-gray-100 rounded text-paragraph"
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <h3 className="text-heading">Username : </h3>
                <input
                  type="text"
                  placeholder="Username"
                  value={user?.username ?? ""}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  className="border border-gray-100 rounded text-paragraph"
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <h3 className="text-heading">Date of Birth : </h3>
                <input
                  type="date"
                  placeholder="DOB"
                  className="border border-gray-100 rounded text-paragraph"
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <h3 className="text-heading">Mobile Number : </h3>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="border border-gray-100 rounded text-paragraph"
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <h3 className="text-heading">Email : </h3>
                <input
                  type="text"
                  placeholder="Email"
                  value={user?.email ?? ""}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="border border-gray-100 rounded text-paragraph"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div
            className={`fixed top-0 left-0 lg:hidden h-full w-80   bg-white shadow-xl z-50 p-4 flex flex-col gap-5 transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "translate-x-full "
            }`}
          >
            <div className="flex justify-between items-center mb-4 mt-20">
              <div className="flex items-center gap-2">
                <Image
                  src="/home/logo-home.png"
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
            <nav className="flex flex-col items-start  gap-1">
              <div
                role="button"
                className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50"
              >
                <Link
                  href={""}
                  className="flex items-center gap-4 text-lg text-center px-3  w-full border bg-primary text-white p-2 rounded-2xl"
                >
                  <SvgIcon name="Preview" /> My Info
                </Link>
              </div>
              <div
                role="button"
                className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50"
              >
                <Link
                  href={""}
                  className="flex items-center gap-4 text-lg text-center px-3 text-paragraph w-full   p-2 rounded-2xl"
                >
                  <SvgIcon name="CreditCard" />
                  Billing & Payments
                </Link>
              </div>

              <div
                role="button"
                className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50"
              >
                <Link
                  href={""}
                  className="flex items-center gap-4 text-lg text-center px-3 text-paragraph w-full   p-2 rounded-2xl"
                >
                  <SvgIcon name="Notify" />
                  Notification
                </Link>
              </div>
              <div
                role="button"
                className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50"
              >
                <Link
                  href={""}
                  className="flex items-center gap-4 text-lg text-center px-3 text-paragraph w-full   p-2 rounded-2xl"
                >
                  <SvgIcon name="Premium" />
                  Subscription Setting
                </Link>
              </div>
              <div
                role="button"
                className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50"
              >
                <Link
                  href={""}
                  className="flex items-center gap-4 text-lg text-center px-3 text-paragraph w-full   p-2 rounded-2xl"
                >
                  <SvgIcon name="Settingss" />
                  Security Settings
                </Link>
              </div>

              <div
                role="button"
                className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50"
              >
                <Link
                  href={""}
                  className="flex items-center gap-4 text-lg text-center px-3 text-paragraph w-full    p-2 rounded-2xl"
                >
                  <SvgIcon name="leagal_doc" />
                  Legal & Compliance
                </Link>
              </div>

              <div className="mt-20">
                <div
                  role="button"
                  className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 "
                >
                  <Link
                    href={""}
                    className="flex items-center gap-4 text-lg text-center px-6 text-paragraph"
                  >
                    <SvgIcon name="Question" />
                    Help & Support
                  </Link>
                </div>

                <div
                  role="button"
                  className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 "
                >
                  <Button
                    onClick={() => user_logout()}
                    className="flex items-center  gap-4 text-lg text-center px-6 text-paragraph"
                  >
                    <SvgIcon name="Logout" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
