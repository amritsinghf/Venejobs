import Image from "next/image";
import { set, useForm } from "react-hook-form";
import userApiStore from "@/app/store/userStore";

export default function Newpassword({ email, setActiveModal }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();


  const resetPassword = userApiStore((s) => s.resetPassword);
  const loading = userApiStore((s) => s.loading);
  const error = userApiStore((s) => s.error);
  const password = watch("password");

  const onSubmit = async (data) => {
    const res = await resetPassword({
      email: email,
      newPassword: data.password,
    });
    if (res.success) {
      setActiveModal("success_pass_reset");
    }
  };

  return (
    <>
      <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full mx-auto">
          <div className="relative bg-white w-[440px] rounded-lg shadow-sm">
            <div className="p-4 md:p-5 h-[680]">
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
              <div className="mt-20">
                <h2 className="text-center text-heading font-semibold text-[42px]  mb-3">
                  Set new password
                </h2>
                <p className="text-paragraph text-center text-[16px] ">
                  Don’t have Your new password must be different to previously
                  used passwords. an account yet?
                </p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 mt-5 p-6"
                method="post"
              >
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="New Password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    {...register("password", {
                      required: "Password is required",
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
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword.message}
                    </p>
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
                    className="text-white justify-end bg-primary hover:bg-blue-800  font-medium  text-sm px-5 py-2.5 text-center"
                    value={isSubmitting ? "Resetting" : "Reset Password"}
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
