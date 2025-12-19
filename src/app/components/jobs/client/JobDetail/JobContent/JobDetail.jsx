import SvgIcon from "@/app/components/Utility/SvgIcon";
import jobApiStore from "@/app/store/jobStore";
import React from "react";

const JobDetail = () => {
  const { job, loading, error, getJobById } = jobApiStore();

  const skills = job?.skills ?? [];
  const fileName = job.attachment?.split("/").pop() ?? null;
  return (
    <div className="lg:w-[65%] xl:w-[1000px] flex flex-col gap-6 lg:gap-10 border-b border-[#44444414]">
      <div className="flex flex-col gap-10 border-b border-[#44444414]"></div>
      <div className="flex flex-col gap-6 lg:gap-10 border-b border-[#44444414]">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-base lg:text-lg text-heading">
            Project Description
          </h2>
          <p className="text-paragraph text-sm lg:text-base">
            {job.description}
          </p>
          <div className="text-paragraph text-sm md:text-base mt-6 md:mt-10 flex flex-col gap-2">
            <h3>Skills Needed :</h3>
            <div className="flex flex-col gap-2">
              <p>
                - Proficiency in UI design tools such as Sketch, Figma, or Adobe
                XD
              </p>
              <p>- Strong knowledge of UX principles and best practices</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-base lg:text-lg text-heading">
            Attachments
          </h2>
          <div className="flex gap-2 mb-8 lg:mb-10">
            <div className="flex items-center gap-2 border border-[#44444414] rounded px-3 py-2">
              <div className="bg-gray-200 p-2 md:p-3 rounded-full">
                <SvgIcon name="File" size={32} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-heading text-xs md:text-sm">{fileName}</h3>
                <p className="text-paragraph text-[10px] md:text-xs">2.3mb</p>
              </div>
            </div>
            <div className="flex items-center gap-2 border border-[#44444414] rounded px-3 py-2">
              <div className="bg-gray-200 p-2 md:p-3 rounded-full">
                <SvgIcon name="File" size={32} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-heading text-xs md:text-sm">
                  project-details.pdf
                </h3>
                <p className="text-paragraph text-[10px] md:text-xs">2.3mb</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 border-b border-[#44444414]">
        <div className="flex flex-row gap-10 lg:gap-44 mb-10">
          <div className="flex gap-4 md:gap-8 items-center">
            <SvgIcon name="PriceTag" />
            <div className="flex flex-col gap-2">
              <h2 className="text-[#333333] lg:text-lg font-semibold">
                ${job.budget_amount}
              </h2>
              <p className="text-paragraph text-sm lg:text-base font-medium">
                {job.budget_type} Price
              </p>
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 items-center ">
            <SvgIcon name="PersonWSetting" size={24} />
            <div className="flex flex-col gap-2">
              <h2 className="text-[#333333] font-semibold lg:text-lg">
                Entry level
              </h2>
              <p className="text-paragraph text-sm lg:text-base font-medium">
                {job.experience_level}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 border-b border-[#44444414]">
        <div className="flex flex-col gap-2 md:gap-8 mb-10">
          <h2 className=" font-semibold text-base lg:text-lg text-heading">
            Project Type:
          </h2>
          <p className="text-paragraph text-sm lg:text-base font-medium">
            One-time project
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-lg text-heading">
            Skills and Expertise
          </h2>

          <div className="flex items-center gap-3 flex-wrap mb-8 md:mb-10">
            {skills.length ? (
              skills.map((item) => (
                <p
                  className="cursor-pointer relative overflow-hidden
                          bg-[#FAFAFA] p-3 font-medium text-paragraph rounded-full
                          transition-all duration-300
                          before:content-[''] before:absolute before:inset-0
                          before:bg-gray-200 before:-translate-x-full before:transition-transform before:duration-300
                          before:-z-10
                          hover:before:translate-x-0
                          z-10 text-base"
                  key={item}
                >
                  {item}
                </p>
              ))
            ) : (
              <p className="text-paragraph text-sm">No skills available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
