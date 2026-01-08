import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import Image from "next/image";
import React, { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import ExperienceModal from "./ExperienceModal";
import ShowExperiencePage from "./ShowExperiencePage";
import useToastStore from "@/app/store/toastStore";

const ExperienceInputSection = ({ nextStep, prevStep, currstep }) => {
  const { showError } = useToastStore.getState();
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
      showError("Please add at least one experience before proceeding.", "error")
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
          <h2 className="text-xl xl:text-2xl text-heading font-semibold leading-9">
            Add Experience
          </h2>

          <div
            className="border border-dashed border-gray-500 flex flex-col items-center justify-center gap-4 cursor-pointer h-40 sm:h-48 md:h-56 lg:h-64"
            onClick={() => {
              setEditIndex(null);
              setShowForm(true);
            }}
          >
            <Image
              src="/icons/Add.png"
              alt="Add button"
              width={36}
              height={36}
            />
            <h2 className="font-semibold text-lg lg:text-xl mt-2 text-center">
              Add experience
            </h2>
          </div>


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
