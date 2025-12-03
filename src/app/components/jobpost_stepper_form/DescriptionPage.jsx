import Link from "next/link";
import { useFormContext } from "react-hook-form";
import Button from "../button/Button";
import StepperNumber from "./StepperNumber";
import SvgIcon from "../SvgIcon";

const DescriptionPage = ({ nextStep, prevStep, currstep }) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger(["description", "attachment"]);
    if (valid) nextStep();
  };

  const handlePrev = async () => {
    prevStep();
  };

  return (
    <div>
      <StepperNumber currstep={currstep} />
      <div className="flex flex-col lg:flex-row gap-9 px-5">
        <div className="flex-1 flex flex-col gap-4 mt-6">
          <h2 className="text-heading font-semibold md:text-3xl lg:text-[44px] text-2xl">
            Share the Details of Your Project
          </h2>
          <p className="text-paragraph text-base lg:text-[18px]">
            Provide a clear overview of your project, including your goals,
            requirements, and expectations, to attract the right talent.
          </p>
        </div>

        <div className="flex flex-1 flex-col h-auto">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="font-semibold text-heading text-lg lg:text-2xl ">
                Describe the job or project
              </h2>

              <div className="flex gap-5 w-full">
                <div className="flex  space-x-2.5 bg-neutral-primary-soft w-full">
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
                    className="border rounded border-gray-300 text-sm lg:text-base w-full px-4 py-2"
                    cols={40}
                    rows={14}
                  ></textarea>
                </div>
              </div>
              {errors.description && (
                <span className="text-red-500 font-bold">
                  {errors.description.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1 ">
              <h2 className="font-semibold text-heading text-lg lg:text-2xl">
                Upload Your File
              </h2>
              <div className="mt-5 flex flex-col  gap-5 justify-between">
                <div class="flex items-center  bg-neutral-primary-soft rounded-2xl">
                  <input
                    id="bordered-radio-2"
                    {...register("attachment", {
                      required: {
                        value: true,
                        message: "Please select image",
                      },
                      validate: {
                        isImage: (files) => {
                          if (files && files.length > 0) {
                            const type = files[0].type;
                            return (
                              ["image/jpeg", "image/jpg", "image/png"].includes(
                                type
                              ) || "Only JPG or PNG files are allowed."
                            );
                          }
                          return true;
                        },
                      },

                      maxSize: (files) => {
                        if (!files || files.length === 0) return true;
                        return (
                          files[0].size <= 104857600 ||
                          "File size must be less than 100MB."
                        );
                      },
                    })}
                    type="file"
                    name="attachment"
                    className="w-full max-w-sm  p-4 border-2 border-dashed border-blue-400 rounded-lg text-blue-900 bg-blue-50 hover:bg-blue-100 cursor-pointer transition duration-300 flex flex-col items-center justify-center"

                  />
                </div>
              </div>
              <p className="text-paragraph text-[16px]">Max file size: 100MB</p>
              {errors.attachment && (
                <span className="text-red-500 font-bold">
                  {errors.attachment.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-5 py-3">
              <div className="flex justify-between md:flex-row lg:gap-4 mt-5">
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
    </div>
  );
};

export default DescriptionPage;
