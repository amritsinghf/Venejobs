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

export default function Navbar() {
  const [activeModal, setActiveModal] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [verifyCode, setverifyCode] = useState("");
  return (
    <>
      <div className="max-w-[1420px] w-full mx-auto  px-6">
        <div className="flex justify-between items-center py-5 ">
          <div className="flex justify-evenly  items-center">
            <Image
              src="/home/new-logo.png"
              alt="logo image"
              height={500}
              width={500}
              style={{ width: 120, height: 40 }}
            />
            {/* flowbite dropdown only - not options */}
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="hidden lg:inline-flex items-center justify-center text-white bg-white/10 rounded-2xl bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
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
            </button>
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

          <div className="flex justify-center gap-6 h-10 font-medium ">
            <button
              className="text-white cursor-pointer"
              onClick={() => setActiveModal("signin")}
            >
              Login
            </button>
            <button
              onClick={() => setActiveModal("signup")}
              className="w-[100] text-sm  cursor-pointer rounded-4xl text-black bg-white"
            >
              Signup
            </button>
          </div>
        </div>
      </div>

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
