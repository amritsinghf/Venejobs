"use client";
import { useState } from "react";
import ProposalCard from "./ReviewProposal/ProposalCard";
import ShortlistCard from "./ReviewProposal/ShortlistCard";
import SearchFilter from "./SearchFilter";
import ProposalDetailDrawer from "./ReviewProposal/ProposalDetailDrawer";
import JobTabs from "@/app/components/Client/homeUI/JobTabs";


export default function ReviewProposal() {
  const [showData, setshowData] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const tabs = [
    { label: "All proposals", component: <ProposalCard onOpen={() => setIsDrawerOpen(true)} /> },
    { label: "Shortlisted", component: <ShortlistCard /> },
    { label: "Messaged", component: <p>Messaged content</p> },
    { label: "Archived", component: <p>Archived content</p> },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <JobTabs tabs={tabs} showData={showData} setshowData={setshowData} />
      </div>
      <SearchFilter />
      <div className="h-auto flex flex-col w-full gap-10">
        {tabs[showData].component}
      </div>
      <ProposalDetailDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
}
