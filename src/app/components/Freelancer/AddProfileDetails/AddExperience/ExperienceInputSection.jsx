import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import Image from "next/image";
import React, { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import ExperienceModal from "./ExperienceModal";
import ShowExperiencePage from "./ShowExperiencePage";
import useToastStore from "@/app/store/toastStore";

const ExperienceInputSection = ({ nextStep, prevStep, currstep }) => {
  const {showError} = useToastStore.getState();
  const { control, trigger } = useFormContext();

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleNext = async () => {
    const valid = await trigger("experiences");

    if (fields.length === 0) {
      showError("Please add at least one experience before proceeding.","error")
      return;
    }

    if (valid) {
      nextStep();
    }
  };

  return (
    <div className="flex flex-col w-full">
      {fields.length === 0 ? (
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-xl xl:text-2xl text-heading font-bold leading-9">
            Add Experience
          </h2>

          <div
            className="border border-dashed border-gray-500 h-[366px] flex flex-col justify-end pl-3 pb-20 cursor-pointer"
            onClick={() => {
              setEditIndex(null);
              setShowForm(true);
            }}
          >
            <Image
              src="/icons/Add.png"
              alt="Add button"
              width={40}
              height={40}
            />
            <h2 className="mt-6 font-semibold text-lg lg:text-[32px]">
              Add experience
            </h2>
          </div>

          <div className="flex justify-between gap-10 xl:gap-2 mt-5">
            <Button
              type="button"
              onClick={prevStep}
              className="bg-white text-paragraph flex items-center gap-2 shadow"
            >
              <SvgIcon name="PrevButton" /> Back
            </Button>
            <Button
              type="button"
              onClick={handleNext}
              className="bg-secondary text-white flex items-center gap-2 justify-center"
            >
              Next <SvgIcon name="NextArrow" />
            </Button>
          </div>
        </div>
      ) : (
        <ShowExperiencePage
          nextStep={nextStep}
          prevStep={prevStep}
          fields={fields}
          onEdit={(index) => {
            setEditIndex(index);
            setShowForm(true);
          }}
          onDelete={(index) => remove(index)}
          onAddMore={() => {
            setEditIndex(null);
            setShowForm(true);
          }}
        />
      )}

      {showForm && (
        <ExperienceModal
          close={() => setShowForm(false)}
          append={append}
          update={update}
          editIndex={editIndex}
          fields={fields}
        />
      )}
    </div>
  );
};

export default ExperienceInputSection;
