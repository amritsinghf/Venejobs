import React, { useEffect, useState } from "react";
import Button from "../../button/Button";
import SvgIcon from "../../Utility/SvgIcon";
import { useForm } from "react-hook-form";
import freelanceApiStore from "@/app/store/FreelancerStore";
import useToastStore from "@/app/store/toastStore";
import useEscapeKey from "@/hooks/useEscapeKey";

const SkillsEditModal = ({ showSkillModal, setShowSkillModal, Selectedskill, freelanceSkills }) => {
  const isEdit = Boolean(Selectedskill);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skill: "",
    },
  });

  const { skills, allSkills, updateSkills, addSkill, loading, error } = freelanceApiStore();

  useEscapeKey(showSkillModal, () => {
    setShowSkillModal(false);
  });

  const { showSuccess, showError } = useToastStore.getState();

  useEffect(() => {
    if (showSkillModal) {
      allSkills();
    }
  }, [showSkillModal, allSkills]);

  useEffect(() => {
    if (isEdit && Selectedskill?.skill_name) {
      setValue("skill", Selectedskill.skill_name);
    }
  }, [isEdit, Selectedskill, setValue]);


  // available Skills
  const usedSkillNames = new Set(
    freelanceSkills?.map(fs => fs.skill_name)
  );
  const selectedSkillName = Selectedskill?.skill_name;
  const availableSkills = skills?.filter(s => {
    if (isEdit && s.name === selectedSkillName) {
      return true;
    }
    return !usedSkillNames.has(s.name);
  });


  // ADD and UPDATE
  const handleSave = async (data) => {
    if (!data.skill) {
      showError("Please select a skill");
      return;
    }
    try {
      let res;
      if (isEdit) {
        res = await updateSkills(Selectedskill.id, { skill_name: data.skill });
      } else {
        res = await addSkill({
          skill_name: data.skill,
        });
      }
      if (res?.success) {
        showSuccess(res.message || "Skill saved successfully", "success");
        setShowSkillModal(false);
      }
    } catch (error) {
      showError(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 pt-2">
      <div className="relative bg-white w-full max-w-[1120px] rounded-xl shadow-sm h-[600px] flex flex-col">
        <div className="px-4 py-6 md:px-6 md:py-8 flex flex-col gap-6">
          <div className="relative flex justify-between items-center top-0 bg-white z-10 pb-2">
            <h2 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-heading text-heading">
              {isEdit ? "Edit Skills" : "Add Skills"}
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
                <h3 className="font-medium lg:text-base tracking-wide">Skills</h3>
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
                      {availableSkills.map((item) => {
                        const selectedSkill = watch("skill") === item.name;
                        return (
                          <div key={item.id}>
                            <input
                              type="radio"
                              id={`skill-${item.id}`}
                              value={item.name}
                              {...register("skill", {
                                required: "Please select a skill",
                              })}
                              className="sr-only peer"
                            />

                            <label
                              htmlFor={`skill-${item.id}`}
                              className={`flex items-center justify-center py-3 px-4 rounded-lg cursor-pointer border transition-all
                                   ${selectedSkill ? "bg-secondary text-white border-secondary" : "border-[#D0D5DD]"}`}>
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
                  style={{ boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.08)", }}
                  onClick={() => setShowSkillModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="px-4 py-2 bg-secondary text-white rounded"
                >
                  {isEdit ? "Upadate" : "Add"}
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
