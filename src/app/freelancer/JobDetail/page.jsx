"use client";
import JobDetail from "@/app/components/JobDetail/JobDetail";
import JobDetailWrapper from "@/app/components/JobDetail/JobDetailWrapper";
import ReviewSection from "@/app/components/JobDetail/ReviewSection";
import RightPanel from "@/app/components/JobDetail/RightPanel";
import FreelancerLayout from "@/app/layout/FreelancerLayout";

export default function page() {
  

  return (
    <>
      <FreelancerLayout>
        <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1240px] 2xl:max-w-[1400px] mx-auto my-10 lg:my-20">
          <JobDetailWrapper>
            <JobDetail />

            <RightPanel />
          </JobDetailWrapper>
          <ReviewSection />
        </div>
      </FreelancerLayout>
    </>
  );
}
