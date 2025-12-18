import Link from "next/link";
import { Routes } from "@/app/routes";
import React, { lazy, Suspense } from "react";

const JobCard = lazy(() => import("./JobCard"));

export default function JobsList({ jobs }) {
  return (
    <>
      {!jobs || jobs.length === 0 ? (
        <div className="flex justify-center mt-10">
          <div className=" px-6 py-8 text-center max-w-xl w-full">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              No Jobs Posted Yet
            </h2>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              You haven't created any job posts yet. Start by posting your first
              job.
            </p>

            <Link
              href={Routes.job_post.home}
              className="inline-block mt-5 bg-primary text-white font-medium px-5 py-2 rounded-md hover:bg-primary/90 transition"
            >
              Post a Job
            </Link>
          </div>
        </div>
      ) : (
        jobs?.map((item) => (
          <Suspense
            fallback={
              <div className="space-y-4 p-4 border border-gray-200 rounded-lg shadow animate-pulse">
                <div className="h-40 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            }
            key={item.id}
          >
            <JobCard key={item.id} item={item} />
          </Suspense>
        ))
      )}
    </>
  );
}
