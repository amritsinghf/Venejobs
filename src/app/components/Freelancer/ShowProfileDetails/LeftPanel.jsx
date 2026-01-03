import React, { useState } from "react";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import LanguageEditModal from "../EditProfileModals/LanguageEditModal";
import ReadMoreBtn from "../../button/ReadMoreBtn";

const LeftPanel = ({ freelancerProfile }) => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);
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
      <div className="md:flex flex-col gap-10">
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <SvgIcon name="Language" size={24} />

            <h2 className="font-semibold text-lg">Language</h2>
          </div>
          <div
            className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4 cursor-pointer"
            onClick={() => setShowLanguageModal(true)}
          >
            <SvgIcon
              name="Editing"
              size={24}
              className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
            />
          </div>
        </div>

        {freelancerProfile?.languages?.map((item) => (
          <div className="flex flex-col gap-8" key={item.id}>
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-heading">{item.language}</h2>
              <p className="text-paragraph">{item.proficiency}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="text-gray-200" />

      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-heading text-2xl font-semibold">
            Education History
          </h2>
        </div>

        <div className="flex flex-col items-center md:items-start justify-between">
          {freelancerProfile?.educations?.map((item) => (
            <div className="flex flex-col gap-4 w-full" key={item.id}>
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-base lg:text-lg text-heading">
                  {item.institution_name}
                </h2>
                <div
                  className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4 cursor-pointer"
                  onClick={() => setShowEducationModal(true)}
                >
                  <SvgIcon
                    name="Editing"
                    size={24}
                    className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
                  />
                </div>
              </div>

              <ReadMoreBtn
                text={item.degree}
                font="text-paragraph text-sm lg:text-base font-medium"
                clampClass="line-clamp-6 lg:line-clamp-4"
              />
              
              <hr className="text-gray-200" />
            </div>
          ))}
        </div>
      </div>

      {showLanguageModal && (
        <LanguageEditModal
          showLanguageModal={showLanguageModal}
          setShowLanguageModal={setShowLanguageModal}
          selectedLanguages={freelancerProfile.languages}
        />
      )}

      {showEducationModal && (
        <EducationEditModal
          setShowEducationModal={setShowEducationModal}
          showEducationModal={showEducationModal}
        />
      )}
    </div>
  );
};

export default LeftPanel;
