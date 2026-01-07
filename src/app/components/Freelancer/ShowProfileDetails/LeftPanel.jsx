import React, { useState, useEffect } from "react";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import LanguageEditModal from "../EditProfileModals/LanguageEditModal";
import EducationEditModal from "@/app/components/Freelancer/EditProfileModals/EducationEditModal";
import freelanceApiStore from "@/app/store/FreelancerStore";
import Swal from "sweetalert2";
import { DeleteConfirmation } from "@/app/components/common/DeleteConfirmation";

const LeftPanel = () => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const { freelanceLanguage, getLanguage, deleteLanguage, freelanceEducation, getEducation, deleteEducation } = freelanceApiStore();

  useEffect(() => {
    getLanguage();
    getEducation();
  }, [getLanguage, getEducation]);

  const handleDelete = async (deleteFn, id) => {
    const isConfirmed = await DeleteConfirmation();
    if (!isConfirmed) return;

    try {
      const res = await deleteFn(id);

      if (res?.success) {
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: res.message || "Deleted successfully",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error?.response?.data?.message ||
          "Something went wrong",
      });
    }
  };

  return (
    <div className="flex flex-col gap-10 lg:border-r border-gray-200 md:pr-8">
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
        <div className="md:flex flex-col gap-6">
          {freelanceLanguage?.map((item, index) => (
            <div className="flex flex-row gap-8 justify-between" key={item.id}>
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-lg text-heading">{item.language}</h2>
                <p className="text-paragraph">{item.proficiency}</p>
              </div>
              <div className="flex items-center gap-5 justify-between">
                <div
                  className="cursor-pointer"
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
                  className="cursor-pointer"
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
        <div className="md:flex flex-col gap-6">
          {freelanceEducation?.map((item, index) => (
            < div className="flex flex-row gap-8 justify-between" key={item.id} >
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-base lg:text-lg text-heading">
                  {item.institution_name}
                </h2>
                <p className="text-paragraph text-sm lg:text-base font-medium">{item.degree}</p>
              </div>
              <div className="flex items-center gap-5 justify-between">
                <div
                  className="cursor-pointer"
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
                  className="cursor-pointer"
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
          freelanceLanguage={freelanceLanguage}
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
