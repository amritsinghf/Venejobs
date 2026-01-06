import Link from "next/link";
import { useFormContext } from "react-hook-form";
import Button from "../button/Button";
import StepperNumber from "./StepperNumber";
import SvgIcon from "../Utility/SvgIcon";
import { useState } from "react";
import Loader from "../common/Loader";

const DescriptionPage = ({ nextStep, prevStep, currstep }) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();
  const [loadingNext, setLoadingNext] = useState(false);

  const handleNext = async () => {
    setLoadingNext(true);

    const valid = await trigger(["description", "attachment"]);
    if (valid) nextStep();

    setLoadingNext(false);
  };

  const handlePrev = async () => {
    prevStep();
  };

  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <StepperNumber currstep={currstep} />
      <div className="flex gap-6 lg:gap-25 flex-col lg:flex-row w-full">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
            Share the Details of Your Project
          </h2>
          <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide">
            Provide a clear overview of your project, including your goals,
            requirements, and expectations, to attract the right talent.
          </p>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-heading text-lg lg:text-2xl ">
              Describe the job or project
            </h2>

            <div className="flex flex-col gap-2">
              <textarea
                name="description"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Please fill job description",
                  },
                  minLength: {
                    value: 20,
                    message: "Description should be 20 chars long",
                  },
                })}
                placeholder="Example: I need a virtual assistant to reply to emails, organize files, and follow up on team tasks."
                className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#D0D5DD] focus:border-primary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
                cols={40}
                rows={14}
              ></textarea>
              {errors.description && (
                <span className="text-sm text-red-500 font-medium">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-heading text-lg lg:text-2xl">
              Upload Your File
            </h2>
            <input
              type="file"
              {...register("attachment", {
                validate: {
                  isPdf: (files) => {
                    if (!files || files.length === 0) return true;
                    return (
                      files[0].type === "application/pdf" ||
                      "Only PDF files are allowed."
                    );
                  },
                  maxSize: (files) => {
                    if (!files || files.length === 0) return true;
                    return (
                      files[0].size <= 104857600 ||
                      "File size must be less than 100MB."
                    );
                  },
                },
              })}
              className="w-full max-w-sm  p-4 border-2 border-dashed border-blue-400 rounded-lg text-blue-900 bg-blue-50 hover:bg-blue-100 cursor-pointer transition duration-300 flex flex-col items-center justify-center"
            />

            <p className="text-paragraph text-[16px]">Max file size: 100MB</p>
            {errors.attachment && (
              <span className="text-sm text-red-500 font-medium">
                {errors.attachment.message}
              </span>
            )}
          </div>
          <div className="flex justify-between gap-10 xl:gap-2 mt-5">
            <Button
              type="button"
              onClick={handlePrev}
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
              disabled={loadingNext}
              className={`bg-primary text-white w-[150px] p-3 border flex items-center gap-2 justify-center
      ${loadingNext ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loadingNext ? (
                <Loader size={18} border={3} color="white" />
              ) : (
                <>
                  Next <SvgIcon name="NextArrow" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
