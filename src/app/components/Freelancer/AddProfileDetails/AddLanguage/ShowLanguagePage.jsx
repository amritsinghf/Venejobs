import SvgIcon from "@/app/components/Utility/SvgIcon";
import React from "react";

const ShowLanguagePage = ({
  fields,
  languagesData,
  proficiencyData,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="mt-6 space-y-4">
      {fields.map((field, index) => {
        const language = languagesData.find(
          (l) => l.id === field.language
        )?.name;
        const proficiency = proficiencyData.find(
          (p) => p.id === field.proficiency
        )?.name;

        return (
          <div
            key={field.id}
            className="group relative flex items-center justify-between rounded-xl bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md"
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-[#5BBB7B]" />

            {/* Language info */}
            <div className="pl-3">
              <p className="text-base font-semibold text-gray-800">
                {language}
              </p>
              <span className="mt-1 inline-block rounded-full bg-green-50 px-3 py-0.5 text-sm font-medium text-[#3fa866]">
                {proficiency}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 opacity-80 transition group-hover:opacity-100">
              <button
                type="button"
                onClick={() => handleEdit(index)}
                className="flex items-center justify-center rounded-lg bg-[#5BBB7B] p-2 text-white transition hover:bg-[#4aa86c]"
              >
                <SvgIcon name="Editing" size={18} />
              </button>

              <button
                type="button"
                onClick={() => handleDelete(index)}
                className="flex items-center justify-center rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
              >
                <SvgIcon name="Delete1" size={18} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowLanguagePage;
