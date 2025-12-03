"use client";

import { useEffect, useState } from "react";
import jobApiStore from "@/app/store/jobStore";
import JobsList from "./JobsList";
import Pagination from "./Pagination";

export default function Jobs() {
  const { jobs, totalpagenum, fetchJobsByUser } = jobApiStore();
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    fetchJobsByUser(page, limit);
  }, [page]);

  return (
    <div className="rounded-lg border border-[rgba(68,68,68,0.08)] w-full mx-auto">
      <JobsList jobs={jobs} />

      <Pagination
        page={page}
        totalPages={totalpagenum}
        onPageChange={setPage}
      />
    </div>
  );
}
