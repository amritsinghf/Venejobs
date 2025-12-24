import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";

const EducationModal = ({
  setshowForm,
  close,
  append,
  update,
  editIndex,
  fields,
}) => {
  const [errors, setErrors] = useState({});

  const [educationTemp, setEducationTemp] = useState({
    institution_name: "",
    degree: "",
    field_of_study: "",
    type_of_education: "",
    start_date: "",
    end_date: "",
    description: "",
  });

  useEffect(() => {
    if (editIndex !== null) {
      setEducationTemp(fields[editIndex]);
    } else {
      setEducationTemp({
        institution_name: "",
        degree: "",
        field_of_study: "",
        type_of_education: "",
        start_date: "",
        end_date: "",
        description: "",
      });
    }
  }, [editIndex, fields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationTemp((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const newErrors = {};

    if (!educationTemp.institution_name) {
      newErrors.institution_name = "Institution Name is required";
    }
    if (!educationTemp.degree) {
      newErrors.degree = "Degree is required";
    }
    if (!educationTemp.field_of_study) {
      newErrors.field_of_study = "Field Of Study is required";
    }
    if (!educationTemp.type_of_education) {
      newErrors.type_of_education = "Type Of Education is required";
    }
    if (!educationTemp.description) {
      newErrors.description = "Description is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    if (editIndex !== null) {
      update(editIndex, educationTemp);
    } else {
      append(educationTemp);
    }
    close();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 pt-2">
      <div className="relative bg-white w-full max-w-[1120px] rounded-xl shadow-sm h-[700px] flex flex-col">
        <div className="px-3 py-3">
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

          <div className="flex flex-col justify-between h-[590px]">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Institution Name */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-base">Institution Name</h3>
                  <input
                    type="text"
                    name="institution_name"
                    value={educationTemp.institution_name}
                    onChange={handleChange}
                    placeholder="E.g., University of XYZ"
                    className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                  />

                  {errors.institution_name && (
                    <p className="text-red-500 text-sm">
                      {errors.institution_name}
                    </p>
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
                  {errors.degree && (
                    <p className="text-red-500 text-sm">{errors.degree}</p>
                  )}
                </div>

                {/* Field of Study */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-base">Field of Study</h3>
                  <input
                    type="text"
                    name="field_of_study"
                    value={educationTemp.field_of_study}
                    onChange={handleChange}
                    placeholder="E.g., Computer Science"
                    className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                  />
                  {errors.field_of_study && (
                    <p className="text-red-500 text-sm">
                      {errors.field_of_study}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-base">Type of education</h3>
                  <input
                    type="text"
                    name="type_of_education"
                    value={educationTemp.type_of_education || ""}
                    onChange={handleChange}
                    placeholder="Bachelor’s Degree"
                    className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                  />
                  {errors.type_of_education && (
                    <p className="text-red-500 text-sm">
                      {errors.type_of_education}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-base">
                    Start Date
                  </h3>
                  <input
                    type="text"
                    name="start_date"
                    value={educationTemp.start_date || ""}
                    onChange={handleChange}
                    placeholder="From"
                    className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                  />
                  {errors.start_date && (
                    <p className="text-red-500 text-sm">
                      {errors.start_date}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-base">
                    End Date
                  </h3>
                  <input
                    type="text"
                    name="end_date"
                    value={educationTemp.end_date || ""}
                    onChange={handleChange}
                    placeholder="Or expected graduation year"
                    className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                  />
                  {errors.end_date && (
                    <p className="text-red-500 text-sm">
                      {errors.end_date}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-span-2 flex flex-col gap-2">
                <label className="font-semibold text-sm lg:text-lg">
                  Description
                </label>
                <textarea
                  name="description"
                  value={educationTemp.description || ""}
                  onChange={handleChange}
                  rows={4}
                  className="border border-gray-200 p-2 rounded"
                  placeholder="Enter description..."
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">{errors.description}</p>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <Button
                type="button"
                className="px-4 py-2 shadow text-paragraph font-semibold"
                onClick={() => setshowForm(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
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
