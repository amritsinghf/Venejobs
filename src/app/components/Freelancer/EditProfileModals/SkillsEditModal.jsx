import React, { useEffect, useState } from "react";
import Button from "../../button/Button";
import SvgIcon from "../../Utility/SvgIcon";
import { useForm } from "react-hook-form";
import freelanceApiStore from "@/app/store/FreelancerStore";
import useToastStore from "@/app/store/toastStore";
import useEscapeKey from "@/hooks/useEscapeKey";
import AddIcon from "@mui/icons-material/Add";

const SkillsEditModal = ({ showSkillModal, setShowSkillModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { skills, getSkills, updateSkills, loading, error } = freelanceApiStore();

  useEscapeKey(showSkillModal, () => {
    setShowSkillModal(false);
  });

  const { showSuccess, showError } = useToastStore.getState();

  useEffect(() => {
    if (showSkillModal) {
      getSkills();
    }
  }, [showSkillModal, getSkills]);

  const handleSave = async (data) => {
    const payload = {
      skills: data.skills.map((skill) => ({
        name: skill,
      })),
    };
    try {
      const res = await updateSkills(payload);
      if (res.success) {
        showSuccess(res.message, "success");
        setShowSkillModal(false);
      }
    } catch (error) {
      showError(error.response.data.message, "error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 pt-2">
      <div className="relative bg-white w-full max-w-[1120px] rounded-xl shadow-sm h-[600px] flex flex-col">
        <div className="flex flex-col gap-5 sm:gap-6 px-3 sm:px-5 py-4 sm:py-5 overflow-y-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-lg lg:text-2xl font-extrabold leading-tight text-heading mb-3">
              Edit Skills
            </h2>
            <button
              type="button"
              onClick={() => setShowSkillModal(false)}
              className="absolute right-4 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>

          <div className="flex flex-col justify-between h-120">
            <form onSubmit={handleSubmit(handleSave)}>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-base">Skills</h3>
                <div
                  className={`
                    flex items-center flex-wrap gap-3 lg:gap-5 w-full
                    transition-all duration-500 ease-out
                    ${skills?.length
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                    }
                    `}
                >
                  {loading && (
                    <p className="text-sm text-gray-500">Loading skills...</p>
                  )}

                  {!loading && error && (
                    <p className="text-sm text-red-500">
                      Failed to load skills
                    </p>
                  )}

                  {!loading && skills?.length > 0 && (
                    <div className="flex items-center flex-wrap gap-3 lg:gap-5 w-full">
                      {skills.map((item) => {
                        const checkboxId = `skill-${item.id}`;
                        return (
                          <div key={item.id}>
                            <input
                              type="checkbox"
                              id={checkboxId}
                              value={item.name}
                              {...register("skills", {
                                validate: (value) =>
                                  value.length > 0 || "Please select at least one skill",
                              })}
                              className="sr-only peer"
                            />

                            <label
                              htmlFor={checkboxId}
                              className="flex flex-col py-3 px-4 items-center justify-center rounded-lg cursor-pointer border border-[#D0D5DD] transition-all peer-checked:bg-secondary peer-checked:text-white"
                            >
                              <span className="text-sm lg:text-base">
                                {item.name}
                              </span>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  )}

                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <Button
                  type="button"
                  className="px-4 py-2 shadow text-paragraph font-semibold"
                  onClick={() => setShowSkillModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="px-4 py-2 bg-secondary text-white rounded"
                >
                  Edit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsEditModal;
