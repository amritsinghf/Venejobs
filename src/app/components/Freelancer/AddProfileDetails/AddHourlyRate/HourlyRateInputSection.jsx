import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const HourlyRateInputSection = ({ nextStep, prevStep }) => {
  const {
    register,
    formState: { errors },
    trigger,
    watch
  } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger(["hourly_rate"]);
    if (valid) nextStep();
  };

  const rate = watch("hourly_rate");
  const serviceFee = rate ? rate * 0.1 : 0;
  const youGet = rate ? rate - serviceFee : 0;

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col  justify-between gap-4">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-xl xl:text-2xl text-heading font-semibold leading-9">
                Set your hourly rate
              </h2>
              <input
                type="text"
                name=""
                id=""
                placeholder="$0.00"
                {...register("hourly_rate", {
                  required: {
                    value: true,
                    message: "Hourly Rate is required",
                  },
                })}
                className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#D0D5DD] focus:border-secondary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
              />

              {errors.hourly_rate && (
                <div className="min-h-5">
                  <span className="text-red-500 text-sm">
                    {errors.hourly_rate.message}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-xl xl:text-2xl text-heading font-semibold leading-9">
                Service fee
              </h2>

              <input
                type="text"
                name=""
                id=""
                disabled
                value={`$${serviceFee.toFixed(2)} (10%)`}
                placeholder="$0.00"
                {...register("hourlyRate.ServiceFee")}
                className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#D0D5DD] focus:border-secondary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
              />
            </div>
          </div>

          <p className="text-paragraph text-sm md:text-base">
            This service fee helps us run the platform, provide support, and
            ensure secure, protected payments. Set your hourly rate based on
            what you want to earn.
          </p>
          <hr className="text-gray-200" />

          <div className="flex flex-col gap-4">
            <h2 className="text-xl xl:text-2xl text-heading font-semibold leading-9">You’ll get</h2>
            <input
              type="text"
              disabled
              value={`$${youGet.toFixed(2)}`}
              name=""
              id=""
              placeholder="$0.00"
              className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#D0D5DD] focus:border-secondary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
            />
          </div>
        </div>

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
            type="button"
            onClick={handleNext}
            className="bg-secondary text-white border flex items-center gap-2 justify-center"
          >
            Next <SvgIcon name="NextArrow" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HourlyRateInputSection;
