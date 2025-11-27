import {
  get_project_duration,
  get_project_experienceLevel,
  get_project_size,
} from "@/app/lib/jobs";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import Button from "../ui/Button";

const Project_Options = ({ nextStep, prevStep, currstep }) => {
  const [projectSize, setprojectSize] = useState([]);
  const [duration, setDuration] = useState([]);
  const [experienceLevels, setExperienceLevels] = useState([]);

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

  const getproject_option = async () => {
    const project_size = await get_project_size();
    const project_duration = await get_project_duration();
    const project_experienceLevel = await get_project_experienceLevel();
    setprojectSize(project_size.projectSizes);
    setDuration(project_duration.durations);
    setExperienceLevels(project_experienceLevel.experienceLevels);
    console.log(project_duration)
  };

  useEffect(() => {
    getproject_option();
  }, []);

  const handlePrev = async () => {
    prevStep();
  };

  return (
    <div className="w-full h-[1200]  max-w-[1420px]  mb-20 mt-30 mx-auto ">
      <div className="flex  justify-evenly max-w-[250px]">
        {[...Array(5)].map((_, i) => (
          <div className="flex text-center" key={i}>
            <span
              key={i}
              className={`${
                i + 1 <= currstep
                  ? "bg-primary text-white"
                  : "bg-white text-black"
              } rounded-full w-[35px] h-[35px] flex items-center justify-center border border-gray-300`}
            >
              {i + 1}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-9 lg:px-3 md:px-3 sm:px-3">
        <div className="mt-20  flex flex-col gap-5 h-[325px] w-[700px]">
          <h2 className="text-heading font-semibold text-[44px]">
            Next, Define the Scope of Your Project
          </h2>
          <p className="text-paragraph text-[18px]">
            Think about the scale of your project, the tasks involved, and the
            estimated time required to bring it to completion.{" "}
          </p>
        </div>

        <div className="flex flex-col h-[1100] w-[700px] mt-20">
          <div className="flex flex-col gap-5 w-full px-15 ">
            <div className="">
              <h2 className="font-semibold text-heading text-2xl ">
                Project size
              </h2>
              <div className="flex flex-col gap-5 mt-4  p-1">
                {projectSize.map((item) => (
                  
                    <div
                      className="flex space-x-2.5 bg-neutral-primary-soft border border-default rounded p-2"
                      key={item.id}
                    >
                      <input
                        id="bordered-checkbox-3"
                        type="radio"
                        value={item.title}
                        {...register("project_size", {
                          required: "Please select at least one option",
                        })}
                        name="project_size"
                        className="rounded-2xl w-4 h-4 mt-4 ms-4 border border-default-medium  bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                      />
                      <label htmlFor="bordered-checkbox-3" className="py-4 pe-4">
                        <p className="select-none w-full text-sm  text-heading font-semibold">
                          {item.title}
                        </p>
                        <p
                          id="helper-checkbox-bordered-1"
                          className="select-none text-sm text-paragraph text-body"
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

            <div className="flex flex-col   p-1">
              <h2 className="font-semibold text-heading text-2xl ">
                Duration
              </h2>
              <div className="mt-5 flex flex-wrap  gap-5  justify-between ">
                {duration.map((item) => (
                  
                    <div className="flex items-center px-2 border border-default bg-neutral-primary-soft rounded-2xl" key={item.id}>
                      <input
                        id="bordered-radio-2"
                        {...register("duration", {
                          required: "Please select at least one option",
                        })}
                        type="radio"
                        value={item.code}
                        name="duration"
                        className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                      />
                      <label
                        htmlFor="bordered-radio-2"
                        className="w-full py-4 select-none ms-2 text-sm font-medium text-heading"
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

            <div className="flex flex-col gap-5 mt-4  p-1">
              <h2 className="font-semibold text-heading text-2xl ">
                What level of experience will it need?
              </h2>

              {experienceLevels.map((item) => (
                <>
                  <div className="flex space-x-2.5 bg-neutral-primary-soft border border-default rounded p-2">
                    <input
                      id="bordered-checkbox-2"
                      type="radio"
                      value="Entry"
                      {...register("experience_level", {
                        required: "Please select at least one option",
                      })}
                      name="experience_level"
                      className="rounded-2xl w-4 h-4 mt-4 ms-4 border border-default-medium  bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                    />
                    <label for="bordered-checkbox-2" className="py-4 pe-4">
                      <p className="select-none w-full text-sm  text-heading font-semibold">
                        {item.title}
                      </p>
                      <p
                        id="helper-checkbox-bordered-1"
                        className="select-none text-sm text-paragraph text-body"
                      >
                        Looking for someone relatively new to this field
                      </p>
                    </label>
                  </div>
                </>
              ))}
              {errors.experience_level && (
                <span className="text-red-500 font-bold">
                  {errors.experience_level.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-5 py-3">
              <div className="flex justify-end mt-5">
                <Button
                  type="button"
                  onClick={handlePrev}
                  className="bg-white text-gray-800 w-[150] p-3  "
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-primary text-white w-[150] p-3 border "
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_Options;
