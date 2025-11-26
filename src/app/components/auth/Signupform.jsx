"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { signupapi } from "@/app/lib/auth/auth.api";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import SvgIcon from "../SvgIcon";
import toastStore from "@/app/store/toastStore";

export default function Signupform({
  setActiveModal,
  setUserEmail,
  setverifyCode,
}) {
  const router = useRouter();
  const showToast = toastStore.getState().showToast;
  const [isVisible, setIsVisible] = useState(false);

   const toggleVisibility = () => {
    setIsVisible((v) => !v);
  };

  const onSubmit = async (data) => {
    try {
      const res = await signupapi(data);

      if (res.success) {
        showToast(res.message, "success");
        setUserEmail(data.email);
        setActiveModal("otp_verify");
        setverifyCode("signup-code");
      }
    } catch (error) {
      if (error.response) {
        showToast(error.response.data.message, "error");
        console.log("Signup failed:", error.response.data);
      } else {
        console.log("Network error:", error.message);
      }
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  // const handleChange = (e) => {
  //   setformData({ ...formData, [e.target.name]: e.target.value });
  // };

  const signupRef = useRef(null);

  useClickOutside(signupRef, () => {
    setActiveModal("");
  });

  return (
    <>
      <div className="overflow-y-auto bg-black/50 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full flex">
        <div className="relative p-1 w-full max-w-md max-h-full">
          <div className="relative bg-white w-[440px] rounded-lg shadow-sm">
            <div className="p-3 md:p-4  h-[780px]" ref={signupRef}>
              <div className="flex items-center  justify-center gap-3 mt-5 mb-5">
                <Image
                  src="/logo.png"
                  alt="logo image"
                  height={30}
                  width={50}
                  style={{ width: "40px", height: "40px" }}
                />
                <h1 className="font-semibold text-[23px]  font-sans text-stone-500">
                  Venejobs
                </h1>
              </div>
              <h2 className="text-center text-[44px] mt-[30] font-extrabold mb-3">
                Sign Up
              </h2>
              <div className="text-sm text-center text-zinc-800">
                Already Have An Account?{" "}
                <button
                  onClick={() => setActiveModal("signin")}
                  className="text-black font-semibold cursor-pointer"
                >
                  Sign In
                </button>
              </div>
              <form
                className="space-y-1 mt-1 p-5 gap-3 flex flex-col"
                method="post"
                onSubmit={handleSubmit(onSubmit)}
              >
                <ul className="grid w-full gap-1 md:grid-cols-2">
                  <li>
                    <input
                      type="radio"
                      id="hosting-small"
                      name="role"
                      className="hidden peer"
                      value="freelancer"
                      {...register("role", {
                        validate: (value) =>
                          !!value || "Please select at least one option",
                        required: {
                          value: true,
                          message: "Please select at least one",
                        },
                      })}
                    />
                    <label
                      htmlFor="hosting-small"
                      className="flex flex-col h-[45] items-center justify-center w-full p-7 rounded-lg 
                                        cursor-pointer text-gray-900 bg-white 
                                        peer-checked:bg-primary peer-checked:text-white
                                        hover:bg-gray-100 hover:text-gray-600
                                        dark:text-gray-400 dark:bg-white dark:border-gray-700 
                                        dark:hover:text-gray-300 dark:peer-checked:bg-primary dark:peer-checked:text-white
                                        transition-all"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <SvgIcon name="Teleworking" />
                        <span className="text-base font-sm leading-none">
                          I&apos;m a Freelancer
                        </span>
                      </div>
                    </label>
                  </li>

                  {/* Client Option */}
                  <li>
                    <input
                      type="radio"
                      id="hosting-big"
                      name="role"
                      value="client"
                      className="hidden peer"
                      {...register("role", {
                        validate: (value) =>
                          !!value || "Please select at least one option",
                        required: {
                          value: true,
                          message: "Please select at least one Role",
                        },
                      })}
                    />
                    <label
                      htmlFor="hosting-big"
                      className="flex flex-col h-[45] items-center justify-center w-full p-7 rounded-lg  
                                        cursor-pointer text-gray-900 bg-white 
                                        peer-checked:bg-primary peer-checked:text-white 
                                        hover:bg-gray-100 hover:text-gray-600 
                                        dark:text-gray-400 dark:bg-white dark:border-gray-700 
                                        dark:hover:text-gray-300 dark:peer-checked:bg-primary dark:peer-checked:text-white
                                        transition-all"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <SvgIcon name="Businessman" />
                        <span className="text-base font-medium leading-none">
                          I&apos;m a Client
                        </span>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className="text-center">
                  {errors.role && (
                    <span className="text-red-500 text-[12px] font-bold text-center h-4">
                      {errors.role.message}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                  {errors.name && (
                    <span className="text-red-500 font-bold text-[12px] h-4">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Username"
                    {...register("username", {
                      required: {
                        value: true,
                        message: "Username is required",
                      },
                    })}
                  />
                  {errors.username && (
                    <span className="text-red-500 font-bold text-[12px] h-4">
                      {errors.username.message}
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
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
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Email Address"
                  />
                  {errors.email && (
                    <span className="text-red-500 font-bold text-[12px] h-4">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={isVisible ? "text" : "password"}
                    name="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                      maxLength: {
                        value: 12,
                        message: "Password cannot exceed 12 characters",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d).+$/,
                        message:
                          "Password must contain at least one uppercase letter and one number",
                      },
                    })}
                    id="password"
                    placeholder="Password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                  <button onClick={toggleVisibility}  className="absolute inset-y-0  right-0 flex items-center mb-1"> <SvgIcon name="Eye"  /></button>
                  {errors.password && (
                    <span className="text-red-500 font-semibold text-[12px] h-4">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="flex ">
                  <div className="flex items-center h-5">
                    <input type="checkbox" id="remember" />
                  </div>
                  <label className="ms-2 text-sm" htmlFor="remember">
                    I Agree With <b> Privacy Policy</b> and <b> Terms of use</b>
                  </label>
                </div>
                <div className="flex justify-end ">
                  {/* <input
                    type="submit"
                    className="text-white w-[150px] rounded  justify-end bg-blue-900 hover:bg-blue-800  font-medium  text-sm px-5 py-2.5  text-center cursor-pointer"
                    value={isSubmitting ? "Submitting" : "Sign Up"}
                    disabled={isSubmitting}

                  /> */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white w-40  rounded  bg-primary hover:bg-blue-800 font-medium text-sm px-10 py-3 text-center cursor-pointer flex items-center justify-center gap-1"
                  >
                    {isSubmitting ? "Signing Up" : "Sign Up"}
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
