import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import Button from "../button/Button";
import jobApiStore from "@/app/store/jobStore";
import StepperNumber from "./StepperNumber";
import SvgIcon from "../Utility/SvgIcon";
import Loader from "../common/Loader";
import ProjectSizeSkeleton from "../Skeletons/ProjectSizeSkeleton";
import DeadlineSkeleton from "../Skeletons/DeadlineSkeleton";
import ExperienceSkeleton from "../Skeletons/ExperienceSkeleton";

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

  const [loadingNext, setLoadingNext] = useState(false);

  const {
    register,
    formState: { errors },
    trigger,
    getValues,
    setError,
    clearErrors,
  } = useFormContext();
  const handleNext = async () => {
    setLoadingNext(true);

    const valid = await trigger([
      "project_size",
      "duration",
      "experience_level",
    ]);

    if (!valid) {
      setLoadingNext(false);
      return;
    }

    const projectSize = getValues("project_size");
    const duration = getValues("duration");

    // 🔥 BUSINESS RULE
    if (
      projectSize?.toLowerCase() === "large" &&
      duration === "1_2_days"
    ) {
      setError("duration", {
        type: "manual",
        message: "Large projects cannot have a 1–2 days deadline",
      });

      setLoadingNext(false);
      return;
    }

    // ✅ Clear error if valid
    clearErrors("duration");

    nextStep();
    setLoadingNext(false);
  };


  useEffect(() => {
    getProjectSize();
    getProjectDuration();
    getExperienceLevels();
  }, []);

  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <StepperNumber currstep={currstep} />

      <div className="flex gap-6 lg:gap-25 flex-col lg:flex-row">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl text-heading font-bold leading-snug">
            Next, Define the Scope of Your Project
          </h2>
          <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide">
            Think about the scale of your project, the tasks involved, and the
            estimated time required to bring it to completion.
          </p>
        </div>

        <div className="w-full flex flex-col gap-6">
          {/* PROJECT SIZE */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl xl:text-2xl text-heading font-semibold leading-9">
              Project size
            </h2>

            <div className="flex flex-col gap-4">
              {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                  <ProjectSizeSkeleton key={i} />
                ))
                : projectSizes?.map((item) => (
                  <label
                    key={item.id}
                    className="w-full py-3.5 px-6 text-base border border-[#D0D5DD]
                                 rounded-lg focus-within:border-primary
                                 flex items-center gap-4 cursor-pointer"
                  >
                    <input
                      id={item.code}
                      type="radio"
                      value={item.title}
                      {...register("project_size", {
                        required: "Please select at least one option",
                      })}
                      name="project_size"
                      className="w-4 h-4 text-primary accent-primary"
                    />

                    <div className="flex flex-col gap-1.5 lg:gap-1">
                      <p className="select-none text-base xl:text-lg text-heading font-semibold tracking-wide">
                        {item.title}
                      </p>
                      <p className="select-none text-gray-500 text-sm xl:text-base font-medium tracking-wide">
                        {item.description}
                      </p>
                    </div>
                  </label>
                ))}
              {errors.project_size && (
                <span className="text-sm text-red-500 font-medium">
                  {errors.project_size.message}
                </span>
              )}
            </div>
          </div>

          {/* DEADLINE */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl xl:text-2xl text-heading font-semibold leading-9">
              Deadline
            </h2>

            <div className="flex flex-wrap gap-4 w-full">
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                  <DeadlineSkeleton key={i} />
                ))
                : projectDuration?.map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center rounded-lg cursor-pointer
                                 border border-[#D0D5DD]
                                 py-3 px-4 gap-3
                                 focus-within:border-primary"
                  >
                    <input
                      id={item.code}
                      {...register("duration", {
                        required: "Please select at least one option",
                      })}
                      type="radio"
                      value={item.code}
                      name="duration"
                      className="w-4 h-4 text-primary accent-primary"
                    />
                    <span className="w-full text-gray-500 text-sm xl:text-base font-medium tracking-wide">
                      {item.label}
                    </span>
                  </label>
                ))}
            </div>

            {errors.duration && (
              <span className="text-sm text-red-500 font-medium">
                {errors.duration.message}
              </span>
            )}
          </div>

          {/* EXPERIENCE */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl xl:text-2xl text-heading font-semibold leading-9">
              What level of experience will it need?
            </h2>

            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                <ExperienceSkeleton key={i} />
              ))
              : experienceLevels?.map((item) => (
                <label
                  key={item.id}
                  className="cursor-pointer w-full py-3.5 px-6 text-base
                               border border-[#D0D5DD] rounded-lg
                               focus-within:border-primary
                               flex items-center gap-4"
                >
                  <input
                    id={item.code}
                    type="radio"
                    value={item.title}
                    {...register("experience_level", {
                      required: "Please select at least one option",
                    })}
                    name="experience_level"
                    className="w-4 h-4 text-primary accent-primary"
                  />

                  <div className="flex flex-col gap-1.5 lg:gap-1">
                    <p className="select-none text-base xl:text-lg text-heading font-semibold tracking-wide">
                      {item.title}
                    </p>
                    <p className="select-none text-gray-500 text-sm xl:text-base font-medium tracking-wide">
                      Looking for someone relatively new to this field
                    </p>
                  </div>
                </label>
              ))}

            {errors.experience_level && (
              <span className="text-sm text-red-500 font-medium">
                {errors.experience_level.message}
              </span>
            )}
          </div>

          {/* BUTTONS */}
          <div className="flex justify-between gap-10 xl:gap-2 mt-5">
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
              disabled={loadingNext}
              className={`bg-primary text-white flex items-center gap-2 justify-center px-7
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

export default Project_Options;
