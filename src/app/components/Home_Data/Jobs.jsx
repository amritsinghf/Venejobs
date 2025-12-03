"use client";

import { useEffect, useState } from "react";
import SvgIcon from "../SvgIcon";
import { get_jobByClient } from "@/app/lib/jobs";
import Button from "../button/Button";
import jobApiStore from "@/app/store/jobStore";

export default function Jobs() {
  const { jobs, pagenum, totalpagenum, loading, error, fetchJobsByUser } =
    jobApiStore();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  useEffect(() => {
    fetchJobsByUser(page, limit);
  }, [page]);

  useEffect(() => {
    setTotalPages(totalpagenum);
  }, [totalpagenum]);

  const selectPage = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div className="rounded-2xl mt-10 border border-gray-300 w-full  mx-auto">
      {jobs?.map((item) => (
        <div
          className="border-b border-gray-300 rounded py-2 px-3"
          key={item.id}
        >
          <div className="w-full flex  rounded p-2 justify-between flex-wrap">
            <div className="flex flex-col p-2 gap-2">
              <h3 className="text-heading font-medium text-2xl">
                {item.title}
              </h3>
              <p className="text-paragraph text-[16px]">Posted 4 days ago</p>
              <div className="flex flex-row items-center">
                <p className="text-heading font-semibold">
                  ${item.budget_amount}: &nbsp;
                </p>
                <p className="text-paragraph text-sm">{item.budget_type}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-start md:items-center gap-2 sm:gap-10">
              <div className="flex items-center gap-5 lg:gap-8 flex-wrap">
                <span className="text-paragraph font-medium border px-1 py-2 sm:p-4 border-gray-100">
                  Proposals (2)
                </span>
                <span className="text-paragraph font-medium border px-1 py-2 sm:p-4 border-gray-100">
                  Message (1)
                </span>
                <span className="text-paragraph font-medium border px-1 py-2 sm:p-4 border-gray-100">
                  Shortlist (2)
                </span>
              </div>
              <div className="flex justify-start items-center lg:justify-between  gap-8 mt-2 md:mt-0">
                <Button className="bg-primary text-white border h-10 md:h-15 px-4  rounded cursor-pointer">
                  View details
                </Button>
                <Button className="flex flex-col items-center justify-center text-paragraph text-[14px]">
                  <SvgIcon name="More" /> More
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-end py-6 px-6">
        <div className="flex justify-center gap-3 items-center">
          {/* Prev Button */}
          <button
            disabled={page === 1}
            onClick={() => selectPage(page - 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border 
        cursor-pointer transition
        ${page === 1 ? "opacity-40" : "bg-white text-paragraph"}`}
          >
            <SvgIcon name="Control_prev" />
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => {
            const active = page === i + 1;

            return (
              <button
                key={i}
                onClick={() => selectPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full 
    border border-gray-300 leading-none transition font-semibold
    ${active ? "bg-primary text-white" : "bg-white text-paragraph"}`}
              >
                {i + 1}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            disabled={page === totalPages}
            onClick={() => selectPage(page + 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border 
        cursor-pointer transition
        ${page === totalPages ? "opacity-40" : "bg-white text-paragraph"}`}
          >
            <SvgIcon name="Control_next" />
          </button>
        </div>
      </div>
    </div>
  );
}
