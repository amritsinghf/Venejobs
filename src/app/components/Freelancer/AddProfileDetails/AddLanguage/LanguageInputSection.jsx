import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const LanguageInputSection = ({
  nextStep,
  prevStep,
  editIndex,
  fields,
  setEditIndex,
  append,
  remove,
  update
}) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

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
    setlanguageTemp((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleSave = () => {
    if (!languageTemp.language || !languageTemp.proficiency) return;

    if (editIndex !== null) {
      update(editIndex, languageTemp); // update existing entry
    } else {
      append(languageTemp); // add new entry
    }

    setlanguageTemp({ language: "", proficiency: "" });
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setlanguageTemp(fields[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    remove((prev) => prev.filter((_, i) => i !== index));
  };

  const handleNext = async () => {
    const valid = await trigger(["education"]);
    if (valid) nextStep();
  };

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
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl text-heading font-semibold">Language</h2>

            <select
              name="language"
              value={languageTemp.language}
              id=""
              className="text-paragraph  py-2 border rounded"
              onChange={(e) => handleChange(e)}
            >
              {languagesData.map((item) => (
                <option value={item.id} key={item.id}>
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
              onChange={handleChange} // Add this
              className="text-paragraph py-2 border rounded"
            >
              {proficiencyData.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSave}
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        <div className="mt-4">
          {fields.map((field, index) => (
            <div key={field.id} className="flex justify-between items-center">
              <span>
                {languagesData.find((l) => l.id === field.language)?.name}
              </span>
              <span>
                {proficiencyData.find((p) => p.id === field.proficiency)?.name}
              </span>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="flex justify-between gap-2 mt-5">
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
              className="bg-secondary text-white border flex items-center gap-2 justify-center"
            >
              Next <SvgIcon name="NextArrow" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageInputSection;
