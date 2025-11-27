"use client";

import jobApiStore from "@/app/store/jobStore";
import { useEffect, useState } from "react";
import SvgIcon from "../SvgIcon";
import { get_jobByClient } from "@/app/lib/jobs";
import Button from "../ui/Button";

export default function Jobs() {
  const [jobsData, setjobsData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const get_users_job = async () => {
    const res = await get_jobByClient(page, limit);
    setjobsData(res.jobs);
    setPage(res.page);
    setTotalPages(res.totalPages);
  };

  useEffect(() => {
    get_users_job();
  }, [page]);

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
    <div className="rounded-2xl mt-10 border border-gray-300 w-full mx-5 sm:mx-0">
      {jobsData.map((item) => (
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

            <div className="flex justify-start items-center  gap-4 flex-wrap  sm:flex-wrap">
              <div className="flex items-center gap-8 flex-wrap">
              <Button className="text-paragraph font-medium border px-2 py-1 sm:p-4 border-gray-100">
                Proposals (2)
              </Button>
              <Button className="text-paragraph font-medium border px-2 py-1 sm:p-4 border-gray-100">
                Message (1)
              </Button>
              <Button className="text-paragraph font-medium border px-2 py-1 sm:p-4 border-gray-100">
                Shortlist (2)
              </Button>
            </div>
            <div className="flex justify-between gap-6">
              <Button className="bg-[#01237C] text-white border  py-2 px-8 sm:p-4  rounded cursor-pointer">
                View details
              </Button>
              <Button className="flex flex-col items-center text-paragraph text-[14px]">
                  <SvgIcon name="More"/> More 
              </Button>
            </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-end py-6 px-6">
        <div className="flex justify-center gap-5 items-center">
          <Button
            disabled={page === 1}
            onClick={() => selectPage(page - 1)}
            className={`cursor-pointer ${page === 1 ? "opacity-40" : ""}`}
          >
            <SvgIcon name="Control_prev" />
          </Button>

          {[...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              onClick={() => selectPage(i + 1)}
              className={`cursor-pointer px-3 py-1 border rounded-full ${
                page === i + 1
                  ? "bg-primary text-white"
                  : "bg-white text-paragraph font-medium"
              }`}
            >
              {i + 1}
            </span>
          ))}

          <Button
            disabled={page === totalPages}
            onClick={() => selectPage(page + 1)}
            className={`cursor-pointer ${
              page === totalPages ? "opacity-40" : ""
            }`}
          >
            <SvgIcon name="Control_next" />
          </Button>
        </div>
      </div>
    </div>
  );
}
