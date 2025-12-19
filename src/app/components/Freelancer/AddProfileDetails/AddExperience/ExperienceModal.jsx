import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import React from "react";
import { useFormContext } from "react-hook-form";

const ExperienceModal = ({ setshowForm }) => {
  const {
    register,
    formState: { errors },
    getValues,
    trigger
  } = useFormContext();

  const handleSave = async () => {
  const isValid = await trigger("experience");

  if (!isValid) return;

  const experienceData = getValues("experience");
  
  if (!experienceData || Object.keys(experienceData).length === 0) {
    console.error("Experience data missing");
    return;
  }
  setshowForm(false);
};
  console.log(getValues())
  
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 pt-2">
      <div
        className="
      relative bg-white w-full max-w-[1120px] rounded-xl shadow-sm
      max-h-[100dvh] md:max-h-none
      flex flex-col
    "
      >
        <div className="px-1 md:px-5 md:py-10 overflow-y-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-lg lg:text-2xl font-extrabold leading-tight text-start text-heading mb-3">
              Add Employment
            </h2>
            <button
              type="button"
              onClick={() => setshowForm(false)}
              className="
            absolute right-4 w-9 h-9
            flex items-center justify-center
            rounded-full hover:bg-gray-100 transition cursor-pointer
          "
            >
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex flex-col gap-2 ">
                <h3 className="text-base text-heading font-bold">Job Title</h3>
                <input
                  type="text"
                  placeholder="Ex: Senior UXUI Designer"
                  {...register("experience.jobTitle", {
                    required: "Job Title is required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters required",
                    },
                  })}
                  className="w-full py-2 2xl:py-3.5 px-3 text-sm lg:text-base border border-lightborder focus:border-primary font-medium rounded-md focus:outline-none text-paragraph tracking-wide placeholder:text-sm"
                />
                <div className="min-h-1">
                  {errors.experience?.jobTitle?.message && (
                    <span className="text-sm text-red-500 block">
                      {errors.experience.jobTitle.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-base text-heading font-bold">
                  Company Name
                </h3>
                <input
                  type="text"
                  placeholder="Ex: Venesjobs"
                  {...register("experience.companyName", {
                    required: "Company Name is required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters required",
                    },
                  })}
                  className="w-full py-2 2xl:py-3.5 px-3 text-sm lg:text-base border border-lightborder focus:border-primary font-medium rounded-md focus:outline-none text-paragraph tracking-wide placeholder:text-sm"
                />
                <div className="min-h-1">
                  {errors.experience?.companyName?.message && (
                    <span className="text-sm text-red-500 block">
                      {errors.experience.companyName.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2 ">
                <h3 className="text-base text-heading font-bold">Location</h3>
                <input
                  type="text"
                  placeholder="Ex: Russia"
                  {...register("experience.location", {
                    required: "Location is required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters required",
                    },
                  })}
                  className="w-full py-2 2xl:py-3.5 px-3 text-sm lg:text-base border border-lightborder focus:border-primary font-medium rounded-md focus:outline-none text-paragraph tracking-wide placeholder:text-sm"
                />
                <div className="min-h-1">
                  {errors.experience?.location?.message && (
                    <span className="text-sm text-red-500 block">
                      {errors.experience.location.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <h3 className="text-base text-heading font-bold">City</h3>
                <input
                  type="text"
                  placeholder="Enter City"
                  {...register("experience.city", {
                    required: "City is required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters required",
                    },
                  })}
                  className="w-full py-2 2xl:py-3.5 px-3 text-sm lg:text-base border border-lightborder focus:border-primary font-medium rounded-md focus:outline-none text-paragraph tracking-wide placeholder:text-sm"
                />
                <div className="min-h-1">
                  {errors.experience?.city?.message && (
                    <span className="text-sm text-red-500 block">
                      {errors.experience.city.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <h3 className="text-base text-heading font-bold">
                  Started Month
                </h3>
                <input
                  type="text"
                  placeholder="From Month"
                  {...register("experience.startMonth", {
                    required: "Month is required",
                  })}
                  className="w-full py-2 2xl:py-3.5 px-3 text-sm lg:text-base border border-lightborder focus:border-primary font-medium rounded-md focus:outline-none text-paragraph tracking-wide placeholder:text-sm"
                />
                <div className="min-h-1">
                  {errors.experience?.startMonth?.message && (
                    <span className="text-sm text-red-500 block">
                      {errors.experience.startMonth.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <h3 className="text-base text-heading font-bold">
                  Started Year
                </h3>
                <input
                  type="text"
                  placeholder="From Year"
                  {...register("experience.startYear", {
                    required: "Year is required",
                  })}
                  className="w-full py-2 2xl:py-3.5 px-3 text-sm lg:text-base border border-lightborder focus:border-primary font-medium rounded-md focus:outline-none text-paragraph tracking-wide placeholder:text-sm"
                />
                <div className="min-h-1">
                  {errors.experience?.startYear?.message && (
                    <span className="text-sm text-red-500 block">
                      {errors.experience.startYear.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <h3 className="text-base text-heading font-bold">
                  Ended Month
                </h3>
                <input
                  type="text"
                  placeholder="Through Month"
                  {...register("experience.endMonth", {
                    required: "End Month is required",
                  })}
                  className="w-full py-2 2xl:py-3.5 px-3 text-sm lg:text-base border border-lightborder focus:border-primary font-medium rounded-md focus:outline-none text-paragraph tracking-wide placeholder:text-sm"
                />
                <div className="min-h-1">
                  {errors.experience?.endMonth?.message && (
                    <span className="text-sm text-red-500 block">
                      {errors.experience.endMonth.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <h3 className="text-base text-heading font-bold">Ended Year</h3>
                <input
                  type="text"
                  placeholder="Through Year"
                  {...register("experience.endYear", {
                    required: "End Year is required",
                  })}
                  className="w-full py-2 2xl:py-3.5 px-3 text-sm lg:text-base border border-lightborder focus:border-primary font-medium rounded-md focus:outline-none text-paragraph tracking-wide placeholder:text-sm"
                />
                <div className="min-h-1">
                  {errors.experience?.endYear?.message && (
                    <span className="text-sm text-red-500 block">
                      {errors.experience.endYear.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-6 ">
                <input
                  id="currentWork"
                  type="checkbox"
                  {...register("experience.currentWorking")}
                  className="text-sm lg:text-base border border-lightborder focus:border-primary font-medium rounded-md focus:outline-none text-paragraph tracking-wide placeholder:text-sm"
                />
                <label htmlFor="currentWork">I currently work here</label>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <h2 className="font-semibold">Description (Optional)</h2>
              <textarea
                {...register("experience.description")}
                name=""
                id=""
                rows={5}
                className="border border-gray-200 w-full rounded p-2"
                placeholder="Enter description..."
              ></textarea>
              <div className="min-h-1">
                  {errors.experience?.description?.message && (
                    <span className="text-sm text-red-500 block">
                      {errors.experience.description.message}
                    </span>
                  )}
                </div>
            </div>

            <div className="flex items-center justify-end gap-6 mb-3">
              <Button className="text-paragraph flex items-center gap-2 shadow w-auto px-3" onClick={() => setshowForm(false)}>
                Cancel
              </Button>
              <Button className="bg-secondary text-white flex items-center gap-2 w-auto px-3" onClick={()=>handleSave()}>
                Save <SvgIcon name="NextArrow" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
