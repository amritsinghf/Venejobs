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

  const {
    freelanceLanguage,
    getLanguage,
    deleteLanguage,
    freelanceEducation,
    getEducation,
    deleteEducation,
  } = freelanceApiStore();

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
    <div className="
  flex flex-col gap-6 lg:gap-10
  pr-0 lg:pr-6
">

      {/* ===== STATS ===== */}
      <div className="flex flex-col sm:flex-row gap-8 w-full">
        <div className="flex gap-4 items-center">
          <SvgIcon name="PiggyBank" size={32} />
          <div className="flex flex-col gap-1">
            <h2 className="text-sm sm:text-base font-semibold text-heading">
              Total Earning
            </h2>
            <p className="text-sm text-paragraph">
              100k Earned
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <SvgIcon name="Brifcase" size={32} />
          <div className="flex flex-col gap-1">
            <h2 className="text-sm sm:text-base font-semibold text-heading">
              Total Jobs
            </h2>
            <p className="text-sm text-paragraph">
              100 Completed
            </p>
          </div>
        </div>
      </div>

      <hr className="text-gray-200" />

      {/* ===== LANGUAGE ===== */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <SvgIcon name="Language" size={22} />
            <h2 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-heading">
              Language
            </h2>
          </div>

          <button
            onClick={() => {
              setSelectedLanguage(null);
              setShowLanguageModal(true);
            }}
            className="text-sm sm:text-base text-secondary font-medium"
          >
            + Add
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {freelanceLanguage?.map((item, index) => (
            <div
              key={item.id}
              className="flex justify-between items-start gap-4"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-sm sm:text-base text-heading">
                  {item.language}
                </h3>
                <p className="text-sm sm:text-base text-paragraph">
                  {item.proficiency}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setSelectedLanguage({ ...item, index });
                    setShowLanguageModal(true);
                  }}
                >
                  <SvgIcon
                    name="Editing"
                    className="w-4 h-4 lg:w-5 lg:h-5 text-secondary"
                  />
                </button>

                <button
                  onClick={() => handleDelete(deleteLanguage, item.id)}
                >
                  <SvgIcon
                    name="Delete1"
                    className="w-4 h-4 lg:w-5 lg:h-5 text-red-500"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="text-gray-200" />

      {/* ===== EDUCATION ===== */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-heading">
            Education History
          </h2>

          <button
            onClick={() => {
              setSelectedEducation(null);
              setShowEducationModal(true);
            }}
            className="text-sm sm:text-base text-secondary font-medium"
          >
            + Add
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {freelanceEducation?.map((item, index) => (
            <div
              key={item.id}
              className="flex justify-between items-start gap-4"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-sm sm:text-base lg:text-lg text-heading">
                  {item.institution_name}
                </h3>
                <p className="text-sm sm:text-base text-paragraph font-normal">
                  {item.degree}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setSelectedEducation({ ...item, index });
                    setShowEducationModal(true);
                  }}
                >
                  <SvgIcon
                    name="Editing"
                    className="w-4 h-4 lg:w-5 lg:h-5 text-secondary"
                  />
                </button>

                <button
                  onClick={() => handleDelete(deleteEducation, item.id)}
                >
                  <SvgIcon
                    name="Delete1"
                    className="w-4 h-4 lg:w-5 lg:h-5 text-red-500"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MODALS ===== */}
      {showLanguageModal && (
        <LanguageEditModal
          setShowLanguageModal={setShowLanguageModal}
          showLanguageModal={showLanguageModal}
          language={selectedLanguage}
          freelanceLanguage={freelanceLanguage}
        />
      )}

      {showEducationModal && (
        <EducationEditModal
          setShowEducationModal={setShowEducationModal}
          showEducationModal={showEducationModal}
          education={selectedEducation}
        />
      )}
    </div>
  );
};

export default LeftPanel;
