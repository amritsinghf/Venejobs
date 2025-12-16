import Link from "next/link";
import JobCard from "./JobCard";
import { Routes } from "@/app/routes";

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
              You haven't created any job posts yet. Start by posting your first job.
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
        jobs?.map((item) => <JobCard key={item.id} item={item} />)
      )}
    </>
  );
}
