import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import React from "react";
import { useFormContext } from "react-hook-form";

const ShowExperiencePage = ({ fields, onEdit, onDelete, onAddMore,prevStep,nextStep }) => {
  if (!fields || fields.length === 0) {
    return <p className="text-gray-500">No experience added yet.</p>;
  }

  const { trigger } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger("experience");
    if (valid) nextStep();
  };

  return (
    <div className="flex flex-col gap-4">
      {fields.map((item, index) => (
        <div
          key={index}
          className="border p-4 rounded-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div>
            <h2 className="font-bold text-lg">{item.jobTitle}</h2>
            <p className="text-gray-600">{item.companyName}</p>
            <p className="text-gray-500 text-sm">
              {item.startDate} - {item.currentWorking ? "Present" : item.endDate}
            </p>
            {item.description && (
              <p className="text-gray-700 mt-1">{item.description}</p>
            )}
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded"
              onClick={() => onEdit(index)}
            >
              Edit
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => onDelete(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* Add More button */}
      <button
        type="button"
        className="mt-4 px-4 py-2 bg-secondary text-white w-fit rounded"
        onClick={onAddMore}
      >
        + Add More Experience
      </button>
      <div className="flex justify-between gap-2 mt-5">
            <Button
              type="button"
              onClick={prevStep}
              className="bg-white text-gray-800 flex items-center gap-2"
            >
              <SvgIcon name="PrevButton" /> Back
            </Button>
            <Button
              type="button"
              onClick={handleNext}
              className="bg-secondary text-white flex items-center gap-2 justify-center"
            >
              Next <SvgIcon name="NextArrow" />
            </Button>
          </div>
    </div>
  );
};

export default ShowExperiencePage;