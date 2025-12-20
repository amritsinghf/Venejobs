import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";

const EducationModal = ({ setshowForm, close, append, update, editIndex, fields }) => {
  const { register, formState: { errors }, setValue, getValues } = useFormContext();

  // Temporary object for the form (one education entry)
  const [educationTemp, setEducationTemp] = useState({
    institutionName: "",
    degree: "",
    fieldOfStudy: "",
  });

  // Pre-fill form when editing
  useEffect(() => {
    if (editIndex !== null) {
      setEducationTemp(fields[editIndex]);
    } else {
      setEducationTemp({
        institutionName: "",
        degree: "",
        fieldOfStudy: "",
      });
    }
  }, [editIndex, fields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationTemp((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editIndex !== null) {
      update(editIndex, educationTemp); // Edit existing
    } else {
      append(educationTemp); // Add new
    }
    close();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 pt-2">
      <div className="relative bg-white w-full max-w-[1120px] rounded-xl shadow-sm h-[600px] flex flex-col">
        <div className="px-5 py-10 overflow-y-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-lg lg:text-2xl font-extrabold leading-tight text-heading mb-3">
              {editIndex !== null ? "Edit Education" : "Add Education"}
            </h2>
            <button
              type="button"
              onClick={() => setshowForm(false)}
              className="absolute right-4 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Institution Name */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-base">Institution Name</h3>
                <input
                  type="text"
                  name="institutionName"
                  value={educationTemp.institutionName}
                  onChange={handleChange}
                  placeholder="E.g., University of XYZ"
                  className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                />
                {/* validation is pending */}
                {errors.education?.[editIndex]?.institutionName && (
                  <span className="text-red-500 text-sm">
                    {errors.education[editIndex].institutionName.message}
                  </span>
                )}
              </div>

              {/* Degree */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-base">Degree</h3>
                <input
                  type="text"
                  name="degree"
                  value={educationTemp.degree}
                  onChange={handleChange}
                  placeholder="E.g., Bachelor of Computer Science"
                  className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                />
                {errors.education?.[editIndex]?.degree && (
                  <span className="text-red-500 text-sm">
                    {errors.education[editIndex].degree.message}
                  </span>
                )}
              </div>

              {/* Field of Study */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-base">Field of Study</h3>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={educationTemp.fieldOfStudy}
                  onChange={handleChange}
                  placeholder="E.g., Computer Science"
                  className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                />
                {errors.education?.[editIndex]?.fieldOfStudy && (
                  <span className="text-red-500 text-sm">
                    {errors.education[editIndex].fieldOfStudy.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button
                className="px-4 py-2 border rounded"
                onClick={() => setshowForm(false)}
              >
                Cancel
              </Button>
              <Button
                className="px-4 py-2 bg-secondary text-white rounded"
                onClick={handleSave}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationModal;
