import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import React from "react";
import { useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";

const ShowExperiencePage = ({
  fields,
  onEdit,
  onDelete,
  onAddMore,
  prevStep,
  nextStep,
}) => {
  if (!fields || fields.length === 0) {
    return <p className="text-gray-500">No experience added yet.</p>;
  }

  const { trigger } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger("experience");
    if (valid) nextStep();
  };

  const formatMonthYear = (month, year) => {
    const date = new Date(year, month - 1);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl xl:text-2xl text-heading font-bold leading-9">
          Employment History
        </h2>
        <button
          type="button"
          className="px-2 py-2 bg-secondary text-white w-fit rounded-full"
          onClick={onAddMore}
        >
          <AddIcon />
        </button>
      </div>

      {fields.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-lg lg:text-xl">
              {item.job_title}
            </h2>
            <p className="text-gray-500 text-sm">
              {formatMonthYear(item.start_month, item.start_year)} -{" "}
              {item.is_current
                ? "Currently working"
                : formatMonthYear(item.end_month, item.end_year)}
            </p>

            {item.description && (
              <p className="text-gray-700">{item.description}</p>
            )}
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-secondary text-white rounded-full"
              onClick={() => onEdit(index)}
            >
              <SvgIcon name="Editing" size={20} />
            </button>

            <button
              type="button"
              className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-secondary text-white rounded-full"
              onClick={() => onDelete(index)}
            >
              <SvgIcon name="Delete1" size={20} />
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between gap-10 xl:gap-2 mt-5">
        <Button
          type="button"
          onClick={prevStep}
          className="bg-white text-paragraph flex items-center gap-2 shadow"
          style={{
            boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
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
