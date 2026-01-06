import { useEffect, useState, useCallback } from "react";
import { useFormContext } from "react-hook-form";
import jobApiStore from "@/app/store/jobStore";
import CategorySelector from "./CategorySelector";
import SkillsSelector from "./SkillsSelector";
import StepperNumber from "../StepperNumber";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import Button from "@/app/components/button/Button";

const CategorySkillsPage = ({ nextStep, prevStep, currstep }) => {
  const {
    watch,
    trigger,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const selectedCategory = watch("category");

  const [categoryName, setCategoryName] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);

  const {
    category_data,
    skills_data,
    getCategories,
    getSkillsByCategory,
    categoryLoading,
    skillsLoading,
  } = jobApiStore();

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategoryChange = useCallback(
    async (categoryCode, name) => {
      setCategoryName(name || "");
      setSelectedItems([]);
      setInputValue("");
      setValue("skills", []);

      if (!categoryCode) return;

      await getSkillsByCategory(categoryCode);
    },
    [getSkillsByCategory, setValue]
  );

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setSelectedItems((prev) => {
      const updated = checked
        ? [...new Set([...prev, value])]
        : prev.filter((item) => item !== value);

      setInputValue(updated.join(", "));
      return updated;
    });
  };

  const handleInputChange = (e) => {
    const typed = e.target.value
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);

    setInputValue(e.target.value);
    setSelectedItems(typed);
  };

  useEffect(() => {
    setValue(
      "skills",
      selectedItems.map((skill) => ({
        name: skill,
        level: "Intermediate",
      })),
      { shouldValidate: true }
    );
  }, [selectedItems, setValue]);

  const handleNext = async () => {
    setButtonLoading(true);

    try {
      if (!selectedItems.length) {
        setError("skills", {
          type: "manual",
          message: "Please add at least 1 skill",
        });
        return;
      }

      clearErrors("skills");

      const isValid = await trigger();
      if (isValid) nextStep();
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <StepperNumber currstep={currstep} />

      <div className="flex gap-6 lg:gap-25 flex-col lg:flex-row w-full">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-snug">
            Let’s choose your category and showcase your skills
          </h2>
          <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide">
            Select the work you love to do and highlight your top skills.
          </p>
        </div>

        <div className="w-full flex flex-col gap-6">
          <CategorySelector
            category_data={category_data}
            getskillsbycategory={handleCategoryChange}
            loading={categoryLoading}
          />

          {selectedCategory && (
            <SkillsSelector
              categoryName={categoryName}
              skills_data={skills_data}
              selectedItems={selectedItems}
              handleCheckboxChange={handleCheckboxChange}
              inputValue={inputValue}
              handleInputChange={handleInputChange}
              errors={errors}
              loading={skillsLoading}
            />
          )}

          <div className="flex justify-between gap-10 xl:gap-2 mt-5">
            <Button
              type="button"
              onClick={prevStep}
              className="bg-white text-paragraph flex items-center gap-2 shadow"
            >
              <SvgIcon name="PrevButton" />
              Back
            </Button>

            <Button
              type="button"
              onClick={handleNext}
              disabled={buttonLoading}
              className={`bg-secondary text-white flex items-center gap-2 ${buttonLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
            >
              {buttonLoading ? "Loading..." : <>Next <SvgIcon name="NextArrow" /></>}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySkillsPage;
