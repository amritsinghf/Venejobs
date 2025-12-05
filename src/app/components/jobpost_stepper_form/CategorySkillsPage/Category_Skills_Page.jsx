import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import jobApiStore from "@/app/store/jobStore";

import CategorySelector from "./CategorySelector";
import SkillsSelector from "./SkillsSelector";
import StepperNumber from "../StepperNumber";
import Button from "../../button/Button";
import SvgIcon from "../../SvgIcon";

const Category_Skills_Page = ({ nextStep, prevStep, currstep }) => {
    const { trigger, formState: { errors } } = useFormContext();

    const [categoryName, setCategoryName] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const {
        category_data,
        skills_data,
        getCategories,
        getSkillsByCategory,
    } = jobApiStore();

    const getskillsbycategory = async (categoryCode, name) => {
        setCategoryName(name);
        await getSkillsByCategory(categoryCode);
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        let updated = [...selectedItems];

        checked
            ? !updated.includes(value) && updated.push(value)
            : (updated = updated.filter((i) => i !== value));

        setSelectedItems(updated);
        setInputValue(updated.join(", "));
    };

    const handleInputChange = (e) => {
        const updated = e.target.value
            .split(",")
            .map((x) => x.trim())
            .filter(Boolean);

        setInputValue(e.target.value);
        setSelectedItems(updated);
    };

    useEffect(() => {
        getCategories();
    }, []);

    const handleNext = async () => {
        const valid = await trigger(["category", "skills"]);
        if (valid) nextStep();
    };

    return (
        <div className="flex flex-col gap-6 lg:gap-10">
            <StepperNumber currstep={currstep} />

            <div className="flex gap-5 lg:gap-25 flex-col lg:flex-row w-full">
                <div className="w-full flex flex-col gap-4">
                    <h2 className="text-2xl lg:text-4xl font-bold">
                        Let’s find the perfect freelancer for your project
                    </h2>
                    <p className="text-gray-500 text-base">
                        This helps your job post stand out to the right candidates.
                    </p>
                </div>

                <div className="w-full flex flex-col gap-6">

                    <CategorySelector
                        category_data={category_data}
                        errors={errors}
                        getskillsbycategory={getskillsbycategory}
                    />

                    <SkillsSelector
                        categoryName={categoryName}
                        skills_data={skills_data}
                        selectedItems={selectedItems}
                        handleCheckboxChange={handleCheckboxChange}
                        inputValue={inputValue}
                        handleInputChange={handleInputChange}
                        errors={errors}
                    />

                    <div className="flex justify-between">
                        <Button
                            type="button"
                            onClick={prevStep}
                            className="bg-white text-gray-800  flex items-center gap-2 transition-all duration-300"
                            style={{
                                boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
                                border: "1px solid rgba(0,0,0,0.08)"
                            }}
                        >
                            <SvgIcon name="PrevButton" />
                            Back
                        </Button>
                        <Button
                            type="button"
                            onClick={handleNext}
                            className="bg-primary text-white flex items-center gap-2"
                        >
                            Next <SvgIcon name="NextArrow" />
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Category_Skills_Page;
