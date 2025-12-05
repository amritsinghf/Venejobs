import React from "react";
import { useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";

const SkillsSelector = ({
  categoryName,
  skills_data,
  selectedItems,
  handleCheckboxChange,
  inputValue,
  handleInputChange,
  errors,
}) => {
  const { register } = useFormContext();

  const skillsRegister = register("skills", {
    required: "Please add at least 1 skill",
    onChange: (e) => handleInputChange(e),
  });

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl lg:text-2xl text-heading font-bold">
        Search skills or add your own
      </h2>

      <input
        type="text"
        placeholder="For the best results, add 3-5 skills"
        value={inputValue}
        {...skillsRegister}
        className="w-full py-3.5 px-3 text-base border border-[#D0D5DD] 
        focus:border-primary rounded-md focus:outline-none"
      />

      {errors.skills && (
        <span className="text-sm text-red-500 font-medium">
          {errors.skills.message}
        </span>
      )}

      <h2 className="text-base lg:text-lg text-heading font-medium">
        {categoryName && `Popular skills for ${categoryName}`}
      </h2>

      <div className="flex items-center flex-wrap gap-3 lg:gap-5 w-full">
        {skills_data?.map((item) => {
          const checkboxId = `skill-${item.id}`;
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                id={checkboxId}
                onChange={handleCheckboxChange}
                checked={selectedItems.includes(item.name)}
                value={item.name}
                className="sr-only peer"
              />

              <label
                htmlFor={checkboxId}
                className="border border-gray-200 flex h-[45px] items-center
                justify-center p-5 rounded-lg cursor-pointer bg-white
                text-gray-900 transition-all peer-checked:bg-primary peer-checked:text-white"
              >
                <span className="flex items-center gap-2">
                  {item.name}
                  <AddIcon
                    fontSize="small"
                    sx={{ color: selectedItems.includes(item.name) ? "#fff" : "#666" }}
                  />
                </span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSelector;
