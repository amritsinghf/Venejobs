"use client";
import Image from "next/image";
import Link from "next/link";
import "flowbite";
import Loginform from "@/app/components/auth/Loginform";
import Signupform from "@/app/components/auth/Signupform";
import { useState } from "react";
import Forgetpassword from "@/app/components/auth/Forgetpassword";
import OtpForm from "@/app/components/auth/OtpForm";
import Newpassword from "@/app/components/auth/Newpassword";
import CheckMailScreen from "@/app/components/auth/CheckMailScreen";
import SuccessPassScreen from "@/app/components/auth/SuccessPassScreen";
import Button from "./ui/Button";
import SvgIcon from "./SvgIcon";

export default function Navbar() {
  const [activeModal, setActiveModal] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [verifyCode, setverifyCode] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="max-w-[1420px] w-full mx-auto  px-6 bg-[#FFFFFF]  sm:bg-primary">
        <div className="flex justify-between items-center py-5 ">
          <div className="flex justify-evenly  items-center gap-[60px]">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="logo image"
                height={500}
                width={500}
                style={{ width: 40, height: 40 }}
              />
              <h3 className="text-[22px] sm:text-[28px] font-extrabold  sm:text-white text-heading">
                Venejobs
              </h3>
            </div>

            <Button
              className="hidden  sm:flex lg:inline-flex items-center justify-center text-white bg-white/10 rounded-2xl  box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
              type="button"
            >
              Category
              <svg
                className="w-4 h-4 ms-1.5 -me-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </Button>
          </div>
          <div className="">
            <nav>
              <ul className="lg:flex justify-around  items-center w-[500] hidden">
                <li className="text-white">
                  <Link href="">Find Talent</Link>
                </li>
                <li className="text-white ">
                  <Link href="">Post a Job</Link>
                </li>
                <li className="text-white">
                  <Link href="">Find Work</Link>
                </li>
                <li className="text-white">
                  <Link href="">About Us</Link>
                </li>
                <li className="text-white">
                  <Link href="">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex justify-center items-center   gap-6 h-10 font-medium ">
            <Button
              className="sm:text-white cursor-pointer text-black "
              onClick={() => setActiveModal("signin")}
            >
              Login
            </Button>
            <Button
              onClick={() => setActiveModal("signup")}
              className="w-[100] text-sm p-3 cursor-pointer rounded-4xl text-black bg-white"
            >
              Signup
            </Button>
            <div className="text-center">
              <Button
                className="text-black lg:hidden hover:bg-brand-strong  font-medium leading-5 rounded-base text-sm px-4 py-2.5 "
                type="button"
                aria-controls="drawer-navigation"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
              >
                <SvgIcon name="ToggleMenu" />
              </Button>
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
            className={`fixed top-0 right-0 lg:hidden h-full w-74 bg-white shadow-xl z-50 p-4 flex flex-col gap-8 transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-4 mt-10">
              <div className="flex items-center gap-2">
                <Image
                  src="/home/logo-home.png"
                  alt="logo image"
                  height={500}
                  width={500}
                  style={{ width: 50, height: 50 }}
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

            <nav className="flex flex-col items-start gap-3 ">
              <div
                role="button"
                className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 text-lg"
              >
                <div className="mr-4 grid place-items-center"></div>
                <Link href={""} className="md:text-2xl">
                  Find Talent
                </Link>
              </div>

              <div
                role="button"
                className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 text-lg"
              >
                <div className="mr-4 grid place-items-center"></div>
                <Link href={""} className="md:text-2xl">
                  Post a job
                </Link>
              </div>
              <div
                role="button"
                className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 text-lg"
              >
                <div className="mr-4 grid place-items-center"></div>
                <Link href={""} className="md:text-2xl">
                  Find Work
                </Link>
              </div>
              <div
                role="button"
                className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 text-lg"
              >
                <div className="mr-4 grid place-items-center"></div>
                <Link href={""} className="md:text-2xl">
                  About us
                </Link>
              </div>
              <div
                role="button"
                className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 text-lg"
              >
                <div className="mr-4 grid place-items-center"></div>
                <Link href={""} className="md:text-2xl">
                  Contact us
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}

      {activeModal === "signin" && (
        <Loginform setActiveModal={setActiveModal} />
      )}

      {activeModal === "signup" && (
        <Signupform
          setActiveModal={setActiveModal}
          setUserEmail={setUserEmail}
          setverifyCode={setverifyCode}
        />
      )}

      {activeModal === "forget_password" && (
        <Forgetpassword
          setActiveModal={setActiveModal}
          setUserEmail={setUserEmail}
        />
      )}

      {activeModal === "otp_verify" && (
        <OtpForm
          setActiveModal={setActiveModal}
          email={userEmail}
          setUserEmail={setUserEmail}
          setverifyCode={verifyCode}
        />
      )}

      {activeModal === "new_password" && (
        <Newpassword setActiveModal={setActiveModal} email={userEmail} />
      )}

      {activeModal === "check_mail_screen" && (
        <CheckMailScreen setActiveModal={setActiveModal} />
      )}

      {activeModal === "success_pass_reset" && (
        <SuccessPassScreen setActiveModal={setActiveModal} />
      )}
    </>
  );
}
