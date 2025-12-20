import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const HourlyRateInputSection = ({ nextStep, prevStep, currstep }) => {
  const {
    register,
    formState: { errors },
    trigger,
    getValues
  } = useFormContext();

  const [showForm, setshowForm] = useState(false);

  const handleNext = async () => {
    const valid = await trigger(["HourlyRate"]);
    if (valid) nextStep();
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col  justify-between  gap-3">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
            <div className="flex flex-col gap-6 w-full">
              <h2 className="text-2xl text-heading font-semibold">
                Set your hourly rate
              </h2>

              <input
                type="text"
                name=""
                id=""
                placeholder="$0.00"
                {...register("HourlyRate.Rate",{
                    required:{
                        value:true,
                        message:"Hourly Rate is required"
                    }
                })}
                className="border border-gray-200 rounded px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-6 w-full">
              <h2 className="text-2xl text-heading font-semibold">
                Service fee
              </h2>

              <input
                type="text"
                name=""
                id=""
                placeholder="$0.00"
                {...register("HourlyRate.ServiceFee",{
                    required:{
                        value:true,
                        message:"Service Fee is required"
                    }
                })}
                className="border border-gray-200 rounded px-3 py-2"
              />
            </div>
          </div>

          <p className="text-paragraph text-sm md:text-base">
            This service fee helps us run the platform, provide support, and
            ensure secure, protected payments. Set your hourly rate based on
            what you want to earn.
          </p>
          <hr className="text-gray-200"/>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-heading">You’ll get</h2>
            <input type="text" name="" id="" placeholder="$0.00" className="border border-gray-200 rounded px-3 py-2"/>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="flex justify-between gap-2 mt-5">
            <Button
              type="button"
              onClick={prevStep}
              className="bg-white text-gray-800 flex items-center gap-2 transition-all duration-300"
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
    </div>
  );
};

export default HourlyRateInputSection;
