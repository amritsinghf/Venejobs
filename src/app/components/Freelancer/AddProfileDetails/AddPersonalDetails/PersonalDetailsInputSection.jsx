import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import Image from "next/image";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const PersonalDetailsInputSection = ({ nextStep, prevStep, currstep }) => {
  const {
    register,
    formState: { errors },
    trigger,
    getValues,
  } = useFormContext();

  const [showForm, setshowForm] = useState(false);

  const handleNext = async () => {
    const valid = await trigger(["PersonalDetails"]);
    if (valid) nextStep();
  };
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col  justify-between  gap-10">
          <div className="flex flex-col gap-2.5">
            <h2 className="font-semibold text-lg text-heading">
              Profile Photo
            </h2>
            <Image
              src="/freelancer.jpg"
              alt="Profile photo"
              height={100}
              width={100}
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-lg text-heading">
                Date of Birth
              </h2>
              <input
                type="date"
                name=""
                id=""
                placeholder="MM/DD/YY"
                {...register("PersonalDetails.dob")}
                className="border border-gray-200 py-2 px-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-lg text-heading">Country</h2>
              <input
                type="text"
                name=""
                id=""
                placeholder="Russia"
                {...register("PersonalDetails.country")}
                className="border border-gray-200 py-2 px-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 ">
                <div className="flex flex-col gap-4  w-full">
                  <h2 className="font-semibold text-lg text-heading">
                    Street Address
                  </h2>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Street Address"
                    {...register("PersonalDetails.StreetAddress")}
                    className="border border-gray-200 py-2 px-2 rounded"
                  />
                </div>
                <div className="flex flex-col gap-4  w-full">
                  <h2 className="font-semibold text-lg text-heading">
                    Apt/Suite (Optional)
                  </h2>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Apt/Suite (Optional)"
                    {...register("PersonalDetails.Apt")}
                    className="border border-gray-200 py-2 px-2 rounded"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                <div className="flex flex-col gap-4 w-full">
                  <h2 className="font-semibold text-lg text-heading">City</h2>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter City"
                    {...register("PersonalDetails.City")}
                    className="border border-gray-200 py-2 px-2 rounded"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <h2 className="font-semibold text-lg text-heading">
                    State/Province
                  </h2>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter State/Province"
                    className="border border-gray-200 py-2 px-2 rounded"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <h2 className="font-semibold text-lg text-heading">
                    ZIP/Postal Code
                  </h2>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter ZIP/Postal Code"
                    {...register("PersonalDetails.Zip")}
                    className="border border-gray-200 py-2 px-2 rounded"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-lg text-heading">
                Phone Number
              </h2>
              <input
                type="text"
                name=""
                id=""
                placeholder="+255     Enter Number"
                {...register("PersonalDetails.PhoneNumber")}
                className="border border-gray-200 py-2 px-2 rounded"
              />
            </div>
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
              type="submit"
              disabled={loadingSubmit}
              className={`bg-secondary text-white flex items-center gap-2 justify-center ${
                loadingSubmit ? "opacity-70 cursor-not-allowed" : ""
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
