import React, { useState } from "react";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import PaginationFreelance from "../../Pagination/PaginationFreelance";
import TitleEditModal from "../EditProfileModals/TitleEditModal";
import PortfolioEditModal from "../EditProfileModals/PortfolioEditModal";
import SkillsEditModal from "../EditProfileModals/SkillsEditModal";
import freelanceApiStore from "@/app/store/FreelancerStore";
import useToastStore from "@/app/store/toastStore";

const RightPanel = ({ freelancerProfile }) => {
  const formatMonthYear = (month, year) => {
    const date = new Date(year, month - 1);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const [showTitleModal, setshowTitleModal] = useState(false);
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [selectedSkill, setselectedSkill] = useState(false);

  const skillscss =
    "text-sm lg:text-base cursor-pointer border border-gray-200 relative overflow-hidden px-4 py-2 font-medium text-paragraph rounded transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:bg-gray-200 before:-translate-x-full before:transition-transform before:duration-300 before:-z-10 hover:before:translate-x-0 z-10";

  const { deletePortfolio, deleteSkill } = freelanceApiStore();
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
    <div className="flex flex-col gap-10 xl:w-[900px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
          <h2 className="font-semibold text-lg lg:text-2xl">
            {freelancerProfile?.professional_title}
          </h2>

          <div className="flex gap-10 items-center">
            <div className="flex items-center gap-3">
              <p className="font-semibold text-base lg:text-2xl">
                $ {freelancerProfile?.hourly_rate} /hr{" "}
              </p>
              <SvgIcon
                name="Clock"
                className="w-[18px] h-[18px] lg:w-5 lg:h-5 text-heading"
              />
            </div>
            <div
              className="shadow rounded-full px-1 py-1 lg:px-2 lg:py-2 cursor-pointer"
              onClick={() => setshowTitleModal(true)}
            >
              <SvgIcon
                name="Editing"
                size={24}
                className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-paragraph text-base">
            {freelancerProfile?.overview}
          </p>
        </div>
      </div>
      <hr className="text-gray-200" />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex items-center justify-between py-4">
            <h2 className="text-2xl text-heading font-semibold">Portfolio</h2>
          </div>
          <button
            onClick={() => {
              setSelectedPortfolio(null);
              setShowPortfolioModal(true);
            }}
            className="text-secondary font-medium cursor-pointer"
          >
            + Add
          </button>
        </div>
        <div className="flex flex-col flex-wrap lg:flex-nowrap gap-12">
          {freelancerProfile?.portfolios?.map((item, index) => (
            <div className="flex flex-row justify-between" key={item.id}>
              <div className="flex flex-col gap-6">
                <h3 className="font-semibold ">{item.title}</h3>
                <h3 className="font-semibold ">{item.project_url}</h3>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4 cursor-pointer"
                  onClick={() => {
                    setSelectedPortfolio({ ...item, index: index });
                    setShowPortfolioModal(true);
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
                  onClick={() => handleDelete(deletePortfolio, item.id)}
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
        <div>
          <h2 className="text-heading text-2xl font-semibold">Work History</h2>
        </div>

        <div className="flex flex-col items-center md:items-start justify-between">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-base lg:text-lg text-heading">
                No Work History Yet
              </h2>
              <div className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4 cursor-pointer">
                <SvgIcon
                  name="Editing"
                  size={24}
                  className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row  lg:items-center gap-8">
              <p className="font-semibold text-heading">-</p>
            </div>
            <hr className="text-gray-200" />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <PaginationFreelance totalPages={5} />
      </div>
      <hr className="text-gray-200" />

      <div className="flex flex-col gap-6 pb-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">Skills</h2>
          </div>
          <button
            onClick={() => {
              setselectedSkill(null);
              setShowSkillModal(true);
            }}
            className="text-secondary font-medium cursor-pointer"
          >
            + Add
          </button>
        </div>
        <div className="flex gap-6 flex-wrap">
          {freelancerProfile?.skills?.map((skill, index) => (
            < div className="flex flex-row gap-8 justify-between" key={skill.id} >
              <p className={skillscss}>
                {skill.skill_name}
              </p>
              <div className="flex items-center gap-4 justify-between">
                <div
                  className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4 cursor-pointer"
                  onClick={() => {
                    setselectedSkill({ ...item, index });
                    setShowSkillModal(true)
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
                  onClick={() => handleDelete(deleteSkill, skill.id)}
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

      {showTitleModal && (
        <TitleEditModal
          setshowTitleModal={setshowTitleModal}
          freelancerProfile={freelancerProfile}
          showTitleModal={showTitleModal}
        />
      )}

      {showPortfolioModal && (
        <PortfolioEditModal
          setShowPortfolioModal={setShowPortfolioModal}
          showPortfolioModal={showPortfolioModal}
          portfolio={selectedPortfolio}
        />
      )}

      {showSkillModal && (
        <SkillsEditModal
          showSkillModal={showSkillModal}
          setShowSkillModal={setShowSkillModal}
          Selectedskill={selectedSkill}
        />
      )}
    </div>
  );
};

export default RightPanel;
