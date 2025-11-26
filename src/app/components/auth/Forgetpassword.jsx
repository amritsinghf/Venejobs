import Image from "next/image";
import { useForm } from "react-hook-form";
import { forget_password } from "@/app/lib/auth/auth.api";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRef } from "react";
import toastStore from "@/app/store/toastStore";

export default function Forgetpassword({ setActiveModal, setUserEmail }) {
  const showToast = toastStore.getState().showToast;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await forget_password(data);
      console.log(res.data);
      if (res.success === true) {
        showToast(res.message, "success");
        setActiveModal("check_mail_screen");
        setUserEmail(data.email);
      }
    } catch (error) {
      if (error.response) {
        showToast(error.response.data.message, "error");
        console.log("Forget password failed:", error.response.data);
      } else {
        console.log("Network error:", error.message);
      }
    }
  };

  const forgetpassRef = useRef(null);

  useClickOutside(forgetpassRef, () => {
    setActiveModal("");
  });

  return (
    <>
      <div className="overflow-y-auto bg-black/50 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full flex">
        <div className="relative p-1 w-full max-w-md max-h-full mx-auto">
          <div className="relative bg-white w-[440px] rounded-lg shadow-sm">
            <div className="p-4 md:p-5 h-[680] " ref={forgetpassRef}>
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
              <h2 className="text-center text-heading font-extrabold text-4xl  mb-3">
                Forgot password?
              </h2>
              <p className="text-paragraph  text-center text-sm">
                No worries, we’ll send you reset instructions.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 mt-5 p-6"
                method="post"
              >
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Email Address"
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
                  />
                  {errors.email && (
                    <span className="text-red-500 font-bold">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="flex justify-end mt-10">
                  {/* <button
                    type="submit"
                    className="text-[#F8F8F8] justify-end bg-blue-900 hover:bg-blue-800 h-[45px]   text-[16px] px-5 py-2.5 text-center font-semibold"
                  >
                    Reset Password
                  </button> */}
                  <input
                    type="submit"
                    className="text-[#F8F8F8] justify-end bg-primary hover:bg-blue-800  font-medium  text-sm px-5 py-2.5 text-center"
                    value={isSubmitting ? "Resetting" : "Reset Password"}
                    disabled={isSubmitting}
                  />
                </div>
              </form>

              <div className="flex justify-end m-5">
                <button
                  type="button"
                  className="text-[#858585] text-[16px] text-center cursor-pointer font-semibold"
                  onClick={() => setActiveModal("signin")}
                >
                  ← Back to Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
