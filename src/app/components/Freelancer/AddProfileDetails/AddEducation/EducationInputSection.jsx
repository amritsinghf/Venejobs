import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import Image from "next/image";
import React, { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import EducationModal from "./EducationModal";
import ShowEducationPage from "./ShowEducationPage";

const EducationInputSection = ({ nextStep, prevStep, currstep }) => {
  const { trigger, control, getValues } = useFormContext();
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "education",
  });

  const [showForm, setshowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleNext = async () => {
    const valid = await trigger(["education"]);
    if (valid) nextStep();
  };

  return (
    <div className="flex flex-col w-full gap-6">
      <h2 className="text-xl xl:text-2xl text-heading font-bold leading-9">
        Add Education
      </h2>

      {/* Show Add Panel only if no education added yet */}
      {fields.length === 0 && (
        <div
          className="border border-dashed border-gray-500 h-[366px] flex flex-col justify-end pl-3 pb-20 cursor-pointer"
          onClick={() => {
            setEditIndex(null);
            setshowForm(true);
          }}
        >
          <Image src="/icons/Add.png" alt="Add button" width={40} height={40} />
          <h2 className="mt-6 font-semibold text-lg lg:text-[32px]">
            Add Education
          </h2>
        </div>
      )}

      {/* Show list of education entries */}
      {fields.length > 0 && (
        <ShowEducationPage
          fields={fields}
          onEdit={(index) => {
            setEditIndex(index);
            setshowForm(true);
          }}
          onDelete={(index) => remove(index)}
          onAddMore={() => {
            setEditIndex(null);
            setshowForm(true);
          }}
        />
      )}

      {/* Navigation buttons */}
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

      {/* Education Modal */}
      {showForm && (
        <EducationModal
          setshowForm={setshowForm}
          close={() => setshowForm(false)}
          append={append}
          update={update}
          editIndex={editIndex}
          fields={fields}
        />
      )}
    </div>
  );
};

export default EducationInputSection;