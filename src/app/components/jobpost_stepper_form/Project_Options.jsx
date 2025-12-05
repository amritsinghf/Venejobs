import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import Button from "../button/Button";
import jobApiStore from "@/app/store/jobStore";
import StepperNumber from "./StepperNumber";
import SvgIcon from "../SvgIcon";

const Project_Options = ({ nextStep, prevStep, currstep }) => {
  const {
    projectSizes,
    projectDuration,
    experienceLevels,
    loading,
    getProjectSize,
    getProjectDuration,
    getExperienceLevels,
  } = jobApiStore();

  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger([
      "project_size",
      "duration",
      "experience_level",
    ]);
    if (valid) nextStep();
  };

  useEffect(() => {
    getProjectSize();
    getProjectDuration();
    getExperienceLevels();
  }, []);

  const handlePrev = async () => {
    prevStep();
  };

  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <StepperNumber currstep={currstep} />
      <div className="flex gap-6 lg:gap-25 flex-col lg:flex-row">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-2xl lg:text-4xl text-heading font-bold leading-tight ">
            Next, Define the Scope of Your Project
          </h2>
          <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide">
            Think about the scale of your project, the tasks involved, and the
            estimated time required to bring it to completion.{" "}
          </p>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl lg:text-2xl text-heading font-bold">
              Project size
            </h2>
            <div className="flex flex-col gap-6">
              {projectSizes?.map((item) => (
                <div
                  className="w-full py-3.5 px-6 text-base border border-[#D0D5DD] rounded-md 
             focus-within:border-primary 
             flex items-center gap-4 cursor-pointer"
                  key={item.id}
                >
                  <input
                    id={item.code}
                    type="radio"
                    value={item.title}
                    {...register("project_size", {
                      required: "Please select at least one option",
                    })}
                    name="project_size"
                    className="w-4 h-4 text-primary accent-primary "
                  />

                  <label htmlFor={item.code} className="flex flex-col gap-1.5 lg:gap-1 cursor-pointer">
                    <p className="select-none text-base lg:text-lg text-heading font-semibold tracking-wide">
                      {item.title}
                    </p>
                    <p className="select-none text-gray-500 text-sm font-medium tracking-wide">
                      {item.description}
                    </p>
                  </label>
                </div>

              ))}

              {errors.project_size && (
                <span className="text-red-500 font-bold">
                  {errors.project_size.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl lg:text-2xl text-heading font-bold">
              Deadline
            </h2>
            <div className="flex flex-wrap  gap-4 justify w-full">
              {projectDuration?.map((item) => (
                <div
                  className="flex items-center rounded-lg cursor-pointer border border-[#D0D5DD] py-3 px-4 gap-3 focus-within:border-primary"
                  key={item.id}
                >
                  <input
                    id={item.code}
                    {...register("duration", {
                      required: "Please select at least one option",
                    })}
                    type="radio"
                    value={item.code}
                    name="duration"
                    className="w-4 h-4 text-primary accent-primary "
                  />
                  <label
                    htmlFor={item.code}
                    className="w-full select-none text-sm lg:text-base text-paragraph font-medium "
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {errors.duration && (
            <span className="text-red-500 font-bold">
              {errors.duration.message}
            </span>
          )}

          <div className="flex flex-col gap-6">
            <h2 className="text-xl lg:text-2xl text-heading font-bold">
              What level of experience will it need?
            </h2>

            {experienceLevels?.map((item) => (
              <div key={item.id} className="cursor-pointer">
                <div className="w-full py-3.5 px-6 text-base border border-[#D0D5DD] rounded-md 
             focus-within:border-primary 
             flex items-center gap-4">
                  <input
                    id={item.code}
                    type="radio"
                    value={item.title}
                    {...register("experience_level", {
                      required: "Please select at least one option",
                    })}
                    name="experience_level"
                    className="w-4 h-4 text-primary accent-primary "
                  />
                  <label htmlFor={item.code} className="flex flex-col gap-1.5 lg:gap-1 cursor-pointer">
                    <p className="select-none text-base lg:text-lg text-heading font-semibold tracking-wide">
                      {item.title}
                    </p>
                    <p

                      className="select-none text-gray-500 text-sm font-medium tracking-wide"
                    >
                      Looking for someone relatively new to this field
                    </p>
                  </label>
                </div>
              </div>
            ))}
            {errors.experience_level && (
              <span className="text-red-500 font-bold">
                {errors.experience_level.message}
              </span>
            )}
          </div>

          <div className="flex justify-between gap-10 lg:gap-2">
              <Button
                type="button"
                onClick={handlePrev}
                className="bg-white text-gray-800  flex items-center gap-2 transition-all duration-300"
                style={{
                  boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.08)"
                }}
              >
                <SvgIcon name="PrevButton" />
                Back
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                className="bg-primary text-white flex items-center gap-2"
              >
                Next <SvgIcon name="NextArrow" />
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_Options;
