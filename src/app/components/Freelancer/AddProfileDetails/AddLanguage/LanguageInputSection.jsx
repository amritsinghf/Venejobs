import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import useToastStore from "@/app/store/toastStore";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import ShowLanguagePage from "./ShowLanguagePage";

const LanguageInputSection = ({
  nextStep,
  prevStep,
  editIndex,
  fields,
  setEditIndex,
  append,
  remove,
  update,
}) => {
  const {
    formState: { errors },
    trigger,
  } = useFormContext();
  const { showError } = useToastStore.getState();

  const languagesData = [
    { id: 1, name: "English" },
    { id: 2, name: "Hindi" },
    { id: 3, name: "Spanish" },
    { id: 4, name: "French" },
    { id: 5, name: "German" },
    { id: 6, name: "Japanese" },
    { id: 7, name: "Chinese" },
  ];
  const proficiencyData = [
    { id: 1, name: "Basic" },
    { id: 2, name: "Conversational" },
    { id: 3, name: "Fluent" },
    { id: 4, name: "Native" },
  ];

  const [languageTemp, setlanguageTemp] = useState({
    language: "",
    proficiency: "",
  });

  useEffect(() => {
    if (editIndex !== null) {
      setlanguageTemp(fields[editIndex]);
    } else {
      setlanguageTemp({
        language: "",
        proficiency: "",
      });
    }
  }, [editIndex, fields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setlanguageTemp((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (!languageTemp.language || !languageTemp.proficiency) return;

    const alreadyExists = fields.some(
      (item, idx) =>
        item.language === languageTemp.language && idx !== editIndex
    );

    if (alreadyExists) {
      showError("This language is already added.", "error");
      return;
    }

    if (editIndex !== null) {
      update(editIndex, languageTemp);
    } else {
      append(languageTemp);
    }

    setlanguageTemp({ language: "", proficiency: "" });
    setEditIndex(null);
  };


  const handleEdit = (index) => {
    setlanguageTemp(fields[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    remove(index);
  };

  const handleNext = async () => {
    const valid = await trigger("languages");

    if (fields.length === 0) {
      showError("Please add at least one language before proceeding.", "error");
      return;
    }

    if (valid) {
      nextStep();
    }
  };

  const selectedLanguages = fields.map((item) => item.language);
  
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-xl xl:text-2xl text-heading font-semibold leading-9">
              Language
            </h2>
            <div className="relative w-full">
              <select
                name="language"
                value={languageTemp.language}
                onChange={handleChange}
                className="
                  w-full py-3.5 pl-3 pr-10
                  text-sm lg:text-base
                  border border-[#D0D5DD]
                  rounded-md
                focus:border-secondary focus:outline-none
                text-heading tracking-wide
                  appearance-none bg-white
                "
              >
                <option value="">Select language</option>

                {languagesData
                  .filter((item) => {
                    if (editIndex !== null && item.name === fields[editIndex]?.language) {
                      return true;
                    }

                    return !selectedLanguages.includes(item.name);
                  })
                  .map((item) => (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>


              {/* Custom Dropdown Icon */}
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.937a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

          </div>

          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-xl xl:text-2xl text-heading font-semibold leading-9">
              Proficiency level
            </h2>

            <div className="relative w-full">
              <select
                name="proficiency"
                value={languageTemp.proficiency}
                onChange={handleChange}
                className="
                  w-full py-3.5 pl-3 pr-10
                  text-sm lg:text-base
                  border border-[#D0D5DD]
                  rounded-md
                focus:border-secondary focus:outline-none
                text-heading tracking-wide
                  appearance-none bg-white
                "
              >
                <option value="">Select proficiency</option>
                {proficiencyData.map((item) => (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>

              {/* Custom Dropdown Icon */}
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.937a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>

        </div>
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="
              px-10 py-3
            bg-secondary text-white
              rounded-lg
              font-semibold tracking-wide
              transition-all duration-300
            hover:bg-secondary/90
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-secondary/40
              shadow-md hover:shadow-lg
              cursor-pointer
            "
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        <ShowLanguagePage
          fields={fields}
          languagesData={languagesData}
          proficiencyData={proficiencyData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

        <div className="flex justify-between gap-10 xl:gap-2 mt-5">
          <Button
            type="button"
            onClick={prevStep}
            className="bg-white text-paragraph flex items-center gap-2 transition-all duration-300"
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
            className="bg-secondary text-white border flex items-center gap-2 justify-center"
          >
            Next <SvgIcon name="NextArrow" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LanguageInputSection;
