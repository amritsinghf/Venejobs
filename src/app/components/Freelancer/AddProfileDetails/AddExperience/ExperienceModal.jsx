import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const ExperienceModal = ({ close, append, update, editIndex, fields }) => {
  const { register, setValue, getValues } = useFormContext();

  // Local state for the current experience in the modal
  const currentData = editIndex !== null ? fields[editIndex] : {
    jobTitle: "",
    companyName: "",
    startDate: "",
    endDate: "",
    description: "",
    currentWorking: false,
  };

  useEffect(() => {
    // Set modal fields
    Object.keys(currentData).forEach((key) => {
      setValue(`experienceTemp.${key}`, currentData[key]);
    });
  }, [currentData, setValue]);

  const handleSave = () => {
    const data = getValues("experienceTemp");

    if (editIndex !== null) {
      update(editIndex, data); // update existing
    } else {
      append(data); // add new
    }
    close();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 pt-2">
      <div className="relative bg-white w-full max-w-[1120px] rounded-xl shadow-sm flex flex-col max-h-[100dvh] md:max-h-none overflow-y-auto">
        <div className="px-1 md:px-5 md:py-10">
          <div className="flex justify-between items-center">
            <h2 className="text-lg lg:text-2xl font-extrabold text-heading mb-3">
              {editIndex !== null ? "Edit Employment" : "Add Employment"}
            </h2>
            <button
              type="button"
              onClick={close}
              className="absolute right-4 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
            >
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-bold">Job Title</label>
              <input
                {...register("experienceTemp.jobTitle")}
                className="border p-2 rounded"
                placeholder="Ex: Senior UXUI Designer"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold">Company Name</label>
              <input
                {...register("experienceTemp.companyName")}
                className="border p-2 rounded"
                placeholder="Ex: Venesjobs"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold">Start Date</label>
              <input
                {...register("experienceTemp.startDate")}
                className="border p-2 rounded"
                placeholder="From Date"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold">End Date</label>
              <input
                {...register("experienceTemp.endDate")}
                className="border p-2 rounded"
                placeholder="End Date"
              />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                {...register("experienceTemp.currentWorking")}
              />
              <label>I currently work here</label>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <label className="font-bold">Description</label>
              <textarea
                {...register("experienceTemp.description")}
                rows={4}
                className="border p-2 rounded"
                placeholder="Enter description..."
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button onClick={close} className="px-4 py-2">
              Cancel
            </Button>
            <Button onClick={handleSave} className="px-4 py-2 bg-secondary text-white">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
