import React, { useState } from "react";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import LanguageEditModal from "../EditProfileModals/LanguageEditModal";
import EducationEditModal from "@/app/components/Freelancer/EditProfileModals/EducationEditModal";
import useToastStore from "@/app/store/toastStore";
import freelanceApiStore from "@/app/store/FreelancerStore";

const LeftPanel = ({ freelancerProfile }) => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const { deleteLanguage, deleteEducation } = freelanceApiStore();
  const { showSuccess, showError } = useToastStore.getState();

  const handleDelete = async (deleteFn, id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      const res = await deleteFn(id);
      if (res?.success) {
        showSuccess(res.message || "Deleted successfully", "success");
      }
    } catch (error) {
      showError(
        error?.response?.data?.message || "Something went wrong",
        "error"
      );
    }
  };

  return (
    <div className="flex flex-col gap-10 sm:gap-[60px]  lg:border-r border-gray-200 md:pr-8">
      <div className="flex gap-12 w-full ">
        <div className="flex gap-6 items-center">
          <SvgIcon name="PiggyBank" size={32} />
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-heading">
              Total Earning
            </h2>
            <p className="text-paragraph text-sm">100k Earned</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <SvgIcon name="Brifcase" size={32} />
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-heading">
              Total Earning
            </h2>
            <p className="text-paragraph text-sm">100k Earned</p>
          </div>
        </div>
      </div>
      <hr className="text-gray-200" />
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <SvgIcon name="Language" size={24} />
            <h2 className="font-semibold text-lg">Language</h2>
          </div>
          <button
            onClick={() => {
              setSelectedLanguage(null);
              setShowLanguageModal(true);
            }}
            className="text-secondary font-medium cursor-pointer"
          >
            + Add
          </button>
        </div>
        <div className="md:flex flex-col gap-10">
          {freelancerProfile?.languages?.map((item, index) => (
            <div className="flex flex-row gap-8 justify-between" key={item.id}>
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-lg text-heading">{item.language}</h2>
                <p className="text-paragraph">{item.proficiency}</p>
              </div>
              <div className="flex items-center gap-4 justify-between">
                <div
                  className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4 cursor-pointer"
                  onClick={() => {
                    setSelectedLanguage({ ...item, index });
                    setShowLanguageModal(true);
                  }}
                >
                  <SvgIcon
                    name="Editing"
                    size={24}
                    className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
                  />
                </div>
                <div
                  className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4 cursor-pointer"
                  onClick={() => handleDelete(deleteLanguage, item.id)}
                >
                  <SvgIcon
                    name="Delete1"
                    className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-gray-200" />

      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-heading text-2xl font-semibold">
              Education History
            </h2>
          </div>
          <button
            onClick={() => {
              setSelectedEducation(null);
              setShowEducationModal(true);
            }}
            className="text-secondary font-medium cursor-pointer"
          >
            + Add
          </button>
        </div>
        <div className="md:flex flex-col gap-10">
          {freelancerProfile?.educations?.map((item, index) => (
            < div className="flex flex-row gap-8 justify-between" key={item.id} >
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-base lg:text-lg text-heading">
                  {item.institution_name}
                </h2>
                <p className="text-paragraph text-sm lg:text-base font-medium">{item.degree}</p>
              </div>
              <div className="flex items-center gap-4 justify-between">
                <div
                  className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4 cursor-pointer"
                  onClick={() => {
                    setSelectedEducation({ ...item, index });
                    setShowEducationModal(true)
                  }}
                >
                  <SvgIcon
                    name="Editing"
                    size={24}
                    className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
                  />
                </div>
                <div
                  className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4 cursor-pointer"
                  onClick={() => handleDelete(deleteEducation, item.id)}
                >
                  <SvgIcon
                    name="Delete1"
                    className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showLanguageModal && (
        <LanguageEditModal
          setShowLanguageModal={setShowLanguageModal}
          showLanguageModal={showLanguageModal}
          language={selectedLanguage}
        />
      )}

      {
        showEducationModal && (
          <EducationEditModal
            setShowEducationModal={setShowEducationModal}
            showEducationModal={showEducationModal}
            education={selectedEducation}
          />
        )
      }
    </div >
  );
};

export default LeftPanel;
