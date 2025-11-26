"use client";
import { useRef, useState } from "react";
import { login } from "@/app/lib/auth/auth.api";
import Image from "next/image";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import toastStore from "@/app/store/toastStore";
import Spinner from "../Spinner";
import SvgIcon from "../SvgIcon";
import userApiStore from "@/app/store/userStore";

export default function Loginform({ setActiveModal }) {
  const showToast = toastStore.getState().showToast;
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const loginRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible((v) => !v);
  };

  useClickOutside(loginRef, () => {
    setActiveModal("");
  });

  const handleClick = async (data) => {
    try {
      const res = await login(data);
      const token = res.data.token;
      console.log(res);
      if (res.success === true) {
        showToast(res.message, "success");
        await axios.post("/api/set-token", { token });
        localStorage.setItem("token", token);

        userApiStore.getState().fetchData();

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
        console.log("Login failed:", error.response.data);
      } else {
        console.log("Network error:", error.message);
      }
    }
  };

  // const handleChange = (e) => {
  //   setformData({ ...formData, [e.target.name]: e.target.value });
  // };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <>
      <div className="overflow-y-auto bg-black/50 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full flex">
        <div className="relative p-1  w-full max-w-md max-h-full mx-auto ">
          <div className="relative bg-white w-[440px] rounded-lg shadow-sm ">
            <div className="p-4 md:p-5 h-[780]" ref={loginRef}>
              <div className="flex items-center justify-center gap-3 mt-[60px] mb-10">
                <Image
                  src="/logo.png"
                  alt="logo image"
                  height={50}
                  width={50}
                  style={{ width: "40px", height: "40px" }}
                />
                <h1 className="font-semibold text-[23px] font-sans text-paragraph">
                  Venejobs
                </h1>
              </div>
              <h2 className="text-center text-[44px] font-semibold mb-3">
                Sign In
              </h2>
              <div className="text-sm text-heading text-center ">
                Do you have an account yet?{" "}
                <button
                  onClick={() => setActiveModal("signup")}
                  className="text-black font-semibold cursor-pointer"
                >
                  Sign Up
                </button>
              </div>
              <form
                onSubmit={handleSubmit(handleClick)}
                className="space-y-10 mt-5 p-6"
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
                    className="block py-2.5 px-1  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Email Address"
                  />
                  {errors.email && (
                    <span className="text-red-500 font-bold text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={isVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                    })}
                    placeholder="Password"
                    className="block py-2.5 px-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                  <button
                    type="button"
                    onClick={toggleVisibility}
                    className="absolute inset-y-0  right-0 flex items-center mb-1"
                  >
                    {" "}
                    <SvgIcon name="Eye" />
                  </button>
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
                    <label
                      className="ms-2 text-sm cursor-pointer text-paragraph"
                      htmlFor="terms"
                    >
                      Remember Me
                    </label>
                  </div>

                  <button
                    onClick={() => setActiveModal("forget_password")}
                    className="text-heading text-[14px] font-semibold cursor-pointer"
                  >
                    Forget password?
                  </button>
                </div>
                <div className="flex justify-end">
                  {/* <input
                    type="submit"
                    className="text-white justify-end bg-blue-900 hover:bg-blue-800  font-medium  text-sm px-5 py-2.5 text-center cursor-pointer"
                    value={isSubmitting ? <Spinner/> : "Sign In"}
                    disabled={isSubmitting}
                  /> */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white w-40 rounded  bg-primary hover:bg-blue-800 font-medium text-sm px-10 py-3 text-center cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? <Spinner /> : "Sign In"}
                    <SvgIcon name="RightArrWhite" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
