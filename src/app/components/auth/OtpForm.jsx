"use client";
import { useEffect, useRef, useState } from "react";
import {
  resend_verification_code,
  verify_account,
  verify_reset_code,
} from "@/app/lib/auth/auth.api";
import { useRouter } from "next/navigation";
import axios from "axios";
import toastStore from "@/app/store/toastStore";
import Image from "next/image";
import Button from "../button/Button";
import userApiStore from "@/app/store/userStore";

export default function OtpForm({
  email,
  setverifyCode,
  setActiveModal,
  setUserEmail,
}) {
  const verifyOtpAndSetToken = userApiStore((s) => s.verifyOtpAndSetToken);
  const verify_resetCode = userApiStore((s) => s.verify_resetCode);
  const resendOtp = userApiStore((s) => s.resendOtp);
  const loading = userApiStore((s) => s.loading);
  const error = userApiStore((s) => s.error);
  const router = useRouter();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [finalOtp, setFinalOtp] = useState("");

  const [seconds, setSeconds] = useState(10 * 60);
  const [canResend, setCanResend] = useState(false);
  const inputrefs = useRef([]);
  const showToast = toastStore.getState().showToast;

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

  const handleOtpChange = (index, e) => {
    const value = e.target.value;

    // allow only digits
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);


    if (value && index < 5) {
      inputrefs.current[index + 1].focus();
    }


    const combined = newOtp.join("");
    if (combined.length === 6) {
      setFinalOtp(combined);
    }
  };

  const handleOtpClick = (index) => {

    const input = inputrefs.current[index];
    if (input) {
      input.setSelectionRange(1, 1);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputrefs.current[index - 1].focus();
      }
    }
  };

  const handleResend = async () => {
    try {
      const res = await resendOtp({ email });

      if (res.success) {
        showToast(res.message, "success");
      }
      setSeconds(10 * 60);
      setCanResend(false);
    } catch (error) {
      if (error.response) {
        showToast(error.response.data.message, "error");
      } else {
      }
    }
  };

  const VerifyAccount = async () => {
    if (setverifyCode === "signup-code") {
      try {
        const res = await verifyOtpAndSetToken({
          email: email,
          code: finalotp,
        });
        const token = res.data.token;

        if (res.success === true) {
          showToast(res.message, "success");
          await axios.post("/api/set-token", { token });
          localStorage.setItem("token", token);

          if (res.data.user.role_id == 1) {
            router.push("/freelancer");
          } else if (res.data.user.role_id == 2) {
            router.push("/client");
          } else {
            router.push("/admin");
          }
        } else if (res.success === false) {
          showToast(res.message, "error");
        }
      } catch (error) {
        if (error.response) {
          showToast(error.response.data.message, "error");
        } else {
        }
      }
    } else {
      try {
        // this is for reset code
        const res = await verify_resetCode({ email: email, code: finalotp });
        if (res.success) {
          showToast(res.message, "success");
          setUserEmail(email);
          setActiveModal("new_password");
        }
      } catch (error) {
        if (error.response) {
          showToast(error.response.data.message, "error");
        } else {
        }
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
        <div class="w-full max-w-3xl max-h-full px-3">
          <div class=" bg-white rounded-lg shadow-sm ">
            <div class="text-center  h-[424px] p-5">
              <div className="flex flex-col gap-2">
                <div class=" flex items-center justify-start border-b border-default pb-1">
                  <Image
                    src="/logo.png"
                    alt="logo image"
                    height={30}
                    width={50}
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h3 className="text-2xl font-bold  text-heading px-2">
                    Venejobs
                  </h3>
                </div>
                <h2 className="font-extrabold text-[32px] ">
                  Verify your email
                </h2>
                <p className="text-[#718096] text-sm">
                  We have sent code to your email
                </p>
                <p className="font-medium "> {email}</p>
                <div className="flex justify-center items-center mt-4 gap-4">
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      value={value}
                      ref={(el) => (inputrefs.current[index] = el)}
                      onChange={(e) => handleOtpChange(index, e)}
                      onClick={() => handleOtpClick(index)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-15 h-15 bg-white rounded-2xl text-black text-center"
                    />
                  ))}
                </div>
              </div>
              <Button
                type="submit"
                onClick={VerifyAccount}
                className="bg-primary text-white  p-4 w-[200] mt-5 rounded-2xl hover:bg-blue-600"
              >
                Verify Account
              </Button>

              <div className="flex flex-col items-center mt-2 justify-center">
                {canResend ? (
                  <Button
                    className="text-[16px] cursor-pointer"
                    onClick={handleResend}
                  >
                    Resend Code
                  </Button>
                ) : (
                  <>
                    <span className="text-[#718096]"> Resend the code in </span>
                    <strong>{formatTime(seconds)}</strong>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-between px-5 py-4">
              <p className="text-paragraph text-sm">Privacy Policy</p>
              <p className="text-paragraph text-sm">Copyright</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
