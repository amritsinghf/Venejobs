import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import Button from "../button/Button";
import jobApiStore from "@/app/store/jobStore";
import StepperNumber from "./StepperNumber";
import SvgIcon from "../SvgIcon";
import ComputerIcon from "@mui/icons-material/Computer";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CampaignIcon from "@mui/icons-material/Campaign";
import SettingsIcon from "@mui/icons-material/Settings";
import EditNoteIcon from "@mui/icons-material/EditNote";

const categoryIcons = {
  it_programming: <ComputerIcon fontSize="small" />,
  design_multimedia: <DesignServicesIcon fontSize="small" />,
  marketing: <CampaignIcon fontSize="small" />,
  admin_support: <SettingsIcon fontSize="small" />,
  writing_translation: <EditNoteIcon fontSize="small" />,
};
const Category_Skills_Page = ({ nextStep, prevStep, currstep }) => {
  const {
    register,
    formState: { errors },
    trigger,
    watch,
  } = useFormContext();

  const [skills, setSkills] = useState([]);
  const [categoryName, setcategoryName] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedItems = [...selectedItems];

    if (checked) {
      if (!updatedItems.includes(value)) updatedItems.push(value);
    } else {
      updatedItems = updatedItems.filter((item) => item !== value);
    }

    setSelectedItems(updatedItems);
    setInputValue(updatedItems.join(", "));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const updatedItems = value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    setSelectedItems(updatedItems);
  };

  const {
    category_data,
    skills_data,
    loading,
    getCategories,
    getSkillsByCategory,
  } = jobApiStore();
  const getskillsbycategory = async (selectedCategory, categoryName) => {
    setcategoryName(categoryName);

    await getSkillsByCategory(selectedCategory);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleNext = async () => {
    const valid = await trigger(["category", "skills"]);
    if (valid) nextStep();
  };
  const handlePrev = async () => {
    prevStep();
  };
  console.log(errors, ">>>")
  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <StepperNumber currstep={currstep} />
      <div className="flex gap-5 lg:gap-25 flex-col lg:flex-row">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-2xl lg:text-4xl text-heading font-bold leading-snug">
            Let’s find the perfect freelancer for your project
          </h2>
          <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-9">
            This helps your job post stand out to the right candidates. It’s the
            first thing they’ll see, so make it count!
          </p>
        </div>

        <div className="flex flex-col  w-full mt-3 ">
          <div className="flex flex-col gap-4 lg:gap-6 w-full">
            <h2 className="text-xl lg:text-2xl text-heading font-bold leading-9">
              Select the Category
            </h2>

            <div className="flex flex-wrap gap-4">
              <ul className="flex items-center flex-wrap gap-3 lg:gap-5 w-full">
                {category_data?.map((item) => (
                  <div key={item.code}>
                    <li className="text-center">
                      <input
                        type="radio"
                        id={item.code}
                        className="sr-only peer"
                        value={item.name}
                        {...register("category", {
                          validate: (value) =>
                            value?.length > 0 || "Select at least one Category",
                        })}
                        onChange={() => getskillsbycategory(item.code, item.name)}
                      />

                      <label
                        htmlFor={item.code}
                        className="flex flex-col py-3.5 px-4 items-center justify-center w-full rounded-lg cursor-pointer border border-[#D0D5DD] transition-all peer-checked:bg-primary peer-checked:**:text-white"
                      >
                        <div className="flex items-center justify-center gap-3">
                          <span className="flex items-center text-paragraph gap-2 text-sm lg:text-base leading-snug">
                            {item.name}
                          </span>

                          <div className="text-paragraph">{categoryIcons[item.code]}</div>
                        </div>
                      </label>

                    </li>
                  </div>
                ))}
              </ul>

            </div>
            {errors.category && (
              <span className="text-sm text-red-500 font-medium">
                {errors.category.message}
              </span>
            )}

            <div className="flex flex-col gap-3 w-full">
              <h2 className="text-xl lg:text-2xl text-heading font-bold leading-9">
                Search skills or add your own
              </h2>

              <input
                type="text"
                placeholder="For the best results, add 3-5 skills"
                value={inputValue}
                onChange={handleInputChange}
                {...register("skills", { required: true })}
                className="w-full py-3.5 px-3 text-base border border-[#D0D5DD] focus:border-primary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
              />

              {errors.skills && (
                <span className="text-sm text-red-500 font-medium">
                  {errors.skills.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-4 ">
              <h2 className="text-base lg:text-lg text-heading font-medium tracking-wide">
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
                        className="
            border border-gray-200 flex h-[45px] items-center justify-center p-5 rounded-lg 
            cursor-pointer bg-white text-gray-900
            transition-all

            peer-checked:bg-primary
            peer-checked:**:text-white
          "
                      >
                        <span className="flex items-center text-paragraph gap-2 text-sm lg:text-base leading-snug">
                          {item.name} <AddIcon fontSize="small" sx={{ color: "#666666" }} />
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>

            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between md:flex-row gap-10 lg:gap-4">
                <Button
                  type="button"
                  onClick={handlePrev}
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
      </div>
    </div>
  );
};

export default Category_Skills_Page;
