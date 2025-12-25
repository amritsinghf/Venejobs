import Button from "@/app/components/button/Button";
import Loader from "@/app/components/common/Loader";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const PersonalDetailsInputSection = ({ nextStep, prevStep }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const inputClass =
    "w-full py-3.5 px-3 text-sm lg:text-base border border-[#D0D5DD] focus:border-secondary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm";

  return (
    <div className="w-full">
      <div className="flex flex-col gap-5">

        {/* Date of Birth */}
        <div className="flex flex-col gap-2">
          <h2 className="text-base lg:text-lg font-semibold text-heading">
            Date of Birth
          </h2>
          <input
            type="date"
            {...register("date_of_birth", {
              required: "Date of Birth is required",
            })}
            className={inputClass}
          />
          {errors?.date_of_birth && (
            <p className="text-sm text-red-500">
              {errors.date_of_birth.message}
            </p>
          )}
        </div>

        {/* Country */}
        <div className="flex flex-col gap-2">
          <h2 className="text-base lg:text-lg font-semibold text-heading">
            Country
          </h2>
          <input
            type="text"
            placeholder="London"
            {...register("country", {
              required: "Country is required",
            })}
            className={inputClass}
          />
          {errors?.country && (
            <p className="text-sm text-red-500">
              {errors.country.message}
            </p>
          )}
        </div>

        {/* Street + Apt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-base lg:text-lg font-semibold text-heading">
              Street Address
            </h2>
            <input
              type="text"
              {...register("street_address", {
                required: "Street Address is required",
              })}
              className={inputClass}
            />
            {errors?.street_address && (
              <p className="text-sm text-red-500">
                {errors.street_address.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base lg:text-lg font-semibold text-heading">
              Apt / Suite (Optional)
            </h2>
            <input
              type="text"
              {...register("personalDetails.Apt")}
              className={inputClass}
            />
          </div>
        </div>

        {/* City / State / Zip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-base lg:text-lg font-semibold text-heading">
              City
            </h2>
            <input
              type="text"
              {...register("city", {
                required: "City is required",
              })}
              className={inputClass}
            />
            {errors?.city && (
              <p className="text-sm text-red-500">
                {errors.city.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base lg:text-lg font-semibold text-heading">
              State / Province
            </h2>
            <input
              type="text"
              {...register("personalDetails.State", {
                required: "State/Province is required",
              })}
              className={inputClass}
            />
            {errors?.personalDetails?.State && (
              <p className="text-sm text-red-500">
                {errors.personalDetails.State.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base lg:text-lg font-semibold text-heading">
              ZIP / Postal Code
            </h2>
            <input
              type="text"
              inputMode="numeric"
              {...register("zip_code", {
                required: "ZIP/Postal Code is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Numbers only",
                },
              })}
              className={inputClass}
            />
            {errors?.zip_code && (
              <p className="text-sm text-red-500">
                {errors.zip_code.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <h2 className="text-base lg:text-lg font-semibold text-heading">
            Phone Number
          </h2>
          <input
            type="text"
            placeholder="+255 123456789"
            {...register("personalDetails.PhoneNumber", {
              required: "Phone Number is required",
            })}
            className={inputClass}
          />
          {errors?.personalDetails?.PhoneNumber && (
            <p className="text-sm text-red-500">
              {errors.personalDetails.PhoneNumber.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4 pt-4">
          <Button
            type="button"
            onClick={prevStep}
            className="bg-white text-paragraph flex items-center gap-2"
            style={{
              boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <SvgIcon name="PrevButton" /> Back
          </Button>

          <Button
            type="submit"
            disabled={loadingSubmit}
            className="bg-secondary text-white px-8 py-3 rounded-md flex items-center gap-2 justify-center"
          >
            {loadingSubmit ? (
              <Loader size={18} border={3} color="white" />
            ) : (
              <>
                Let’s Finalize <SvgIcon name="NextArrow" />
              </>
            )}
          </Button>
        </div>

      </div>
    </div>
  );
};

export default PersonalDetailsInputSection;
