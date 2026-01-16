import { useFormContext } from "react-hook-form";
import StepperNumber from "./StepperNumber";
import { useState } from "react";
import StepNavigation from "@/app/components/JobpostStepperForm/StepNavigation";
import { JobFormStep } from "@/app/components/JobpostStepperForm/JobFormStep";

const DescriptionPage = ({ nextStep, prevStep, setStep, fromReview }) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();
  const [loadingNext, setLoadingNext] = useState(false);

  const validateFields = async (callback) => {
    setLoadingNext(true);

    const valid = await trigger(["description", "attachment"]);

    if (valid) {
      callback();
    }

    setLoadingNext(false);
  };

  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <StepperNumber currstep={JobFormStep.description} />
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
                className="w-full py-3.5 px-3 text-sm lg:text-base font-medium border border-[#D0D5DD] focus:border-primary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
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
            <h2 className="text-heading text-lg font-semibold lg:text-2xl">
              Upload Your File{" "}
              <span className="text-sm font-normal text-gray-500 lg:text-base">
                (Optional)
              </span>
            </h2>

            <input
              type="file"
              {...register("attachment", {
                required: {
                  value: true,
                  message: "Please Upload Your File ",
                },
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

            <p className="text-paragraph text-base">Max file size: 100MB</p>
            {errors.attachment && (
              <span className="text-sm text-red-500 font-medium">
                {errors.attachment.message}
              </span>
            )}
          </div>

          <StepNavigation
            onNext={() => validateFields(nextStep)}
            onBack={prevStep}
            showReviewBack={fromReview}
            onReviewBack={() =>
              validateFields(() => setStep(JobFormStep.review))
            }
            loading={loadingNext}
          />
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
