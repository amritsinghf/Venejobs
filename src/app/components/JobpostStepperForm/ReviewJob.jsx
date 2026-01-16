"use client";
import { useFormContext } from "react-hook-form";
import SvgIcon from "../Utility/SvgIcon";
import jobApiStore from "@/app/store/jobStore";
import StepNavigation from "./StepNavigation";
import { JobFormStep } from "@/app/components/JobpostStepperForm/JobFormStep";

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

const ReviewJob = ({ prevStep, setStep, setFromReview }) => {
  const loading = jobApiStore((state) => state.loading);
  const { watch } = useFormContext();
  const data = watch();

  // edit handler
  const handleEdit = (step) => {
    setFromReview(true);
    setStep(step);
  };

  // Format deadline
  const parts = data.duration?.split("_") ?? [];
  const final_deadline =
    parts[0] === "ongoing"
      ? "Ongoing"
      : `${parts[0]} to ${parts[1]} ${parts[2]}`;

  function formatCategory(value) {
    if (!value) return "";

    return value
      .split("_")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }


  console.log(data);
  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl lg:text-3xl text-heading font-bold leading-9">
          Review your Job details
        </h2>

        <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 tracking-wide">
          Take a moment to double-check your job details to ensure everything is
          correct.
        </p>

        <div className="h-auto px-4 lg:px-10 py-10 flex flex-col gap-10 hover:bg-neutral-secondary-medium border-default rounded shadow-[2px_2px_50px_4px_rgba(0,0,0,0.05)]">
          {/* title */}
          <Row title="Title" onEdit={() => handleEdit(JobFormStep.title)}>
            <p className="text-paragraph text-base">{data.title}</p>
          </Row>

          {/* description */}
          <Row title="Description" onEdit={() => handleEdit(JobFormStep.description)}>
            <p className="text-paragraph text-base max-w-[900px] break-all">
              {data.description}
            </p>

            <h2 className="font-semibold text-lg lg:text-xl text-heading">
              Attachments
            </h2>
            <p>{data?.attachment?.[0]?.name || "No file attached"}</p>
          </Row>

          {/* CATEGORY + SKILLS */}
          <Row title="Category" onEdit={() => handleEdit(JobFormStep.categorySkills)}>
            <p className="text-paragraph text-base"> {formatCategory(data.category)}</p>

            <h2 className="font-semibold text-lg lg:text-xl text-heading">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills?.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded text-sm"
                >
                  {skill} ("Intermediate")
                </span>
              ))}
            </div>

          </Row>

          {/* PROJECT DETAILS */}
          <Row title="Project size" onEdit={() => handleEdit(JobFormStep.projectOptions)}>
            <p className="text-paragraph text-base">{data.project_size}</p>

            <h2 className="font-semibold text-lg lg:text-xl text-heading">
              Deadline
            </h2>
            <p className="text-paragraph text-base">{final_deadline}</p>

            <h2 className="font-semibold text-lg lg:text-xl text-heading">
              Experience Level
            </h2>
            <p className="text-paragraph text-base">{data.experience_level}</p>
          </Row>

          {/* BUDGET */}
          <Row title="Budget Type" onEdit={() => handleEdit(JobFormStep.budgetOptions)}>
            <p className="text-paragraph text-base">{data.budget_type}</p>

            <h2 className="font-semibold text-lg lg:text-xl text-heading">
              Budget Amount
            </h2>
            <p className="text-paragraph text-base">{data.budget_amount}</p>
          </Row>

          {/* BUTTONS */}
          <StepNavigation
            isLastStep
            onBack={prevStep}
            loading={loading}
            submitLabel="Post This Job"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewJob;
