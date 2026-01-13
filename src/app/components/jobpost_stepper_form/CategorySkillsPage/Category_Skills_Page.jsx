import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import jobApiStore from "@/app/store/jobStore";

import CategorySelector from "./CategorySelector";
import SkillsSelector from "./SkillsSelector";
import StepperNumber from "../StepperNumber";
import Button from "../../button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import Loader from "../../common/Loader";

const Category_Skills_Page = ({ nextStep, prevStep, currstep }) => {
  const {
    trigger,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useFormContext();

  const [categoryName, setCategoryName] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const getskillsbycategory = async (categoryCode, name) => {
    if (selectedCategory === categoryCode) {
      setSelectedCategory(null);
      setCategoryName("");
      setSelectedItems([]);
      setInputValue("");
      setValue("skills", []);
      return;
    }

    setSelectedCategory(categoryCode);
    setCategoryName(name);
    setSelectedItems([]);
    setInputValue("");
    setValue("skills", []);
    await getSkillsByCategory(categoryCode);
  };

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
      .map((x) => x.trim())
      .filter(Boolean);

    setInputValue(e.target.value);
    setSelectedItems(typed);
  };

  useEffect(() => {
    const payload = selectedItems.map((skill) => ({
      name: skill,
      level: "Intermediate",
    }));

    setValue("skills", payload, { shouldValidate: true });
  }, [selectedItems, setValue]);

  const handleNext = async () => {
    setButtonLoading(true);

    try {
      if (!selectedCategory) {
        setError("category", {
          type: "manual",
          message: "Please select a category",
        });
        return;
      }

      if (selectedItems.length === 0) {
        setError("skills", {
          type: "manual",
          message: "Please add at least 1 skill",
        });
        return;
      }

      clearErrors(["skills", "category"]);

      const valid = await trigger();
      if (valid) nextStep();
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <StepperNumber currstep={currstep} />

      <div className="flex gap-6 lg:gap-15 flex-col lg:flex-row w-full">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
            Let’s find the perfect freelancer for your project
          </h2>
          <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide">
            This helps your job post stand out to the right candidates.
          </p>
        </div>

        <div className="w-full flex flex-col gap-6">
          <CategorySelector
            category_data={category_data}
            selectedCategory={selectedCategory}
            getskillsbycategory={getskillsbycategory}
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
              className="bg-white text-gray-800 flex items-center gap-2 transition-all duration-300"
              style={{
                boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <SvgIcon name="PrevButton" />
              Back
            </Button>

            <Button
              type="button"
              onClick={handleNext}
              disabled={buttonLoading}
              className={`bg-primary text-white flex items-center gap-2 justify-center px-7 ${buttonLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
            >
              {buttonLoading ? (
                <Loader size={18} border={3} color="white" />
              ) : (
                <>
                  Next <SvgIcon name="NextArrow" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category_Skills_Page;
