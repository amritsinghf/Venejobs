import Link from "next/link";
import JobCard from "./JobCard";
import { Routes } from "@/app/routes";

export default function JobsList({ jobs }) {
  return (
    <>
      {!jobs || jobs.length === 0 ? (
        <div className="flex flex-wrap justify-center">
          <h2 className="flex justify-center font-medium text-lg px-3 md:text-2xl mt-2">
          No jobs available. Please Add it First. &nbsp;<Link className="text-primary cursor-pointer" href={Routes.job_post}>Post Job</Link>
        </h2>
        </div>
        
      ) : (
        jobs?.map((item) => <JobCard key={item.id} item={item} />)
      )}
    </>
  );
}
