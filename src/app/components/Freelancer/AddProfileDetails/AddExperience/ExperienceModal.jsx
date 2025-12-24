import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import React, { useEffect, useState } from "react";

const ExperienceModal = ({ close, append, update, editIndex, fields }) => {
  const [errors, setErrors] = useState({});
  const [experienceTemp, setExperienceTemp] = useState({
    job_title: "",
    company: "",
    location: "",
    city: "",
    start_month: "",
    end_month: "",
    start_year: "",
    end_year: "",
    description: "",
    is_current: false,
  });

  useEffect(() => {
    if (editIndex !== null) {
      setExperienceTemp(fields[editIndex]);
    } else {
      setExperienceTemp({
        job_title: "",
        company: "",
        location: "",
        city: "",
        start_month: "",
        end_month: "",
        start_year: "",
        end_year: "",
        description: "",
        is_current: false,
      });
    }
  }, [editIndex, fields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceTemp((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSave = () => {
    const newErrors = {};

    if (!experienceTemp.job_title) {
      newErrors.job_title = "Job Title is required";
    }
    if (!experienceTemp.company) {
      newErrors.company = "Company Name is required";
    }
    if (!experienceTemp.start_month) {
      newErrors.start_month = "Start Month is required";
    }
    if (!experienceTemp.is_current) {
      if (!experienceTemp.end_month) {
        newErrors.end_month = "End Month is required";
      }
      if (!experienceTemp.end_year) {
        newErrors.end_year = "End Year is required";
      }
    }
    if (!experienceTemp.description) {
      newErrors.description = "Description is required";
    }
    if (!experienceTemp.city) {
      newErrors.city = "City is required";
    }
    if (!experienceTemp.location) {
      newErrors.location = "Location is required";
    }
    if (!experienceTemp.start_year) {
      newErrors.start_year = "Start Year is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    if (editIndex !== null) {
      update(editIndex, experienceTemp);
    } else {
      append(experienceTemp);
    }
    close();
  };
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 pt-2">
      <div className="relative bg-white w-full max-w-[1120px] rounded-xl shadow-sm flex flex-col max-h-[100dvh] md:max-h-none overflow-y-auto">
        <div
          className="flex flex-col gap-2
        px-1 md:px-5 md:py-5"
        >
          <div className="flex justify-between items-center ">
            <h2 className="text-lg lg:text-2xl font-extrabold text-heading mb-3">
              {editIndex !== null ? "Edit Employment" : "Add Employment"}
            </h2>
            <button
              type="button"
              onClick={close}
              className="absolute right-4 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
            >
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm lg:text-lg">
                Job Title
              </label>
              <input
                name="job_title"
                value={experienceTemp.job_title}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded"
                placeholder="Ex: Senior UXUI Designer"
              />
              {errors.job_title && (
                <p className="text-red-500 text-sm">{errors.job_title}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm lg:text-lg">
                Company Name
              </label>
              <input
                name="company"
                value={experienceTemp.company}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded"
                placeholder="Ex: Venesjobs"
              />
              {errors.company && (
                <p className="text-red-500 text-sm">{errors.company}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm lg:text-lg">
                Location
              </label>
              <input
                name="location"
                value={experienceTemp.location || ""}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded"
                placeholder="Ex: Russia"
              />
              {errors.location && (
                <p className="text-red-500 text-sm">{errors.location}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm lg:text-lg">City</label>
              <input
                name="city"
                value={experienceTemp.city || ""}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded"
                placeholder="Enter City"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm lg:text-lg">
                Start Month
              </label>
              <input
                name="start_month"
                value={experienceTemp.start_month || ""}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded"
                placeholder="From Month"
              />
              {errors.start_month && (
                <p className="text-red-500 text-sm">{errors.start_month}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm lg:text-lg">
                Start Year
              </label>
              <input
                name="start_year"
                value={experienceTemp.start_year || ""}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded"
                placeholder="From Year"
              />
              {errors.start_year && (
                <p className="text-red-500 text-sm">{errors.start_year}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm lg:text-lg">
                Ended Month
              </label>
              <input
                name="end_month"
                value={experienceTemp.end_month || ""}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded"
                placeholder="Through Month"
              />
              {errors.end_month && (
                <p className="text-red-500 text-sm">{errors.end_month}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm lg:text-lg">
                Ended Year
              </label>
              <input
                name="end_year"
                value={experienceTemp.end_year || ""}
                onChange={handleChange}
                disabled={experienceTemp.is_current}
                className="border border-gray-200 p-2 rounded"
                placeholder="Through Year"
              />
              {errors.end_year && (
                <p className="text-red-500 text-sm">{errors.end_year}</p>
              )}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                name="is_current"
                checked={experienceTemp.is_current}
                onChange={handleChange}
              />
              <label>I currently work here</label>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <label className="font-semibold text-sm lg:text-lg">
                Description
              </label>
              <textarea
                name="description"
                value={experienceTemp.description || ""}
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
            <Button onClick={close} className="px-4 py-2 shadow text-paragraph font-semibold">
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="px-4 py-2 bg-secondary text-white"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
