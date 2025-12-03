"use client";

import { useEffect, useState } from "react";
import jobApiStore from "@/app/store/jobStore";
import JobsList from "./JobsList";
import Pagination from "./Pagination";

export default function Jobs() {
  const { jobs, totalpagenum, fetchJobsByUser } = jobApiStore();
    console.log(jobs, ">>>>>>>>>")
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    fetchJobsByUser(page, limit);
  }, [page]);

  return (
    <div className="rounded-2xl border border-gray-300 w-full mx-auto">
      <JobsList jobs={jobs} />

      <Pagination
        page={page}
        totalPages={totalpagenum}
        onPageChange={setPage}
      />
    </div>
  );
}
