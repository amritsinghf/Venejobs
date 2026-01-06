import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import freelanceApiStore from "@/app/store/FreelancerStore";
import useToastStore from "@/app/store/toastStore";
import useEscapeKey from "@/hooks/useEscapeKey";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ExperienceEditModal = ({
  item,
  setExperienceModal,
  showExperienceModal,
}) => {
  const isEdit = Boolean(item);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      job_title: "",
      company: "",
      location: "",
      city: "",
      start_month: "",
      start_year: "",
      end_month: "",
      end_year: "",
      is_current: false,
      description: "",
      shouldUnregister: true,
    },
  });

  useEscapeKey(showExperienceModal, () => {
    setExperienceModal(false);
  });

  useEffect(() => {
    if (isEdit) {
      reset({
        id: item.id,
        job_title: item.job_title,
        company: item.company,
        location: item.location,
        city: item.city,
        start_month: item.start_month,
        start_year: item.start_year,
        end_month: item.end_month,
        end_year: item.end_year,
        is_current: item.is_current,
        description: item.description,
      });
    } else {
      reset({
        id: "",
        job_title: "",
        company: "",
        location: "",
        city: "",
        start_month: "",
        start_year: "",
        end_month: "",
        end_year: "",
        is_current: false,
        description: "",
      });
    }
  }, [item, isEdit, reset]);

  const { showSuccess, showError } = useToastStore.getState();
  const { updateExperience, addExperience, loading, error } = freelanceApiStore();

  const handleSave = async (data) => {
    try {
      const res = isEdit
        ? await updateExperience(data.id, data)
        : await addExperience(data);

      if (res.success) {
        showSuccess(
          isEdit
            ? "Experience updated successfully"
            : "Experience added successfully",
          "success"
        );
        setExperienceModal(false);
      }
    } catch (error) {
      showError(
        error?.response?.data?.message || "Something went wrong",
        "error"
      );
    }
  };

  const isCurrent = watch("is_current");
  useEffect(() => {
    if (isCurrent) {
      setValue("end_year", null);
      setValue("end_month", null);
    }
  }, [isCurrent, setValue]);

  const startMonth = watch("start_month");
  const startYear = watch("start_year");

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 pt-2">
      <div className="relative bg-white w-full max-w-[1120px] rounded-xl shadow-sm flex flex-col max-h-[100dvh] md:max-h-none overflow-y-auto">
        <div
          className="flex flex-col gap-2
        px-1 md:px-5 md:py-5"
        >
          <div className="flex justify-between items-center ">
            <h2 className="text-lg lg:text-2xl font-extrabold text-heading mb-3">
              {isEdit ? "Edit Employment" : "Add Employment"}
            </h2>
            <button
              type="button"
              onClick={() => setExperienceModal(false)}
              className="absolute right-4 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
            >
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>

          <form onSubmit={handleSubmit(handleSave)}>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm lg:text-lg">
                  Job Title
                </label>
                <input
                  name="job_title"
                  {...register("job_title")}
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
                  {...register("company")}
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
                  {...register("location")}
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
                  {...register("city")}
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
                  {...register("start_month")}
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
                  {...register("start_year")}
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
                  type="number"
                  {...register("end_month", {
                    validate: (value) => {
                      if (isCurrent) return true;
                      return value ? true : "End month is required";
                    },
                  })}
                  disabled={isCurrent}
                  className="border border-gray-200 p-2 rounded"
                  placeholder="Through Month"
                />
                {errors.end_month && !isCurrent && (
                  <p className="text-red-500 text-sm">{errors.end_month}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm lg:text-lg">
                  End Year
                </label>

                <input
                  type="number"
                  {...register("end_year", {
                    validate: (endYear) => {
                      if (isCurrent) return true;

                      const endMonth = watch("end_month");

                      if (!endYear || !endMonth) {
                        return "End month and year are required";
                      }
                      if (!startYear || !startMonth) {
                        return true;
                      }

                      const startDate = new Date(
                        Number(startYear),
                        Number(startMonth) - 1
                      );

                      const endDate = new Date(
                        Number(endYear),
                        Number(endMonth) - 1
                      );
                      if (endDate < startDate) {
                        return "End date cannot be earlier than start date";
                      }
                      return true;
                    },
                  })}
                  disabled={isCurrent}
                  className="border border-gray-200 p-2 rounded"
                  placeholder="Through Year"
                />

                {errors.end_year && !isCurrent && (
                  <p className="text-red-500 text-sm">
                    {errors.end_year.message}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  {...register("is_current")}
                />
                <label>I currently work here</label>
              </div>
              <div className="col-span-2 flex flex-col gap-2">
                <label className="font-semibold text-sm lg:text-lg">
                  Description
                </label>
                <textarea
                  name="description"
                  {...register("description")}
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
                onClick={() => setExperienceModal(false)}
                className="px-4 py-2 shadow text-paragraph font-semibold"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-4 py-2 bg-secondary text-white"
              >
                {isEdit ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEditModal;
