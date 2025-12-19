import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import Image from "next/image";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import ExperienceModal from "./ExperienceModal";

const ExperienceInputSection = ({ nextStep, prevStep, currstep }) => {
  const {
    register,
    formState: { errors },
    trigger
  } = useFormContext();

  const [showForm, setshowForm] = useState(false)

  const handleNext = async () => {
    const valid = await trigger(["experience"]);
    if (valid) nextStep();
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl xl:text-2xl text-heading font-bold leading-9">
          Add Experience
        </h2>

        <div className="flex flex-col gap-2">
          <div className="border border-dashed border-gray-500 h-[366px] flex flex-col justify-end pl-3 pb-20" onClick={()=>setshowForm(!showForm)}>
            <Image
              src="/icons/Add.png"
              alt="Add button"
              width={40}
              height={40}
            />
            <h2 className="mt-6 font-semibold text-lg lg:text-[32px]">Add experience</h2>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="flex justify-between mt-5">
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
      {
        showForm && (
            <ExperienceModal setshowForm={setshowForm}/>
        )
    }
    </div>

    


  );
};

export default ExperienceInputSection;
