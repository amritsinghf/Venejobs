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

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl text-heading font-semibold">Language</h2>

            <select
              name="language"
              value={languageTemp.language}
              onChange={handleChange}
              className="text-paragraph py-2 border rounded"
            >
              <option value="">Select language</option>
              {languagesData.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl text-heading font-semibold">
              Proficiency level
            </h2>

            <select
              name="proficiency"
              value={languageTemp.proficiency}
              onChange={handleChange}
              className="text-paragraph py-2 border rounded"
            >
              <option value="">Select proficiency</option>
              {proficiencyData.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="px-4 py-2 bg-secondary text-white rounded"
            onClick={handleSave}
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
