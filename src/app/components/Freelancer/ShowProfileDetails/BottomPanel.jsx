import React, { useState } from "react";
import PaginationFreelance from "../../Pagination/PaginationFreelance";
import ExperienceEditModal from "../EditProfileModals/ExperienceEditModal";
import SvgIcon from "@/app/components/Utility/SvgIcon";

const BottomPanel = ({ freelancerProfile }) => {
  const formatMonthYear = (month, year) => {
    const date = new Date(year, month - 1);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };
  const [showExperienceModal, setExperienceModal] = useState(false);
  const [editExperience, setEditExperience] = useState(null);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl xl:text-2xl text-heading font-semibold leading-9 leading-9">
          Employment history
        </h2>
        {/* <div className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4">
          <SvgIcon
            name="Editing"
            size={24}
            className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
          />
        </div> */}
      </div>

      {freelancerProfile?.experiences.map((item, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-lg lg:text-2xl font-semibold text-heading">
                {item.job_title}
              </h2>
              <p className="font-semibold text-heading text-sm lg:text-base">
                {formatMonthYear(item.start_month, item.start_year)} {"- "}
                {formatMonthYear(item.end_month, item.end_year)}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div
                className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4 cursor-pointer"
                onClick={() => {
                  setEditExperience({ ...item, index: index });
                  setExperienceModal(true);
                }}
              >
                <SvgIcon
                  name="Editing"
                  size={24}
                  className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
                />
              </div>
              <div className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4">
                <SvgIcon
                  name="Delete1"
                  className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-paragraph">{item.description}</p>
          </div>
          <hr className="text-gray-200" />
        </div>
      ))}

      <div className="flex justify-end">
        <PaginationFreelance totalPages={5} />
      </div>

      {showExperienceModal && (
        <ExperienceEditModal
          item={editExperience}
          setExperienceModal={setExperienceModal}
          showExperienceModal={showExperienceModal}
        />
      )}
    </div>
  );
};

export default BottomPanel;
