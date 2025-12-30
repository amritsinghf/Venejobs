import React, { useEffect } from "react";
import Button from "../../button/Button";
import SvgIcon from "../../Utility/SvgIcon";
import { useForm } from "react-hook-form";
import freelanceApiStore from "@/app/store/FreelancerStore";
import useToastStore from "@/app/store/toastStore";
import useEscapeKey from "@/hooks/useEscapeKey";

const EducationEditModal = ({setShowEducationModal,showEducationModal
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEscapeKey(showEducationModal, () => {
    setShowEducationModal(false);
  });

//   const { updatePersonalDetails, loading, error } = freelanceApiStore();
  const { showSuccess, showError } = useToastStore.getState();

//   const handleSave = async (data) => {
//     try {
//       const res = await updatePersonalDetails(data);
//       if (res.success) {
//         showSuccess(res.message, "success");
//       }
//       console.log(res);
//     } catch (error) {
//       showError(error.response.data.message, "error");
//     }
//   };

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
          <div className="flex justify-between items-center sticky top-0 bg-white z-10">
            <h2 className="text-lg lg:text-2xl font-extrabold text-heading">
             Edit Education
            </h2>
            <button
              onClick={() => setShowEducationModal(false)}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <Input
              label="Institution Name"
              name="institution_name"
            //   value={education.institution_name}
            //   onChange={handleChange}
            //   error={errors.institution_name}
              placeholder="E.g., University of XYZ"
            />

            <Input
              label="Degree"
              name="degree"
            //   value={education.degree}
            //   onChange={handleChange}
            //   error={errors.degree}
              placeholder="E.g., Bachelor of Computer Science"
            />

            <Input
              label="Field of Study"
              name="field_of_study"
            //   value={education.field_of_study}
            //   onChange={handleChange}
            //   error={errors.field_of_study}
              placeholder="E.g., Computer Science"
            />

            <Input
              label="Type of Education"
              name="type_of_education"
            //   value={education.type_of_education}
            //   onChange={handleChange}
            //   error={errors.type_of_education}
              placeholder="Bachelor’s Degree"
            />

            <Input
              label="Start Year"
              name="start_date"
            //   value={education.start_date}
            //   onChange={handleChange}
            //   error={errors.start_date}
              placeholder={new Date().getFullYear() - 3}
              type="number"
            />

            <Input
              label="End Year"
              name="end_date"
            //   value={education.end_date}
            //   onChange={handleChange}
            //   error={errors.end_date}
              placeholder={new Date().getFullYear()}
              type="number"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Description</label>
            <textarea
              name="description"
            //   value={education.description}
            //   onChange={handleChange}
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
              onClick={() => setshowForm(false)}
              className="bg-white text-gray-800"
              style={{
                boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              Cancel
            </Button>
            <Button className="bg-secondary text-white">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Input = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}) => (
  <div className="flex flex-col gap-2">
    <label className="font-medium lg:text-base tracking-wide">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      inputMode={type === "number" ? "numeric" : undefined}
      pattern={type === "number" ? "[0-9]*" : undefined}
      className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#D0D5DD] focus:border-secondary rounded-md focus:outline-none tracking-wide placeholder:text-sm"
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default EducationEditModal;
