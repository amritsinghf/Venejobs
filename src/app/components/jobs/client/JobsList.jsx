import Link from "next/link";
import { Routes } from "@/app/routes";
import React, { lazy, Suspense } from "react";
import JobCardSkeleton from "../../Skeletons/JobCardSkeleton";

const JobCard = lazy(() => import("./JobCard"));

export default function JobsList({ jobs, loading, hasFetched }) {

  if (!hasFetched) {
    return (
      <div className="space-y-6 p-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    );
  }


  if (hasFetched && (!jobs || jobs.length === 0)) {
    return (
      <div className="flex justify-center mt-12">
        <div className="px-6 py-8 text-center max-w-xl w-full">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            No Jobs Posted Yet
          </h2>
          <p className="text-gray-500 mt-2">
            You haven't created any job posts yet.
          </p>
          <Link
            href={Routes.job_post.home}
            className="inline-block mt-5 bg-primary text-white px-5 py-2 rounded-md"
          >
            Post a Job
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Suspense
        fallback={
          <div className="space-y-6 p-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <JobCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        {jobs.map((item) => (
          <JobCard key={item.id} item={item} />
        ))}
      </Suspense>
    </div>
  );

}
