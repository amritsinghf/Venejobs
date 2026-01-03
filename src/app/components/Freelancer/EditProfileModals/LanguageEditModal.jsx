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
  selectedLanguages,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEscapeKey(showLanguageModal, () => {
    setShowLanguageModal(false);
  });

  const { showSuccess, showError } = useToastStore.getState();

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

  useEffect(() => {
    console.log(selectedLanguages);
    reset(selectedLanguages);
  }, [selectedLanguages, reset]);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 sm:px-4 py-2">
      <div className="relative bg-white w-full max-w-[1120px] rounded-xl shadow-sm flex flex-col max-h-[95dvh] overflow-hidden">
        <div className="flex flex-col gap-5 sm:gap-6 px-3 sm:px-5 py-4 sm:py-5 overflow-y-auto">
          <div className="flex justify-between items-center sticky top-0 bg-white z-10 py-2">
            <h2 className="text-base sm:text-lg lg:text-2xl font-extrabold text-heading">
              Edit Language
            </h2>
            <button
              onClick={() => setShowLanguageModal(false)}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>

          {selectedLanguages.map((item, index) => {
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-4 sm:gap-y-6"
              >
                <select
                  name="language"
                  {...register(`${index}.language`, { required: true })}
                  className="
              w-full py-3 pl-3 pr-10
              text-sm sm:text-base
              border border-[#D0D5DD]
              rounded-md
              focus:border-secondary focus:outline-none
              text-heading tracking-wide
              appearance-none bg-white
            "
                >
                  <option value="">Select language</option>
                  {languagesData.map((item) => (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>

                <select
                  name="proficiencylevel"
                  {...register("proficiencylevel", { required: true })}
                  className="
              w-full py-3 pl-3 pr-10
              text-sm sm:text-base
              border border-[#D0D5DD]
              rounded-md
              focus:border-secondary focus:outline-none
              text-heading tracking-wide
              appearance-none bg-white
            "
                >
                  <option value="">Select Proficiency Level</option>
                  {proficiencyData.map((item) => (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}

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
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageEditModal;
