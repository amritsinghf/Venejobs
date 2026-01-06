import React from "react";
import { useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import SkillsSkeleton from "../../Skeletons/SkillsSkeleton";

const SkillsSelector = ({
  categoryName,
  skills_data,
  selectedItems,
  handleCheckboxChange,
  inputValue,
  handleInputChange,
  errors,
  loading,
}) => {

  const { register } = useFormContext();

  // RHF register for input
  const skillsRegister = register("skills", {
    onChange: (e) => handleInputChange(e),
  });

  return (
    <div className="flex flex-col gap-4">
      {/* TITLE */}
      <h2 className="text-xl xl:text-2xl text-heading font-semibold leading-9">
        Search skills or add your own
      </h2>

      {/* INPUT */}
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="For the best results, add 3-5 skills"
          value={inputValue}
          {...skillsRegister}
          className="w-full py-3.5 px-3 text-sm lg:text-base
                     border border-[#D0D5DD]
                     focus:border-primary rounded-md
                     focus:outline-none text-heading
                     tracking-wide placeholder:text-sm"
        />

        {errors.skills && (
          <span className="text-sm text-red-500 font-medium">
            {errors.skills.message}
          </span>
        )}
      </div>

      {/* CATEGORY TITLE */}
      <h2 className="text-base xl:text-lg text-heading font-medium">
        {categoryName && `Popular skills for ${categoryName}`}
      </h2>

      {/* SKILLS / SKELETON */}
      <div
        className="flex items-center flex-wrap gap-3 lg:gap-5 w-full
                   transition-all duration-500 ease-out"
      >
        {loading ? (
          <SkillsSkeleton />
        ) : (
          skills_data?.map((item) => {
            const checkboxId = `skill-${item.id}`;

            return (
              <div key={item.id}>
                <input
                  type="checkbox"
                  id={checkboxId}
                  value={item.name}
                  checked={selectedItems.includes(item.name)}
                  onChange={handleCheckboxChange}
                  className="sr-only peer"
                />

                <label
                  htmlFor={checkboxId}
                  className="flex py-3 px-4 items-center justify-center
                             rounded-lg cursor-pointer
                             border border-[#D0D5DD]
                             transition-all
                             peer-checked:bg-primary
                             peer-checked:text-white"
                >
                  <span className="flex items-center gap-2 text-sm lg:text-base">
                    {item.name}
                    <AddIcon
                      fontSize="small"
                      sx={{
                        color: selectedItems.includes(item.name)
                          ? "#fff"
                          : "#666",
                      }}
                    />
                  </span>
                </label>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SkillsSelector;
