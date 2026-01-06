import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import jobApiStore from "@/app/store/jobStore";
import CategorySelector from "./CategorySelector";
import SkillsSelector from "./SkillsSelector";
import StepperNumber from "../StepperNumber";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import Button from "@/app/components/button/Button";

const CategorySkillsPage = ({ nextStep, prevStep, currstep }) => {
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

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);

  const {
    category_data,
    skills_data,
    getCategories,
    getSkillsByCategory,
    categoryLoading,
    skillsLoading,
  } = jobApiStore();

  /* ------------------ CATEGORY SELECT ------------------ */
  const getskillsbycategory = async (categoryCode, name) => {
    // 🔥 UNSELECT
    if (selectedCategory === categoryCode) {
      setSelectedCategory(null);
      setCategoryName("");
      setSelectedItems([]);
      setValue("skills", []);
      return;
    }

    setSkillsLoading(true);
    try {
      setSelectedCategory(categoryCode);
      setCategoryName(name);
      setSelectedItems([]);
      setValue("skills", []);
      await getSkillsByCategory(categoryCode);
    } finally {
      setSkillsLoading(false);
    }
  };

  /* ------------------ SKILL CHECKBOX ------------------ */
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updated = [...selectedItems];

    if (checked) {
      if (!updated.includes(value)) updated.push(value);
    } else {
      updated = updated.filter((item) => item !== value);
    }

    setSelectedItems(updated);
    setInputValue(updated.join(", "));
  };

  /* ------------------ INPUT CHANGE ------------------ */
  const handleInputChange = (e) => {
    const typed = e.target.value
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);

    setInputValue(e.target.value);
    setSelectedItems(typed);
  };

  /* ------------------ LOAD CATEGORIES ------------------ */
  useEffect(() => {
    const fetchCategories = async () => {
      setCategoryLoading(true);
      try {
        await getCategories();
      } finally {
        setCategoryLoading(false);
      }
    };

    fetchCategories();
  }, []);

  /* ------------------ SYNC SKILLS TO FORM ------------------ */
  useEffect(() => {
    const skillsPayload = selectedItems.map((skill) => ({
      name: skill,
      level: "Intermediate",
    }));

    setValue("skills", skillsPayload, { shouldValidate: true });
  }, [selectedItems, setValue]);

  /* ------------------ NEXT BUTTON ------------------ */
  const handleNext = async () => {
    setButtonLoading(true);

    try {
      if (selectedItems.length === 0) {
        setError("skills", {
          type: "manual",
          message: "Please add at least 1 skill",
        });
        return;
      }

      clearErrors("skills");

      const valid = await trigger();
      if (valid) nextStep();
    } finally {
      setButtonLoading(false);
    }
  };

  /* ------------------ UI ------------------ */
  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <StepperNumber currstep={currstep} />

      <div className="flex gap-6 lg:gap-25 flex-col lg:flex-row w-full">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-snug">
            Let’s choose your category and showcase your skills
          </h2>
          <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide">
            Select the work you love to do and highlight your top skills. This
            helps us match you with the right jobs and clients on Venejobs.
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
              className="bg-white text-paragraph flex items-center gap-2 transition-all duration-300 shadow"
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
              className={`bg-secondary text-white flex items-center gap-2 justify-center
                ${buttonLoading ? "opacity-70 cursor-not-allowed" : ""}`}
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
