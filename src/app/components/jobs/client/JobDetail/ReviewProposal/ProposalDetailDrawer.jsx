"use client";
import { useState } from "react";
import SvgIcon from "@/app/components/SvgIcon";
import JobTabs from "../JobTabs";
import Coverletter from "./ProposalDetailDrawer/Coverletter";

export default function ProposalDetailDrawer({ isOpen, onClose }) {

  const [showData, setshowData] = useState("coverLetter");

  const tabs = [
    { label: "Cover letter", id: "coverLetter", component: <Coverletter /> },
    { label: "Completed jobs", id: "completedJobs", component: <p>Completed jobs content</p> },
    { label: "Portfolio", id: "portfolio", component: <p>Portfolio content</p> },
    { label: "Education", id: "education", component: <p>Education content</p> },
    { label: "Work & Experience", id: "experience", component: <p>Work & Experience content</p> },
    { label: "Skills", id: "skills", component: <p>Skills content</p> },
  ];
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-screen max-h-screen overflow-y-auto no-scrollbar w-[97%] xl:w-[75%] bg-white z-50 transform transition-transform duration-300 rounded-r-[40px]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`} style={{ boxShadow: "2px 2px 50px 5px #0000000D" }}
      >
        <div className="flex flex-col gap-8 max-w-[95%] lg:max-w-[880px] xl:max-w-[1000px] 2xl:max-w-[1230px] mx-4 my-6 md:mx-5 md:my-8 lg:my-8 lg:mb-10 lg:mr-10 lg:ml-auto">
          <div className="flex justify-between items-center">
            <button className="cursor-pointer" onClick={onClose}>
              <SvgIcon size={32} name="LeftArrow" color="#666666" />
            </button>
            <button className="flex gap-6 text-primary text-base font-bold cursor-pointer">
              View Profile <SvgIcon name="RightArrowCurve" />
            </button>
          </div>
          <div className="flex flex-col gap-8 lg:gap-10">
            <JobTabs tabs={tabs} tabGap="4" showData={showData} setshowData={setshowData} />
            {tabs.find(tab => tab.id === showData)?.component}
          </div>
        </div>
      </div>
    </>
  );
}
