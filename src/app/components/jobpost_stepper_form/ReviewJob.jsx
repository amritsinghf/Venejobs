"use client";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import SvgIcon from "../SvgIcon";
import Button from "../button/Button";
import StepperNumber from "./StepperNumber";
import Loader from "../common/Loader";

const Row = ({ title, children, onEdit }) => (
  <div className="flex justify-between border-b border-gray-300 pb-4">
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-lg lg:text-xl text-heading">{title}</h2>
      {children}
    </div>

    {onEdit && (
      <div onClick={onEdit} className="cursor-pointer">
        <SvgIcon name="Edit" size={22} className="text-blue-900" />
      </div>
    )}
  </div>
);

const ReviewJob = ({ nextStep, prevStep, currstep, setStep }) => {
  const { register, formState: { errors }, trigger, getValues } = useFormContext();
  const data = getValues();

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const deadline = data.duration;
  const parts = deadline?.split("_") || [];

  let final_deadline = "";
  if (parts[0] === "ongoing") {
    final_deadline = "Ongoing";
  } else {
    final_deadline = `${parts[0]} to ${parts[1]} ${parts[2]}`;
  }

  const { handleSubmit: formSubmit } = useFormContext();

  const handleSubmit = formSubmit(async () => {
    setLoadingSubmit(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoadingSubmit(false);
  });

  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <StepperNumber currstep={currstep} />

      <div className="flex flex-col gap-6">
        {/* Title */}
        <h2 className="text-2xl lg:text-3xl xl:text-4xl text-heading font-bold leading-tight">
          Review your Job details
        </h2>
        <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide">
          Take a moment to double-check your job details to ensure everything is correct.
        </p>

        <div className="h-auto px-4 lg:px-10 py-10 flex flex-col gap-10 hover:bg-neutral-secondary-medium border-default rounded shadow-[2px_2px_50px_4px_rgba(0,0,0,0.05)]">

          {/* Title */}
          <Row title="Title" onEdit={() => setStep(1)}>
            <p className="text-paragraph text-base">{data.title}</p>
          </Row>

          {/* Description + Attachment */}
          <Row title="Description" onEdit={() => setStep(5)}>
            <p className="text-paragraph text-base max-w-[900px] break-all">{data.description}</p>

            <h2 className="font-semibold text-lg lg:text-xl text-heading">Attachments</h2>
            <p>{data?.attachment?.[0]?.name || "No file attached"}</p>
          </Row>

          {/* Category & Skills */}
          <Row title="Category" onEdit={() => setStep(2)}>
            <p className="text-paragraph text-base">{data.category}</p>

            <h2 className="font-semibold text-lg lg:text-xl text-heading">Skills</h2>
            <p className="text-paragraph text-base">{data.skills?.join(", ")}</p>
          </Row>

          {/* Project Details */}
          <Row title="Project size" onEdit={() => setStep(3)}>
            <p className="text-paragraph text-base">{data.project_size}</p>

            <h2 className="font-semibold text-lg lg:text-xl text-heading">Deadline</h2>
            <p className="text-paragraph text-base">{final_deadline}</p>

            <h2 className="font-semibold text-lg lg:text-xl text-heading">
              Experience Level
            </h2>
            <p className="text-paragraph text-base">{data.experience_level}</p>
          </Row>

          {/* Budget */}
          <Row title="Budget Type" onEdit={() => setStep(4)}>
            <p className="text-paragraph text-base">{data.budget_type}</p>

            <h2 className="font-semibold text-lg lg:text-xl text-heading">
              Budget Amount
            </h2>
            <p className="text-paragraph text-base">{data.budget_amount}</p>
          </Row>

          {/* Buttons */}
          <div className="flex justify-between w-full mt-5 gap-10 xl:gap-5">
            <Button
              type="button"
              onClick={prevStep}
              className="bg-white text-gray-800 flex items-center gap-2 transition-all duration-300"
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
              onClick={handleSubmit}
              disabled={loadingSubmit}
              className={`bg-primary text-white flex items-center gap-2 justify-center
                ${loadingSubmit ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loadingSubmit ? (
                <Loader size={18} border={3} color="white" />
              ) : (
                <>
                  Post This Job <SvgIcon name="NextArrow" />
                </>
              )}
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReviewJob;
