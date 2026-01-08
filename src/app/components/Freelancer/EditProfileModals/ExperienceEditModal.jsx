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
      <div className="relative bg-white w-full max-w-[1120px] rounded-xl shadow-sm flex flex-col max-h-dvh md:max-h-none overflow-y-auto">
        <div className="px-4 py-6 md:px-6 md:py-8 flex flex-col gap-6">
          <div className="relative flex justify-between items-center top-0 bg-white z-10 pb-2">
            <h2 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-heading">
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
                <label className="font-medium lg:text-base tracking-wide">
                  Job Title
                </label>
                <input
                  name="job_title"
                  {...register("job_title")}
                  className=" w-full py-3.5 px-3 text-sm lg:text-base rounded-md tracking-wide placeholder:text-sm border transition-all duration-200 focus:outline-none text-black bg-white border-[#D0D5DD] focus:border-secondary  "
                  placeholder="Ex: Senior UXUI Designer"
                />
                {errors.job_title && (
                  <p className="text-red-500 text-sm">{errors.job_title}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium lg:text-base tracking-wide">
                  Company Name
                </label>
                <input
                  name="company"
                  {...register("company")}
                  className=" w-full py-3.5 px-3 text-sm lg:text-base rounded-md tracking-wide placeholder:text-sm border transition-all duration-200 focus:outline-none bg-white text-black border-[#D0D5DD] focus:border-secondary  "
                  placeholder="Ex: Venesjobs"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm">{errors.company}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium lg:text-base tracking-wide">
                  Location
                </label>
                <input
                  name="location"
                  {...register("location")}
                  className=" w-full py-3.5 px-3 text-sm lg:text-base rounded-md tracking-wide placeholder:text-sm border transition-all duration-200 focus:outline-none bg-white text-black border-[#D0D5DD] focus:border-secondary  "
                  placeholder="Ex: Russia"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm">{errors.location}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium lg:text-base tracking-wide">City</label>
                <input
                  name="city"
                  {...register("city")}
                  className=" w-full py-3.5 px-3 text-sm lg:text-base rounded-md tracking-wide placeholder:text-sm border transition-all duration-200 focus:outline-none bg-white text-black border-[#D0D5DD] focus:border-secondary  "
                  placeholder="Enter City"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>
              {/* <div className="flex flex-col gap-2">
                <label className="font-medium lg:text-base tracking-wide">
                  Start Month
                </label>
                <input
                  name="start_month"
                  {...register("start_month")}
                  className=" w-full py-3.5 px-3 text-sm lg:text-base rounded-md tracking-wide placeholder:text-sm border transition-all duration-200 focus:outline-none bg-white text-heading border-[#D0D5DD] focus:border-secondary  "
                  placeholder="From Month"
                />
                {errors.start_month && (
                  <p className="text-red-500 text-sm">{errors.start_month}</p>
                )}
              </div> */}
              <div className="flex flex-col gap-2">
                <label className="font-medium lg:text-base tracking-wide">
                  Start Month
                </label>

                <input
                  type="number"
                  {...register("start_month", {
                    required: "Start month is required",
                    min: {
                      value: 1,
                      message: "Month must be between 1 and 12",
                    },
                    max: {
                      value: 12,
                      message: "Month must be between 1 and 12",
                    },
                    valueAsNumber: true,
                  })}
                  className="w-full py-3.5 px-3 text-sm lg:text-base rounded-md tracking-wide placeholder:text-sm border transition-all duration-200 focus:outline-none bg-white text-black border-[#D0D5DD] focus:border-secondary"
                  placeholder="From Month"
                />

                {errors.start_month?.message && (
                  <p className="text-red-500 text-sm">
                    {errors.start_month.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium lg:text-base tracking-wide">
                  Start Year
                </label>
                <input
                  name="start_year"
                  {...register("start_year")}
                  className=" w-full py-3.5 px-3 text-sm lg:text-base rounded-md tracking-wide placeholder:text-sm border transition-all duration-200 focus:outline-none bg-white text-black border-[#D0D5DD] focus:border-secondary  "
                  placeholder="From Year"
                />
                {errors.start_year && (
                  <p className="text-red-500 text-sm">{errors.start_year}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium lg:text-base tracking-wide">
                  Ended Month
                </label>
                <input
                  type="number"
                  {...register("end_month", {
                    validate: (value) => {
                      if (isCurrent) return true;

                      if (!value) return "End month is required";

                      if (value < 1 || value > 12)
                        return "Month must be between 1 and 12";

                      return true;
                    },
                    valueAsNumber: true,
                  })}
                  disabled={isCurrent}
                  className="w-full py-3.5 px-3 text-sm lg:text-base rounded-md tracking-wide placeholder:text-sm border transition-all duration-200 focus:outline-none bg-white text-black border-[#D0D5DD] focus:border-secondary"
                  placeholder="Through Month"
                />

                {errors.end_month?.message && !isCurrent && (
                  <p className="text-red-500 text-sm">
                    {errors.end_month.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium lg:text-base tracking-wide">
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
                  className=" w-full py-3.5 px-3 text-sm lg:text-base rounded-md tracking-wide placeholder:text-sm border transition-all duration-200 focus:outline-none bg-white text-black border-[#D0D5DD] focus:border-secondary  "
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
                <label className="font-medium lg:text-base tracking-wide">
                  Description
                </label>
                <textarea
                  name="description"
                  {...register("description")}
                  rows={4}
                  className=" w-full py-3.5 px-3 text-sm lg:text-base rounded-md tracking-wide placeholder:text-sm border transition-all duration-200 focus:outline-none bg-white text-black border-[#D0D5DD] focus:border-secondary  "
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
                style={{ boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.08)", }}
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
