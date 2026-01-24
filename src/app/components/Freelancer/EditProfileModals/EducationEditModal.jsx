import React, { useEffect } from "react";
import Button from "../../button/Button";
import SvgIcon from "../../Utility/SvgIcon";
import { useForm } from "react-hook-form";
import freelancerApiStore from "@/app/store/freelancerApiStore";
import useToastStore from "@/app/store/toastStore";
import useEscapeKey from "@/hooks/useEscapeKey";

const EducationEditModal = ({ setShowEducationModal, showEducationModal, education
}) => {
  const isEdit = Boolean(education);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      institution_name: "",
      degree: "",
      field_of_study: "",
      type_of_education: "",
      start_date: "",
      end_date: "",
      description: "",
    },
  });

  useEscapeKey(showEducationModal, () => {
    setShowEducationModal(false);
  });

  const { updateEducation, addEducation, freelancerEducationLoading, error } = freelancerApiStore();
  const { showSuccess, showError } = useToastStore.getState();
  const startYear = watch("start_date");

  useEffect(() => {
    if (isEdit) {
      reset({
        id: education.id,
        institution_name: education.institution_name,
        degree: education.degree,
        field_of_study: education.field_of_study,
        type_of_education: education.type_of_education,
        start_date: education.start_date
          ? new Date(education.start_date).getUTCFullYear()
          : "",
        end_date: education.end_date
          ? new Date(education.end_date).getUTCFullYear()
          : "",
        description: education.description,
      });
    } else {
      reset({
        id: "",
        institution_name: "",
        degree: "",
        field_of_study: "",
        type_of_education: "",
        start_date: "",
        end_date: "",
        description: "",
      });
    }
  }, [education, isEdit, reset]);

  const handleSave = async (data) => {
    try {
      const res = isEdit
        ? await updateEducation(data.id, data)
        : await addEducation(data);

      if (res.success) {
        showSuccess(
          isEdit
            ? "Education updated successfully"
            : "Education added successfully",
          "success"
        );
        setShowEducationModal(false);
      }
    } catch (error) {
      showError(
        error?.response?.data?.message || "Something went wrong",
        "error"
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
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
          <div className="relative flex justify-between items-center top-0 bg-white z-10 pb-2">
            <h2 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-heading">
              {isEdit ? "Edit Education" : "Add Education"}
            </h2>
            <button
              onClick={() => setShowEducationModal(false)}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>
          <form onSubmit={handleSubmit(handleSave)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Institution Name"
                name="institution_name"
                register={register}
                error={errors.institution_name}
                placeholder="E.g., University of XYZ"
              />

              <Input
                label="Degree"
                name="degree"
                register={register}
                error={errors.degree}
                placeholder="E.g., Bachelor of Computer Science"
              />

              <Input
                label="Field of Study"
                name="field_of_study"
                register={register}
                error={errors.field_of_study}
                placeholder="E.g., Computer Science"
              />

              <Input
                label="Type of Education"
                name="type_of_education"
                register={register}
                error={errors.type_of_education}
                placeholder="Bachelor’s Degree"
              />

              <Input
                label="From"
                name="start_date"
                register={register}
                error={errors.start_date}
                placeholder={new Date().getFullYear() - 3}
                type="number"
              />

              <Input
                label="End Year"
                name="end_date"
                register={register}
                error={errors.end_date}
                placeholder={new Date().getFullYear()}
                type="number"
                rules={{
                  required: "End year is required",
                  validate: (value) => {
                    if (startYear && Number(value) < Number(startYear)) {
                      return "End year cannot be less than start year";
                    }
                    return true;
                  },
                }}
              />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="font-medium lg:text-base tracking-wide">Description</label>
              <textarea
                {...register("description")}
                rows={4}
                placeholder="Describe your education, achievements, coursework..."
                className="border border-[#D0D5DD] rounded-md p-3 focus:border-secondary outline-0 placeholder:text-sm tracking-wide"
              />

              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
            </div>

            <div className="flex justify-end gap-6 mt-6">
              <Button
                onClick={() => setShowEducationModal(false)}
                className="bg-white text-gray-800"
                style={{
                  boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-secondary text-white">
                {isEdit ? "Upadate" : "Add"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Input = ({
  label,
  name,
  register,
  rules,
  error,
  placeholder,
  type = "text",
}) => (
  <div className="flex flex-col gap-2">
    <label className="font-medium lg:text-base tracking-wide">{label}</label>
    <input
      type={type}
      {...register(name, rules)}
      placeholder={placeholder}
      inputMode={type === "number" ? "numeric" : undefined}
      pattern={type === "number" ? "[0-9]*" : undefined}
      className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#D0D5DD] focus:border-secondary rounded-md focus:outline-none tracking-wide placeholder:text-sm"
    />
    {error && <p className="text-red-500 text-sm">{error.message}</p>}
  </div>
);


export default EducationEditModal;
