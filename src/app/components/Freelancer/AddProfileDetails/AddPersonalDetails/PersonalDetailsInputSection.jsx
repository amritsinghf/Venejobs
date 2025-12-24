import Button from "@/app/components/button/Button";
import Loader from "@/app/components/common/Loader";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import Image from "next/image";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const PersonalDetailsInputSection = ({ nextStep, prevStep, currstep }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col  justify-between  gap-10">
          {/* <div className="flex flex-col gap-2.5">
            <h2 className="font-semibold text-lg text-heading">
              Profile Photo
            </h2>
            <Image
              src="/freelancer.jpg"
              alt="Profile photo"
              height={100}
              width={100}
            />
          </div> */}

          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-lg text-heading">
                Date of Birth
              </h2>
              <input
                type="date"
                placeholder="MM/DD/YY"
                {...register("date_of_birth", {
                  required: "Date of Birth is required",
                })}
                className="border border-gray-200 py-2 px-2 rounded text-paragraph"
              />
              <div className="min-h-5">
              {errors?.date_of_birth && (
                <p className="text-red-500 text-sm">
                  {errors.date_of_birth.message}
                </p>
              )}
              </div>
            </div>

            {/* Country */}
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-lg text-heading">Country</h2>
              <input
                type="text"
                placeholder="Russia"
                {...register("country", {
                  required: "Country is required",
                })}
                className="border border-gray-200 py-2 px-2 rounded text-paragraph"
              />
              <div className="min-h-5">
              {errors?.country && (
                <p className="text-red-500 text-sm">
                  {errors.country.message}
                </p>
              )}
              </div>
            </div>

            {/* Street Address & Apt */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
              <div className="flex flex-col gap-4 w-full">
                <h2 className="font-semibold text-lg text-heading">
                  Street Address
                </h2>
                <input
                  type="text"
                  placeholder="Enter Street Address"
                  {...register("street_address", {
                    required: "Street Address is required",
                  })}
                  className="border border-gray-200 py-2 px-2 rounded text-paragraph"
                />
                <div className="min-h-5">
                {errors?.street_address && (
                  <p className="text-red-500 text-sm">
                    {errors.street_address.message}
                  </p>
                )}
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h2 className="font-semibold text-lg text-heading">
                  Apt/Suite (Optional)
                </h2>
                <input
                  type="text"
                  placeholder="Apt/Suite (Optional)"
                  {...register("personalDetails.Apt")}
                  className="border border-gray-200 py-2 px-2 rounded text-paragraph"
                />
                <div className="min-h-5"></div>
              </div>
            </div>

            {/* City, State/Province, ZIP */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
              <div className="flex flex-col gap-4 w-full">
                <h2 className="font-semibold text-lg text-heading">City</h2>
                <input
                  type="text"
                  placeholder="Enter City"
                  {...register("city", {
                    required: "City is required",
                  })}
                  className="border border-gray-200 py-2 px-2 rounded text-paragraph"
                />
                <div className="min-h-5">
                {errors?.city && (
                  <p className="text-red-500 text-sm">
                    {errors.city.message}
                  </p>
                )}
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <h2 className="font-semibold text-lg text-heading">
                  State/Province
                </h2>
                <input
                  type="text"
                  placeholder="Enter State/Province"
                  {...register("personalDetails.State", {
                    required: "State/Province is required",
                  })}
                  className="border border-gray-200 py-2 px-2 rounded text-paragraph"
                />
                <div className="min-h-5">
                {errors?.personalDetails?.State && (
                  <p className="text-red-500 text-sm">
                    {errors.personalDetails.State.message}
                  </p>
                )}
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <h2 className="font-semibold text-lg text-heading">
                  ZIP/Postal Code
                </h2>
                <input
                  type="text"
                  placeholder="Enter ZIP/Postal Code"
                  {...register("zip_code", {
                    required: "ZIP/Postal Code is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "ZIP/Postal Code must contain numbers only",
                    },
                  })}
                  inputMode="numeric"
                  className="border border-gray-200 py-2 px-2 rounded text-paragraph"
                />
                <div className="min-h-5">
                {errors?.zip_code && (
                  <p className="text-red-500 text-sm">
                    {errors.zip_code.message}
                  </p>
                )}
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-lg text-heading">
                Phone Number
              </h2>
              <input
                type="text"
                placeholder="+255     Enter Number"
                {...register("personalDetails.PhoneNumber", {
                  required: "Phone Number is required",
                })}
                className="border border-gray-200 py-2 px-2 rounded text-paragraph"
              />
              <div className="min-h-5">
              {errors?.personalDetails?.PhoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.personalDetails.PhoneNumber.message}
                </p>
              )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="flex justify-between gap-10 xl:gap-2 mt-5">
            <Button
              type="button"
              onClick={prevStep}
              className="bg-white text-paragraph flex items-center gap-2 transition-all duration-300"
              style={{
                boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <SvgIcon name="PrevButton" />
              Back
            </Button>

            <Button
              type="submit"
              disabled={loadingSubmit}
              className={`bg-secondary text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 text-sm sm:text-base transition ${
              loadingSubmit ? "opacity-70 pointer-events-none" : "hover:opacity-90"
            }`}
            >
              {loadingSubmit ? (
                <Loader size={18} border={3} color="white" />
              ) : (
                <>
                  Let's Finalize <SvgIcon name="NextArrow" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsInputSection;
