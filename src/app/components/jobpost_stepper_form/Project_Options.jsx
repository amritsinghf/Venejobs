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
    <div>
      <StepperNumber currstep={currstep} />
      <div className="flex gap-10 flex-col lg:flex-row px-5">
        <div className="mt-10  flex flex-col gap-5  ">
          <h2 className="text-heading font-semibold text-2xl lg:text-[44px]">
            Next, Define the Scope of Your Project
          </h2>
          <p className="text-paragraph text-base lg:text-[18px]">
            Think about the scale of your project, the tasks involved, and the
            estimated time required to bring it to completion.{" "}
          </p>
        </div>

        <div className="flex flex-col h-auto">
          <div className="flex flex-col gap-5 w-full lg:mt-8">
            <div className="flex flex-col gap-6">
              <h2 className="font-semibold text-heading text-lg lg:text-2xl ">
                Project size
              </h2>
              <div className="flex flex-col gap-5">
                {projectSizes?.map((item) => (
                  <div
                    className="flex space-x-2.5 bg-neutral-primary-soft border  border-gray-200 rounded p-2"
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
                      className="rounded-2xl w-4 h-4 mt-4 ms-4 border border-gray-200"
                    />
                    <label htmlFor={item.code} className="py-2">
                      <p className="select-none w-full text-base md:text-lg  text-heading font-semibold ">
                        {item.title}
                      </p>
                      <p
                        className="select-none text-xs lg:text-sm text-paragraph text-body"
                      >
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

            <div className="flex flex-col gap-6">
              <h2 className="font-semibold text-heading  text-lg lg:text-2xl ">
                Deadline
              </h2>
              <div className="flex flex-wrap  gap-4 justify w-full">
                {projectDuration?.map((item) => (
                  <div
                    className="flex items-center px-2 border border-gray-200 bg-neutral-primary-soft rounded-2xl"
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
                      className="w-4 h-4 rounded-full checked:border-brand"
                    />
                    <label
                      htmlFor={item.code}
                      className="w-full py-4 select-none ms-2 lg:text-lg text-base text-paragraph font-medium "
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
              <h2 className="font-semibold text-heading text-lg lg:text-2xl ">
                What level of experience will it need?
              </h2>

              {experienceLevels?.map((item) => (
                <div key={item.id}>
                  <div className="flex space-x-2.5 bg-neutral-primary-soft border border-gray-200 rounded p-2 ">
                    <input
                      id={item.code}
                      type="radio"
                      value={item.title}
                      {...register("experience_level", {
                        required: "Please select at least one option",
                      })}
                      name="experience_level"
                      className="rounded-2xl w-4 h-4 mt-4 ms-4 border border-default-medium  bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                    />
                    <label htmlFor={item.code} className="py-2">
                      <p className="select-none w-full text-base lg:text-lg  text-heading font-semibold">
                        {item.title}
                      </p>
                      <p
                        
                        className="select-none text-xs lg:text-sm  text-paragraph text-body"
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

            <div className="flex justify-around gap-18 md:justify-between md:flex-row lg:gap-4 mt-5">
              <Button
                type="button"
                onClick={handlePrev}
                className="bg-white text-gray-800 w-[150px] p-3 flex items-center gap-2  shadow"
              >
                <SvgIcon name="PrevButton" />
                Back
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                className="bg-primary text-white w-[150px] p-3 border flex items-center gap-2"
              >
                Next <SvgIcon name="NextArrow" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_Options;
