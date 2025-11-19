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
  const [verifyCode, setverifyCode] = useState("")
  return (
    <>
      <div className="max-w-[1420px] w-full mx-auto  lg:block hidden">
        <div className="flex justify-between items-center py-5 ">
          <div className="flex justify-evenly w-[300]  items-center">
            <Image
              src="/home/new-logo.png"
              alt="logo image"
              height={500}
              width={500}
              style={{ width: 100, height: 30 }}
            />
            <select className="text-white bg-blue-900 rounded-2xl">
              <option value="">Category</option>
            </select>
          </div>
          <div className="">
            <nav>
              <ul className="flex justify-around  items-center w-[500]">
                <li className="text-white">
                  <Link href="">Find Talent</Link>
                </li>
                <li className="text-white">
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

          <div className="flex justify-center gap-4">
            <button
              className="text-white cursor-pointer"
              onClick={() => setActiveModal("signin")}
            >
              Login
            </button>
            <button
              onClick={() => setActiveModal("signup")}
              className="w-[70] text-sm p-2 cursor-pointer rounded-4xl text-black bg-white"
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
        <Forgetpassword setActiveModal={setActiveModal} setUserEmail={setUserEmail}/>
      )}

      {activeModal === "otp_verify" && (
        <OtpForm setActiveModal={setActiveModal} email={userEmail} setUserEmail={setUserEmail} setverifyCode={verifyCode}/>
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
