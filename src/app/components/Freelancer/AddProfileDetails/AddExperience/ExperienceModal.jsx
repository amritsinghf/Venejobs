import React, { useEffect, useState } from "react";
import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";

const INITIAL_EXPERIENCE = {
  job_title: "",
  company: "",
  location: "",
  city: "",
  start_month: "",
  start_year: "",
  end_month: "",
  end_year: "",
  description: "",
  is_current: false,
};

const validateExperience = (data) => {
  const errors = {};

  if (!data.job_title) errors.job_title = "Job title is required";
  if (!data.company) errors.company = "Company name is required";
  if (!data.location) errors.location = "Location is required";
  if (!data.city) errors.city = "City is required";
  if (!data.start_month) errors.start_month = "Start month is required";
  if (!data.start_year) errors.start_year = "Start year is required";
  if (!data.description) errors.description = "Description is required";

  if (data.start_month < 1 || data.start_month > 12)
    errors.start_month = "Month must be between 1 and 12";

  if (!/^\d{4}$/.test(data.start_year))
    errors.start_year = "Enter a valid 4 digit year";

  if (!data.is_current) {
    if (!data.end_month) errors.end_month = "End month is required";
    if (!data.end_year) errors.end_year = "End year is required";

    if (data.end_month < 1 || data.end_month > 12)
      errors.end_month = "Month must be between 1 and 12";

    if (!/^\d{4}$/.test(data.end_year))
      errors.end_year = "Enter a valid 4 digit year";
  }

  return errors;
};

const InputField = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  disabled = false,
  type = "text",
}) => (
  <div className="flex flex-col gap-2">
    <label className="font-medium lg:text-base tracking-wide">{label}</label>

    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      inputMode={type === "number" ? "numeric" : undefined}
      pattern={type === "number" ? "[0-9]*" : undefined}
      className={`
        w-full py-3.5 px-3 text-sm lg:text-base rounded-md
        tracking-wide placeholder:text-sm
        border transition-all duration-200
        focus:outline-none
        ${
          disabled
            ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
            : "bg-white text-heading border-[#D0D5DD] focus:border-secondary"
        }
      `}
    />

    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const ExperienceModal = ({ close, append, update, editIndex, fields }) => {
  const [experience, setExperience] = useState(INITIAL_EXPERIENCE);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setExperience(editIndex !== null ? fields[editIndex] : INITIAL_EXPERIENCE);
  }, [editIndex, fields]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const numberFields = ["start_month", "end_month", "start_year", "end_year"];

    let finalValue = value;

    if (numberFields.includes(name)) {
      finalValue = value.replace(/[^0-9]/g, "");

      if (name.includes("month")) {
        if (finalValue.length > 2) return;
        if (finalValue && Number(finalValue) > 12) return;
      }

      if (name.includes("year")) {
        if (finalValue.length > 4) return;
      }
    }

    if (type === "checkbox" && name === "is_current") {
      setExperience((prev) => ({
        ...prev,
        is_current: checked,
        end_month: checked ? null : prev.end_month,
        end_year: checked ? null : prev.end_year,
      }));

      setErrors((prev) => ({
        ...prev,
        end_month: "",
        end_year: "",
      }));

      return;
    }

    setExperience((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSave = () => {
    const validationErrors = validateExperience(experience);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    editIndex !== null ? update(editIndex, experience) : append(experience);

    close();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      {/* Modal Container */}
      <div
        className="
          bg-white
          w-full h-full
          rounded-none
          overflow-y-auto

          md:h-auto
          md:max-h-[90vh]
          md:max-w-[1000px]
          md:rounded-2xl
        "
      >
        <div className="px-4 py-6 md:px-6 md:py-8 flex flex-col gap-6">
          {/* Header */}
          <div className="flex justify-between items-center sticky top-0 bg-white z-10">
            <h2 className="text-xl font-bold">
              {editIndex !== null ? "Edit Employment" : "Add Employment"}
            </h2>
            <button onClick={close} className="cursor-pointer">
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <InputField
              label="Job Title"
              name="job_title"
              value={experience.job_title}
              onChange={handleChange}
              error={errors.job_title}
              placeholder="Ex: Frontend Developer"
            />

            <InputField
              label="Company Name"
              name="company"
              value={experience.company}
              onChange={handleChange}
              error={errors.company}
              placeholder="Ex: Infosys"
            />

            <InputField
              label="Location"
              name="location"
              value={experience.location}
              onChange={handleChange}
              error={errors.location}
              placeholder="Ex: London"
            />

            <InputField
              label="City"
              name="city"
              value={experience.city}
              onChange={handleChange}
              error={errors.city}
              placeholder="Ex: London"
            />

            <InputField
              label="Start Month"
              name="start_month"
              value={experience.start_month}
              onChange={handleChange}
              error={errors.start_month}
              type="number"
              placeholder="1-12"
            />

            <InputField
              label="Start Year"
              name="start_year"
              value={experience.start_year}
              onChange={handleChange}
              error={errors.start_year}
              type="number"
              placeholder={new Date().getFullYear() - 1}
            />

            <InputField
              label="End Month"
              name="end_month"
              value={experience.end_month ?? ""}
              onChange={handleChange}
              type="number"
              placeholder="1-12"
              disabled={experience.is_current}
            />

            <InputField
              label="End Year"
              name="end_year"
              value={experience.end_year ?? ""}
              onChange={handleChange}
              type="number"
              placeholder={new Date().getFullYear()}
              disabled={experience.is_current}
            />

            {/* Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="is_current"
                checked={experience.is_current}
                onChange={handleChange}
                className="
                  appearance-none w-5 h-5 border-2 border-gray-300 rounded-md
                  checked:bg-primary checked:border-primary relative
                  transition-all duration-200
                  after:content-['✓'] after:absolute after:text-white
                  after:text-sm after:font-bold after:-top-0.5 after:left-0.5
                  after:opacity-0 checked:after:opacity-100
                "
              />
              <span className="text-base font-medium">
                I currently work here
              </span>
            </label>

            {/* Description */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
              <label className="font-semibold text-sm lg:text-base">
                Description
              </label>
              <textarea
                name="description"
                value={experience.description}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your role and responsibilities"
                className="border border-[#D0D5DD] rounded-md p-3 focus:border-secondary outline-0 placeholder:text-sm tracking-wide"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4">
            <Button
              onClick={close}
              className="bg-white text-gray-800"
              style={{
                boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              Cancel
            </Button>

            <Button onClick={handleSave} className="bg-secondary text-white">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
