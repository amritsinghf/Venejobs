"use client";
import "flowbite";
import { useEffect, useRef, useState } from "react";
import {
  resend_verification_code,
  verify_account,
  verify_reset_code,
} from "@/app/lib/auth/auth.api";
import { useRouter } from "next/navigation";

export default function OtpForm({
  email,
  setverifyCode,
  setActiveModal,
  setUserEmail,
}) {
  const router = useRouter();
  const [otp, setotp] = useState(new Array(6).fill(""));
  const [finalotp, setfinalotp] = useState(0);
  const [seconds, setSeconds] = useState(10 * 0);
  const [canResend, setCanResend] = useState(false);
  const [showError, setshowError] = useState("");
  const inputrefs = useRef([]);
  // console.log(email,"email");
  useEffect(() => {
    if (seconds <= 0) {
      setCanResend(true);
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const handleResend = async () => {
    const res = await resend_verification_code({ email });

    if (!res.data.success) {
      setshowError(res.message);
      return;
    }
    setSeconds(10 * 60);
    setCanResend(false);
  };

  const formatTime = (s) => {
    const minutes = Math.floor(s / 60);
    const seconds = s % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (inputrefs.current[0]) {
      inputrefs.current[0].focus();
    }
  }, []);

  const handleotpchange = (index, e) => {
    const value = e.target.value;
    // console.log(value)
    if (!/^\d*$/.test(value)) return;

    const newotp = [...otp];
    //allow one input
    newotp[index] = value.substring(value.length - 1);
    setotp(newotp);

    // submit trigger
    const combinedOtp = newotp.join("");
    // console.log(newotp, combinedOtp)
    if (combinedOtp.length === 6) {
      setfinalotp(combinedOtp);
    }

    if (value && index < 6 - 1 && inputrefs.current[index + 1]) {
      inputrefs.current[index + 1].focus();
    }
  };

  const handleOtpClick = (index) => {
    inputrefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputrefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputrefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputrefs.current[index - 1].focus();
    }
  };

  const VerifyAccount = async () => {
    if (setverifyCode === "signup-code") {
      const res = await verify_account({ email: email, code: finalotp });
      console.log(res.data);
      // after if res.success go to home or dashboard with store token
      router.push("/client");
    } else {
      const res = await verify_reset_code({ email: email, code: finalotp });
      console.log(res.data);
      // after if res.success go to the reset password form
      if (res.data.success) {
        setUserEmail(email);
        setActiveModal("new_password");
      }
    }
  };

  return (
    <>
      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabIndex="-1"
        aria-hidden="true"
        className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="w-full max-w-3xl max-h-full">
          <div class=" bg-white rounded-lg shadow-sm ">
            <div class="text-center  h-[424px] ">
              <div className=" flex flex-col gap-2">
                <h2 className="font-extrabold text-[32px] ">
                  Verify your email
                </h2>
                <p className="text-[#718096] text-sm">
                  We have sent code to your email
                </p>
                <p>{email}</p>
                <div className="flex justify-center items-center mt-8">
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      type="text"
                      ref={(input) => (inputrefs.current[index] = input)}
                      onChange={(e) => {
                        handleotpchange(index, e);
                      }}
                      onClick={() => handleOtpClick(index)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-15 h-15 bg-white m-4  rounded-2xl text-black text-center "
                    />
                  ))}
                </div>
              </div>
              <button
                type="submit"
                onClick={VerifyAccount}
                className="bg-blue-900 text-white  p-4 w-[200] mt-5 rounded-2xl hover:bg-blue-600"
              >
                Verify Account
              </button>

              <div>
                {canResend ? (
                  <button className="text-[16px] " onClick={handleResend}>
                    Resend Code
                  </button>
                ) : (
                  <>
                    <span className="text-[#718096]"> Resend the code in </span>
                    <strong>{formatTime(seconds)}</strong>

                    {showError && <p className="error">{showError}</p>}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
