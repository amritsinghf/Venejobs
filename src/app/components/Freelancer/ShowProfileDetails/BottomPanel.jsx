import React, { useState, useEffect } from "react";
import PaginationFreelance from "../../Pagination/PaginationFreelance";
import ExperienceEditModal from "../EditProfileModals/ExperienceEditModal";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import freelanceApiStore from "@/app/store/FreelancerStore";
import { DeleteConfirmation } from "@/app/components/common/DeleteConfirmation";
import Swal from "sweetalert2";

const SkeletonItem = () => (
  <div className="flex flex-col gap-4 animate-pulse">
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-3 w-full">
        <div className="h-4 sm:h-5 w-1/3 bg-gray-200 rounded" />
        <div className="h-3 sm:h-4 w-1/4 bg-gray-200 rounded" />
      </div>
      <div className="flex gap-3">
        <div className="h-4 w-4 bg-gray-200 rounded-full" />
        <div className="h-4 w-4 bg-gray-200 rounded-full" />
      </div>
    </div>
    <div className="h-3 sm:h-4 w-full bg-gray-200 rounded" />
    <div className="h-3 sm:h-4 w-5/6 bg-gray-200 rounded" />
    <hr className="text-gray-200" />
  </div>
);

const BottomPanel = () => {
  const [showExperienceModal, setExperienceModal] = useState(false);
  const [editExperience, setEditExperience] = useState(null);

  const {
    freelanceExperience,
    getExperience,
    deleteExperience,
    loading,
  } = freelanceApiStore();

  useEffect(() => {
    getExperience();
  }, [getExperience]);

  const formatMonthYear = (month, year) => {
    const date = new Date(year, month - 1);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

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
    <div className="flex flex-col gap-10">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-heading">
          Employment history
        </h2>

        <button
          onClick={() => {
            setEditExperience(null);
            setExperienceModal(true);
          }}
          className="text-sm sm:text-base text-secondary font-medium"
        >
          + Add
        </button>
      </div>

      {/* ===== CONTENT / SKELETON ===== */}
      {loading ? (
        <div className="flex flex-col gap-6">
          {[...Array(3)].map((_, i) => (
            <SkeletonItem key={i} />
          ))}
        </div>
      ) : (
        freelanceExperience?.map((item, index) => (
          <div key={item.id} className="flex flex-col gap-4">
            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base sm:text-lg lg:text-[20px] font-medium text-heading">
                  {item.job_title}
                </h3>

                <p className="text-sm sm:text-base text-heading font-medium">
                  {formatMonthYear(item.start_month, item.start_year)} –{" "}
                  {formatMonthYear(item.end_month, item.end_year)}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setEditExperience({ ...item, index });
                    setExperienceModal(true);
                  }}
                >
                  <SvgIcon
                    name="Editing"
                    className="w-4 h-4 lg:w-5 lg:h-5 text-secondary"
                  />
                </button>

                <button
                  onClick={() =>
                    handleDelete(deleteExperience, item.id)
                  }
                >
                  <SvgIcon
                    name="Delete1"
                    className="w-4 h-4 lg:w-5 lg:h-5 text-red-500"
                  />
                </button>
              </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-paragraph">
              {item.description}
            </p>

            <hr className="text-gray-200" />
          </div>
        ))
      )}

      {/* ===== PAGINATION ===== */}
      <div className="flex justify-end">
        <PaginationFreelance totalPages={5} />
      </div>

      {/* ===== MODAL ===== */}
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
