import React from "react";
import SvgIcon from "@/app/components/Utility/SvgIcon";

const LeftPanel = ({ freelancerProfile }) => {
  return (
    <div className="flex flex-col gap-10 sm:gap-[60px]  lg:border-r border-gray-200 md:pr-8">
      <div className="flex gap-12 w-full ">
        <div className="flex gap-6 items-center">
          <SvgIcon name="PiggyBank" size={32} />
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-heading">
              Total Earning
            </h2>
            <p className="text-paragraph text-sm">100k Earned</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <SvgIcon name="Brifcase" size={32} />
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-heading">
              Total Earning
            </h2>
            <p className="text-paragraph text-sm">100k Earned</p>
          </div>
        </div>
      </div>
      <hr className="text-gray-200" />
      <div className="md:flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <SvgIcon name="Language" size={24} />
        <h2 className="font-semibold text-lg">Language</h2>
        </div>
        

        {freelancerProfile?.meta?.languages?.map((item) => (
          <div className="flex flex-col gap-8" key={item.language}>
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-heading">{item.language}</h2>
              <p className="text-paragraph">{item.proficiency}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="text-gray-200" />
    </div>
  );
};

export default LeftPanel;
