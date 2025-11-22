import Link from "next/link";
import { useFormContext } from "react-hook-form";

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
    <div className="w-full h-[1200]  max-w-[1420px]  mb-20 mt-30 mx-auto ">
      <div className="flex  justify-evenly max-w-[250px]">
        {[...Array(5)].map((_, i) => (
          <div className="flex   text-center">
            <span
              className={`${
                i + 1 <= currstep
                  ? "bg-blue-900 text-white"
                  : "bg-white text-black"
              } rounded-full w-[35px] h-[35px] flex items-center justify-center border border-gray-300`}
            >
              {i + 1}
            </span>
          </div>
        ))}
      </div>
      <div className=" flex gap-9">
        <div className="mt-20  flex flex-col gap-5 h-[325px] w-[700px]">
          <h2 className="text-[#333333] font-semibold text-[44px]">
            Share the Details of Your Project
          </h2>
          <p className="text-[#666666] text-[18px]">
            Provide a clear overview of your project, including your goals,
            requirements, and expectations, to attract the right talent.
          </p>
        </div>

        <div className="flex flex-col h-[1100] w-[700px] mt-20 ">
          <div className="flex flex-col gap-5 w-full px-15 ">
            <div className="">
              <h2 className="font-semibold text-[#333333] text-2xl ">
                Describe the job or project
              </h2>

              <div className="flex gap-5 mt-4  p-1  h-[280px]">
                <div class="flex  space-x-2.5 bg-neutral-primary-soft w-full ">
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
                    className="border rounded border-gray-500"
                    cols={55}
                    rows={44}
                  ></textarea>
                </div>
              </div>
              {errors.description && (
                <span className="text-red-500 font-bold">
                  {errors.description.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-[#333333] text-2xl ">
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
                    class="text-blue-900 rounded"
                  />
                </div>
              </div>
              <p className="text-[#666666] text-[16px]">Max file size: 100MB</p>
              {errors.attachment && (
                <span className="text-red-500 font-bold">
                  {errors.attachment.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-5 py-3">
              <div className="flex justify-end mt-5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="bg-white text-gray-800 w-[150] p-3  "
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-900 text-white w-[150] p-3 border "
                >
                  Review Job Post
                </button>
                {/* <input type="submit" className="bg-blue-900 text-white w-[150] p-3 border" value={"Review Job Post"}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
