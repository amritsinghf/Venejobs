"use client";
import { useFormContext } from "react-hook-form";
import SvgIcon from "../SvgIcon";

const ReviewJob = ({ nextStep, prevStep, setStep }) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const { getValues } = useFormContext();
  const data = getValues();

  const deadline = data.duration;
  const parts = deadline.split("_");

  let final_deadline = "";
  if (parts[0] === "ongoing") {
    final_deadline = parts[0];
  } else final_deadline = `${parts[0]} to ${parts[1]} ${parts[2]}`;

  const handlePrev = async () => {
    prevStep();
  };

  return (
    <div className="w-full h-auto  max-w-[1420px]  mb-20 mt-30 mx-auto lg:px-3 md:px-3 sm:px-3">
      <div className="mt-20  flex flex-col gap-5  w-full ">
        <h2 className="text-[#333333] font-semibold text-[44px]">
          Review your Job details
        </h2>
        <p className="text-[#666666] text-[18px]">
          Take a moment to double-check your job details to ensure everything is
          clear and ready for the right talent to apply.
        </p>

        <div className="h-auto px-7 py-5 flex flex-col gap-10 hover:bg-neutral-secondary-medium bg-neutral-primary-soft border-default rounded-base shadow-xs">
          {/* title */}
          <div className="flex justify-between border-b border-gray-300 pb-4">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-2xl text-[#333333]">Title</h2>
              <p className="text-[#666666] text-lg">{data.title}</p>
            </div>
            <div onClick={() => setStep(1)} className="cursor-pointer">
              <SvgIcon name="Edit" size={32} color="#01237C" />
            </div>
          </div>

          {/* description and attachment file */}
          <div className="flex justify-between border-b border-gray-300 pb-4">
            <div className="flex flex-col gap-3 ">
              <h2 className="font-semibold text-2xl text-[#333333]">
                Description
              </h2>
              <p className="text-[#666666]  text-lg max-w-[900px] break-all">
                {data.description}
              </p>

              {/*file  */}
              <h2 className="font-semibold text-2xl text-[#333333]">
                Attachments
              </h2>
              <p>{data.attachment?.[0].name}</p>
            </div>
            <div onClick={() => setStep(5)} className="cursor-pointer">
              <SvgIcon name="Edit" size={32} color="#01237C" />
            </div>
          </div>

          <div className="flex justify-between border-b border-gray-300 pb-4">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-2xl text-[#333333]">
                Category
              </h2>
              <p className="text-[#666666] text-lg">{data.category}</p>

              <h2 className="font-semibold text-2xl text-[#333333]">Skills</h2>
              <p className="text-[#666666] text-lg">{data.skills}</p>
            </div>
            <div onClick={() => setStep(2)} className="cursor-pointer">
              <SvgIcon name="Edit" size={32} color="#01237C" />
            </div>
          </div>

          <div className="flex justify-between border-b border-gray-300 pb-4">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-2xl text-[#333333]">
                Project size
              </h2>
              <p className="text-[#666666] text-lg">{data.project_size}</p>

              <h2 className="font-semibold text-2xl text-[#333333]">
                Deadline
              </h2>
              <p className="text-[#666666] text-lg">{final_deadline}</p>

              <h2 className="font-semibold text-2xl text-[#333333]">
                What level of experience will it need?
              </h2>
              <p className="text-[#666666] text-lg">{data.experience_level}</p>
            </div>
            <div onClick={() => setStep(3)} className="cursor-pointer">
              <SvgIcon name="Edit" size={32} color="#01237C" />
            </div>
          </div>

          <div className="flex justify-between ">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-2xl text-[#333333]">
                Budget Type
              </h2>
              <p className="text-[#666666] text-lg">{data.budget_type}</p>

              <h2 className="font-semibold text-2xl text-[#333333]">
                Budget Amount
              </h2>
              <p className="text-[#666666] text-lg">{data.budget_amount}</p>
            </div>
            <div onClick={() => setStep(4)} className="cursor-pointer">
              <SvgIcon name="Edit" size={32} color="#01237C" />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handlePrev}
              className="bg-white text-gray-800 w-[150] p-3"
            >
              Back
            </button>
            <input
              type="submit"
              className="bg-blue-900 text-white w-[150] p-3 border"
              value={"Post Job"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewJob;
