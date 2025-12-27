"use client";
import { useState, useEffect } from "react";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import ClientLayout from "@/app/layout/ClientLayout";
import JobTabContent from "@/app/components/jobs/client/JobDetail/JobTabContent";
import { useParams } from "next/navigation";
import jobApiStore from "@/app/store/jobStore";
import JobButtonTabs from "@/app/components/jobs/client/JobDetail/JobButtonTabs";

export default function JobDetail() {
  const [showData, setshowData] = useState("all");
  const params = useParams();
  const jobId = params.jobId;

  const tabs = [
    { id: "all", label: "All job posts" },
    { id: "review", label: "Review Proposals (2)" },
    { id: "invite", label: "Invite Freelancers" },
    { id: "hire", label: "Hire (0)" },
  ];

  const { job, loading, error, getJobById } = jobApiStore();

  useEffect(() => {
    if (jobId) {
      getJobById(jobId);
    }
  }, [jobId, getJobById]);

  if (loading) {
    return (
      <ClientLayout>
        <div className="text-center my-20 text-lg font-medium">
          Loading job details...
        </div>
      </ClientLayout>
    );
  }

  // Job not found
  if (!loading && (!job || error)) {
    return (
      <ClientLayout>
        <div className="text-center my-20">
          <h2 className="text-2xl font-semibold text-heading">
            No job available
          </h2>
          <p className="text-paragraph mt-2">
            The job you are looking for does not exist or has been removed.
          </p>
        </div>
      </ClientLayout>
    );
  }

  // job posted day calculation
  const createdDate = new Date(job.created_at);
  const now = new Date();
  const diffMs = now - createdDate;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return (
    <ClientLayout>
      <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1240px] 2xl:max-w-[1400px] mx-auto my-10 lg:my-20">
        <div className="flex flex-col gap-6 lg:gap-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:justify-between">
            <h2 className="text-2xl lg:text-[44px] text-heading font-semibold">
              {job.title}
            </h2>

            <div className="flex gap-6 items-center">
              <p className="font-medium text-base lg:text-lg text-paragraph">
                Posted {diffDays} days ago
              </p>
              <p className="font-medium text-base lg:text-lg text-paragraph">
                Worldwide
              </p>
              <SvgIcon name="Location" />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:gap-8">
            <JobButtonTabs tabs={tabs} showData={showData} setshowData={setshowData} />
            <JobTabContent showData={showData} />
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
