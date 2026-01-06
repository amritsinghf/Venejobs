import React, { useEffect, useState } from "react";
import Button from "../../button/Button";
import SvgIcon from "../../Utility/SvgIcon";
import { useForm } from "react-hook-form";
import freelanceApiStore from "@/app/store/FreelancerStore";
import useToastStore from "@/app/store/toastStore";
import useEscapeKey from "@/hooks/useEscapeKey";

const LanguageEditModal = ({
  setShowLanguageModal,
  showLanguageModal,
  language,
}) => {
  const isEdit = Boolean(language);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      language: "",
      proficiency: "",
    },
  });

  useEscapeKey(showLanguageModal, () => {
    setShowLanguageModal(false);
  });

  const { updateLanguage, addLanguage, loading, error } = freelanceApiStore();
  const { showSuccess, showError } = useToastStore.getState();

  useEffect(() => {
    if (isEdit) {
      reset({
        id: language.id,
        language: language.language,
        proficiency: language.proficiency,
      });
    } else {
      reset({
        id: "",
        language: "",
        proficiency: "",
      });
    }
  }, [language, isEdit, reset]);

  const handleSave = async (data) => {
    try {
      const res = isEdit
        ? await updateLanguage(data.id, data)
        : await addLanguage(data);

      if (res.success) {
        showSuccess(
          isEdit
            ? "Language updated successfully"
            : "Language added successfully",
          "success"
        );
        setShowLanguageModal(false);
      }
    } catch (error) {
      showError(
        error?.response?.data?.message || "Something went wrong",
        "error"
      );
    }
  };

  const languagesData = [
    { id: 1, name: "English" },
    { id: 2, name: "Hindi" },
    { id: 3, name: "Spanish" },
    { id: 4, name: "French" },
    { id: 5, name: "German" },
    { id: 6, name: "Japanese" },
    { id: 7, name: "Chinese" },
  ];
  const proficiencyData = [
    { id: 1, name: "Basic" },
    { id: 2, name: "Conversational" },
    { id: 3, name: "Fluent" },
    { id: 4, name: "Native" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 sm:px-4 py-2">
      <div className="relative bg-white w-full max-w-[1120px] rounded-xl shadow-sm flex flex-col max-h-[95dvh] overflow-hidden">
        <div className="flex flex-col gap-5 sm:gap-6 px-3 sm:px-5 py-4 sm:py-5 overflow-y-auto">
          <form onSubmit={handleSubmit(handleSave)}>
            <div className="flex justify-between items-center sticky top-0 bg-white z-10 py-2">
              <h2 className="text-base sm:text-lg lg:text-2xl font-extrabold text-heading">
                {isEdit ? "Edit Language" : "Add Language"}
              </h2>
              <button
                onClick={() => setShowLanguageModal(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <SvgIcon name="CrossButton" size={18} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Language */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-base">Language</h3>
                <select
                  {...register("language", {
                    required: "Language is required",
                  })}
                  className="w-full py-3 pl-3 pr-10
              text-sm sm:text-base
              border border-[#D0D5DD]
              rounded-md
              focus:border-secondary focus:outline-none
              text-heading tracking-wide
              appearance-none bg-white"
                >
                  <option value="">Select language</option>
                  {languagesData.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {errors.language && (
                  <p className="text-red-500 text-sm">
                    {errors.language.message}
                  </p>
                )}
              </div>
              {/* Proficiency */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-base">Proficiency</h3>
                <select
                  {...register("proficiency", {
                    required: "Proficiency is required",
                  })}
                  className="w-full py-3 pl-3 pr-10
              text-sm sm:text-base
              border border-[#D0D5DD]
              rounded-md
              focus:border-secondary focus:outline-none
              text-heading tracking-wide
              appearance-none bg-white"
                >
                  <option value="">Select proficiency</option>
                  {proficiencyData.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {errors.proficiency && (
                  <p className="text-red-500 text-sm">
                    {errors.proficiency.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-4 sm:gap-6 mt-4 sm:mt-6 pb-2">
              <Button
                onClick={() => setShowLanguageModal(false)}
                className="bg-white text-gray-800 w-full sm:w-auto"
                style={{
                  boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                Cancel
              </Button>
              <Button className="bg-secondary text-white w-full sm:w-auto">
                {isEdit ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LanguageEditModal;
