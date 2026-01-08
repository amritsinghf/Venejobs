import React, { useState, useEffect } from "react";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import PaginationFreelance from "../../Pagination/PaginationFreelance";
import TitleEditModal from "../EditProfileModals/TitleEditModal";
import PortfolioEditModal from "../EditProfileModals/PortfolioEditModal";
import SkillsEditModal from "../EditProfileModals/SkillsEditModal";
import freelanceApiStore from "@/app/store/FreelancerStore";
import { DeleteConfirmation } from "@/app/components/common/DeleteConfirmation";
import Swal from "sweetalert2";
import RightPanelSkeleton from "../../Skeletons/RightPanelSkeleton";

const RightPanel = ({ freelancerProfile }) => {
  const [showTitleModal, setshowTitleModal] = useState(false);
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [selectedSkill, setselectedSkill] = useState(null);

  // 🔥 local loading for skeleton
  const [pageLoading, setPageLoading] = useState(true);

  const skillscss =
    "text-sm sm:text-base cursor-pointer border border-[#D0D5DD] px-4 py-2 font-medium text-paragraph rounded transition-all duration-200";

  const {
    freelanceSkills,
    getSkills,
    deleteSkill,
    freelancePortfolio,
    getPortfolio,
    deletePortfolio,
  } = freelanceApiStore();

  useEffect(() => {
    const loadData = async () => {
      setPageLoading(true);
      await Promise.all([getSkills(), getPortfolio()]);
      setPageLoading(false);
    };
    loadData();
  }, [getSkills, getPortfolio]);

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
    <div className="flex flex-col gap-10 lg:pb-10">

      {/* ===== SKELETON ===== */}
      {pageLoading ? (
        <RightPanelSkeleton />
      ) : (
        <>
          {/* ===== PROFILE HEADER ===== */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <h2 className="font-semibold text-lg sm:text-xl lg:text-[22px]">
                {freelancerProfile?.professional_title}
              </h2>

              <div className="flex gap-6 items-center">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-base sm:text-lg lg:text-xl">
                    $ {freelancerProfile?.hourly_rate} /hr
                  </p>
                  <SvgIcon
                    name="Clock"
                    className="w-4 h-4 lg:w-5 lg:h-5 text-heading"
                  />
                </div>

                <button onClick={() => setshowTitleModal(true)}>
                  <SvgIcon
                    name="Editing"
                    className="w-4 h-4 lg:w-5 lg:h-5 text-secondary"
                  />
                </button>
              </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-paragraph">
              {freelancerProfile?.overview}
            </p>
          </div>

          <hr className="text-gray-200" />

          {/* ===== PORTFOLIO ===== */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-heading">
                Portfolio
              </h2>
              <button
                onClick={() => {
                  setSelectedPortfolio(null);
                  setShowPortfolioModal(true);
                }}
                className="text-sm sm:text-base text-secondary font-medium"
              >
                + Add
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {freelancePortfolio?.map((item, index) => (
                <div key={item.id} className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-paragraph break-all">
                      {item.project_url}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setSelectedPortfolio({ ...item, index });
                        setShowPortfolioModal(true);
                      }}
                    >
                      <SvgIcon
                        name="Editing"
                        className="w-4 h-4 lg:w-5 lg:h-5 text-secondary"
                      />
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(deletePortfolio, item.id)
                      }
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

          {/* ===== WORK HISTORY (RESTORED ✅) ===== */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-heading">
              Work History
            </h2>

            <p className="text-sm sm:text-base text-heading font-medium">
              No Work History Yet
            </p>

            <hr className="text-gray-200" />
          </div>

          {/* ===== PAGINATION ===== */}
          <div className="flex justify-end">
            <PaginationFreelance totalPages={5} />
          </div>

          <hr className="text-gray-200" />

          {/* ===== SKILLS ===== */}
          <div className="flex flex-col gap-6 pb-10">
            <div className="flex justify-between items-center">
              <h2 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-heading">
                Skills
              </h2>
              <button
                onClick={() => {
                  setselectedSkill(null);
                  setShowSkillModal(true);
                }}
                className="text-sm sm:text-base text-secondary font-medium"
              >
                + Add
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {freelanceSkills?.map((skill, index) => (
                <div
                  key={skill.id}
                  className="
        flex items-center justify-between
        rounded-lg border border-gray-200
        bg-white px-4 py-3
        shadow-sm hover:shadow-md
        transition-all duration-200
      "
                >
                  {/* Skill Name */}
                  <p className="text-sm lg:text-base font-medium text-gray-800 truncate">
                    {skill.skill_name}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        setselectedSkill({ ...skill, index });
                        setShowSkillModal(true);
                      }}
                      className="rounded-md hover:bg-blue-50 transition"
                      aria-label="Edit Skill"
                    >
                      <SvgIcon
                        name="Editing"
                        className="w-4 h-4 lg:w-5 lg:h-5 text-secondary"
                      />
                    </button>

                    <button
                      onClick={() => handleDelete(deleteSkill, skill.id)}
                      className="rounded-md hover:bg-red-50 transition"
                      aria-label="Delete Skill"
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
        </>
      )}

      {/* ===== MODALS ===== */}
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
          freelanceSkills={freelanceSkills}
        />
      )}
    </div>
  );
};

export default RightPanel;
