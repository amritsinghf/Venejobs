import { get_categories, getskills_by_category } from "@/app/lib/jobs";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const Category_Skills_Page = ({ nextStep, prevStep, currstep }) => {
  const {
    register,
    formState: { errors },
    trigger,
    watch,
  } = useFormContext();

  const [categories, setcategories] = useState([]);
  const [skills, setSkills] = useState([]);
  const [categoryName, setcategoryName] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setSelectedItems((prev) =>
      checked
        ? [...prev, value].filter((v, i, arr) => arr.indexOf(v) === i) // ensure no duplicates
        : prev.filter((item) => item !== value)
    );
  };

  const getallcategories = async () => {
    const res = await get_categories();
    console.log(res);
    if (res.success === true) {
      setcategories(res.data);
    }
  };

  const getskillsbycategory = async (selectedCategory, categoryName) => {
    setcategoryName(categoryName);
    const res = await getskills_by_category(selectedCategory);
    console.log(res.data);
    setSkills(res.data);
  };

  useEffect(() => {
    getallcategories();
  }, []);

  const handleNext = async () => {
    const valid = await trigger(["category", "skills"]);
    if (valid) nextStep();
  };
  const handlePrev = async () => {
    prevStep();
  };

  return (
    <div className="w-full h-screen max-w-[1420px]  mb-20 mt-30 mx-auto ">
      <div className="flex  justify-evenly max-w-[250px]">
        {[...Array(5)].map((_, i) => (
          <div className="flex   text-center" key={i}>
            <span
              className={`${
                i + 1 <= currstep
                  ? "bg-blue-900 text-white"
                  : "bg-white text-black"
              } rounded-full w-[35px] h-[35px] flex items-center justify-center border border-gray-300`}
            >
              {i + 1}
            </span>
          </div>
        ))}
      </div>
      <div className=" flex gap-9">
        <div className="mt-3 flex flex-col gap-5 h-[325px] w-[700px]">
          <h2 className="text-[#333333] font-semibold text-[44px]">
            Let’s find the perfect freelancer for your project
          </h2>
          <p className="text-[#666666] text-[18px]">
            This helps your job post stand out to the right candidates. It’s the
            first thing they’ll see, so make it count!
          </p>
        </div>

        <div className="flex flex-col h-[525px] w-[700px] mt-3 ">
          <div className="flex flex-col gap-5 w-full px-15 ">
            <h2 className="font-semibold text-[#333333] text-2xl">
              Select Category
            </h2>

            <div className="flex flex-wrap gap-4 ">
              <ul className="grid  gap-1 md:grid-cols-3 ">
                {categories.map((item) => (
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
                        onChange={() =>
                          getskillsbycategory(item.code, item.name)
                        }
                      />
                      <label
                        htmlFor={item.code}
                        className="flex flex-col h-[45] items-center justify-center w-full p-5 rounded-lg 
                                        cursor-pointer text-gray-900 bg-white/20 
                                        peer-checked:bg-gray-400 peer-checked:text-black
                                        hover:bg-gray-100 hover:text-gray-600
                                        dark:text-gray-400 dark:bg-gray-100 dark:border-gray-700 
                                        dark:hover:text-gray-300 dark:peer-checked:bg-gray-500 dark:peer-checked:text-white
                                        transition-all"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-base font-sm leading-none">
                            {item.name}
                          </span>
                        </div>
                      </label>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            {errors.category && (
              <span className="text-red-500 font-bold">
                {errors.category.message}
              </span>
            )}

            <div className="flex flex-col mt-10  gap-2  h-[300] ">
              <h2 className="text-[#333333] text-2xl font-semibold">
                Search skills or add your own
              </h2>

              <input
                type="text"
                className="rounded p-4"
                value={selectedItems.join(", ")}
                {...register("skills", {
                  required: {
                    value: true,
                    message: "Please add skills",
                  },
                })}
                placeholder="For the best results, add 3-5 skills"
              />

              {errors.skills && (
                <span className="text-red-500 font-bold">
                  {errors.skills.message}
                </span>
              )}

              <div className="mt-5">
                <h2 className="text-lg">
                  {categoryName && `Popular skills for ${categoryName}`}
                </h2>
                <div className="flex flex-wrap mt-5 gap-4">
                  {skills.map((item) => {
                    const checkboxId = `skill-${item.id}`;
                    return (
                      <div key={item.id}>
                        <input
                          type="checkbox"
                          id={checkboxId}
                          className="sr-only peer"
                          onChange={handleCheckboxChange}
                          checked={selectedItems.includes(item.name)}
                          name="skills"
                          value={item.name}
                        />
                        <label
                          htmlFor={checkboxId}
                          className="border flex h-[45px] items-center justify-center p-5 rounded-lg 
                cursor-pointer text-gray-900 bg-white 
                hover:bg-gray-100 hover:text-gray-600
                transition-all"
                        >
                          <span className="text-base leading-none">
                            {item.name}
                          </span>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 py-3">
              <div className="flex justify-end mt-5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="bg-white text-gray-800 w-[150] p-3  "
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-900 text-white w-[150] p-3 border "
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category_Skills_Page;
