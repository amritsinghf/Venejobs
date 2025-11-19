"use client";
import { useRef, useState } from "react";
import { login } from "@/app/lib/auth/auth.api";
import Image from "next/image";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Loginform({ setActiveModal }) {
  
  const router = useRouter();
  const [formData, setformData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ text: "", type: "" });

  const loginRef = useRef(null);

  useClickOutside(loginRef, () => {
    setActiveModal("");
  });

  const handleClick = async (data) => {
    try {
      const res = await login(data);
      const token = res.data.token;
      if (res.success === true) {
        setMessage({ text: "Success", type: "success" });
        await axios.post("/api/set-token", { token });
        localStorage.setItem("token", token);
        router.push("/client");
      } else {
        setMessage({
          text: res.data.message || "Something went wrong",
          type: "error",
        });
      }
    } catch (error) {
      setMessage({
        text: error.response?.data?.message || "Server error",
        type: "error",
      });
    }
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <>
      <div className="overflow-y-auto bg-black/50 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full flex">
        <div className="relative p-4 w-full max-w-md max-h-full mx-auto">
          <div className="relative bg-white rounded-lg shadow-sm">
            <div className="p-4 md:p-5 h-[780]" ref={loginRef}>
              <div className="flex items-center justify-center gap-3 mt-[60px] mb-10">
                <Image
                  src="/logo.png"
                  alt="logo image"
                  height={50}
                  width={50}
                  style={{ width: "40px", height: "40px" }}
                />
                <h1 className="font-semibold text-[23px] font-sans text-gray-500">
                  Venejobs
                </h1>
              </div>
              <h2 className="text-center text-2xl font-semibold mb-3">
                Sign In
              </h2>
              <div className="text-sm text-center ">
                Do you have an account yet?{" "}
                <button
                  onClick={() => setActiveModal("signup")}
                  className="text-black font-semibold"
                >
                  Sign Up
                </button>
              </div>
              <form
                onSubmit={handleSubmit(handleClick)}
                className="space-y-4 mt-5 p-6"
                method="post"
              >
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please enter valid email address",
                      },
                    })}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Email Address"
                  />
                  {errors.email && (
                    <span className="text-red-500 font-bold text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    // value={formData.password}
                    // onChange={handleChange}
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                    })}
                    placeholder="Password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                  {errors.password && (
                    <span className="text-red-500 font-bold mb-2 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start ">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                      />
                    </div>
                    <label className="ms-2 text-sm ">Remember Me</label>
                  </div>

                  <button
                    onClick={() => setActiveModal("forget_password")}
                    className="text-[#333333] text-[14px] font-semibold"
                  >
                    Forget password
                  </button>
                </div>
                {message.text && (
                  <div
                    className={`mt-2 p-2 font-bold  ${
                      message.type === "success"
                        ? "text-green-700 bg-green-100 border-green-700"
                        : "text-red-700 bg-red-100 border-red-700"
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                <div className="flex justify-end">
                  <input
                    type="submit"
                    className="text-white justify-end bg-blue-900 hover:bg-blue-800  font-medium  text-sm px-5 py-2.5 text-center"
                    value={isSubmitting ? "Logging" : "Sign In"}
                    disabled={isSubmitting}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
