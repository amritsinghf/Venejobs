"use client";
import BottomPanel from "@/app/components/Freelancer/ShowProfileDetails/BottomPanel";
import LeftPanel from "@/app/components/Freelancer/ShowProfileDetails/LeftPanel";
import RightPanel from "@/app/components/Freelancer/ShowProfileDetails/RightPanel";
import ShowDetailsHeader from "@/app/components/Freelancer/ShowProfileDetails/ShowDetailsHeader";
import ShowDetailsWrapper from "@/app/components/Freelancer/ShowProfileDetails/ShowDetailsWrapper";
import FreelancerLayout from "@/app/layout/FreelancerLayout";

export default function page() {
  return (
    <>
      <FreelancerLayout>
        <ShowDetailsWrapper>
          <ShowDetailsHeader />
          <div className="flex flex-col lg:flex-row gap-8 border-b border-gray-200">
            <LeftPanel />
            <RightPanel />
          </div>
          <BottomPanel />
        </ShowDetailsWrapper>
      </FreelancerLayout>
    </>
  );
}
