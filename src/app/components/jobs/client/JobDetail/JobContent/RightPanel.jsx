import React from "react";
import SvgIcon from "@/app/components/SvgIcon";

const RightPanel = () => {
  return (
    <div className="lg:mx-auto flex flex-col-reverse lg:flex-col gap-8 lg:gap-14 lg:border-l border-gray-200 lg:pl-6">
      <div className="flex flex-col gap-6">
        <button className="text-primary w-full font-medium text-lg flex items-center gap-6 cursor-pointer">
          <SvgIcon name="PostEdit" /> Edit posting
        </button>
        <button className="text-primary w-full font-medium text-lg flex items-center gap-6 cursor-pointer">
          <SvgIcon name="Eye2" size={24} /> View Posting
        </button>
        <button className="text-primary w-full font-medium text-lg flex items-center gap-6 cursor-pointer">
          <SvgIcon name="DeleteRed" size={24} /> Remove posting
        </button>
      </div>
      <div className="flex flex-col gap-6 md:gap-10 border-b border-[#44444414] lg:border-none">
        <div className="flex flex-col gap-3">
          <h3 className="flex gap-6 font-semibold text-lg text-heading">
            About the client<SvgIcon name="Editing" size={21} />
          </h3>
          <p className="flex gap-4 text-paragraph text-base font-medium"><SvgIcon name="NotVerified" />Payment method not verified</p>
          <p className="flex gap-4 text-paragraph text-base font-medium"><SvgIcon name="Verified" />Phone number verified</p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg text-heading">
            Pakistan
          </h3>
          <p className="text-paragraph text-base font-medium">1:14 AM</p>
        </div>

        <div className="flex flex-col gap-4 mt-2 md:mt-0 mb-10">
          <h2 className="font-semibold text-lg text-heading">Job Link</h2>
          <input
            type="text"
            name=""
            id=""
            className="border border-gray-200 px-2 py-2 rounded"
            placeholder="https://www.upwork.com/jobs/~021866835538461740469"
          />
          <p className="text-primary font-semibold text-base">Copy link</p>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
