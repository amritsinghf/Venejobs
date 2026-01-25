import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import freelancerApiStore from "@/app/store/freelancerApiStore";
import useToastStore from "@/app/store/toastStore";
import useEscapeKey from "@/hooks/useEscapeKey";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../common/InputField";

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
      start_year: null,
      end_month: "",
      end_year: null,
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
        start_year: null,
        end_month: "",
        end_year: null,
        is_current: false,
        description: "",
      });
    }
  }, [item, isEdit, reset]);

  const { showSuccess, showError } = useToastStore.getState();
  const { updateExperience, addExperience, freelancerExperienceLoading, error } = freelancerApiStore();

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <InputField
                label="Job Title"
                name="job_title"
                register={register}
                rules={{ required: "Job title is required" }}
                error={errors?.job_title?.message}
                placeholder="Ex: Senior UXUI Designer"
              />

              <InputField
                label="Company Name"
                name="company"
                register={register}
                rules={{ required: "Company name is required" }}
                error={errors?.company?.message}
                placeholder="Ex: Venesjobs"
              />

              <InputField
                label="Location"
                name="location"
                register={register}
                rules={{ required: "Location is required" }}
                error={errors?.location?.message}
                placeholder="Ex: Russia"
              />

              <InputField
                label="City"
                name="city"
                register={register}
                rules={{ required: "City is required" }}
                error={errors?.city?.message}
                placeholder="Enter City"
              />

              <InputField
                label="Start Month"
                name="start_month"
                type="number"
                register={register}
                rules={{
                  required: "Start month is required",
                  min: { value: 1, message: "Month must be between 1 and 12" },
                  max: { value: 12, message: "Month must be between 1 and 12" },
                }}
                error={errors?.start_month?.message}
                placeholder="From Month"
              />

              <InputField
                label="Start Year"
                name="start_year"
                type="number"
                register={register}
                rules={{ required: "Start year is required" }}
                error={errors?.start_year?.message}
                placeholder="From Year"
              />

              <InputField
                label="End Month"
                name="end_month"
                type="number"
                register={register}
                rules={{
                  validate: (value) => {
                    if (isCurrent) return true;
                    if (!value) return "End month is required";
                    if (value < 1 || value > 12)
                      return "Month must be between 1 and 12";
                    return true;
                  },
                }}
                disabled={isCurrent}
                error={errors?.end_month?.message}
                placeholder="Through Month"
              />

              <InputField
                label="End Year"
                name="end_year"
                type="number"
                register={register}
                rules={{
                  validate: (endYear) => {
                    if (isCurrent) return true;

                    const endMonth = watch("end_month");
                    if (!endYear || !endMonth)
                      return "End month and year are required";

                    if (!startYear || !startMonth) return true;

                    const startDate = new Date(
                      Number(startYear),
                      Number(startMonth) - 1
                    );
                    const endDate = new Date(
                      Number(endYear),
                      Number(endMonth) - 1
                    );

                    if (endDate < startDate)
                      return "End date cannot be earlier than start date";

                    return true;
                  },
                }}
                disabled={isCurrent}
                error={errors?.end_year?.message}
                placeholder="Through Year"
              />

              {/* Checkbox (leave as-is or later make common) */}
              <div className="flex items-center gap-2 mt-2 md:col-span-2">
                <input type="checkbox" {...register("is_current")} />
                <label>I currently work here</label>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <InputField
                  label="Description"
                  name="description"
                  as="textarea"
                  rows={4}
                  register={register}
                  rules={{ required: "Description is required" }}
                  error={errors?.description?.message}
                  placeholder="Enter description..."
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button
                type="button"
                onClick={() => setExperienceModal(false)}
                style={{
                  boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                Cancel
              </Button>

              <Button type="submit" className="px-4 py-2 bg-secondary text-white">
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
