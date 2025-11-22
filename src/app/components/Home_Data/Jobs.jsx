"use client";

import { get_jobByUser } from "@/app/lib/jobs";
import jobApiStore from "@/app/store/jobStore";
import { useEffect, useState } from "react";
import SvgIcon from "../SvgIcon";

export default function Jobs() {
  const { data, loading, error, fetchData } = jobApiStore();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (data.length === 0) fetchData();
  }, [data, fetchData]);

  const selectPage = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPage &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // const [jobData, setjobData] = useState([]);

  // const getJobsData = async () => {
  //   const res = await get_jobByUser();
  //   setjobData(res.jobs);
  //   console.log(res.jobs);
  // };

  // useEffect(() => {
  //   getJobsData();
  // }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="rounded-2xl mt-10 border border-gray-300">
      {data.map((item) => (
        <div
          className="border-b border-gray-300 rounded py-2 px-3"
          key={item.id}
        >
          <div className="w-full flex  rounded p-2 justify-between ">
            <div className="flex flex-col p-2 gap-2">
              <h3 className="text-[#333333] font-medium text-2xl">
                {item.title}
              </h3>
              <p className="text-[#666666] text-[16px]">Posted 4 days ago</p>
              <div className="flex flex-row items-center">
                <p className="text-[#333333] font-semibold">
                  ${item.budget_amount}: &nbsp;
                </p>
                <p className="text-[#666666] text-sm">{item.budget_type}</p>
              </div>
            </div>

            <div className="flex justify-around  w-[700px] items-center mx-5">
              <button className="text-[#666666] font-medium border p-4 border-gray-100">
                Proposals (2)
              </button>
              <button className="text-[#666666] font-medium border p-4 border-gray-100">
                Message (1)
              </button>
              <button className="text-[#666666] font-medium border p-4 border-gray-100">
                Shortlist (2)
              </button>
              <button className="bg-[#01237C] text-white border h-12 py-2 px-8  rounded cursor-pointer">
                View details
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-end py-6 px-6">
        <div className="flex justify-center gap-5 items-center">
          <button
            disabled={page === 1}
            onClick={() => selectPage(page - 1)}
            className="cursor-pointer"
          >
            <SvgIcon name="Control_prev" />
          </button>

          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              onClick={() => selectPage(i + 1)}
              className={`${
                page === i + 1
                  ? "bg-blue-900 text-white border rounded-full "
                  : "bg-white text-[#666666] border rounded-full font-medium px-2 py-1"
              }px-3 py-1  cursor-pointer`}
            >
              {i + 1}
            </span>
          ))}

          <button
            disabled={page === totalPage}
            onClick={() => selectPage(page + 1)}
            className="cursor-pointer"
          >
            <SvgIcon name="Control_next" />
          </button>
        </div>
      </div>
      {/* {jobData.map((item) => (
        <div className="">
          <div className="w-full flex  border rounded p-2  justify-between ">
            <div className="flex flex-col p-4">
              <h3 className="text-[#333333] font-semibold text-2xl">
                {item.title}
              </h3>
              <p className="text-[#666666] text-[16px]">Posted 4 days ago</p>
              <div className="flex flex-row items-center">
                <p className="text-[#333333] font-semibold">
                  ${item.budget_amount}:
                </p>
                <p className="text-[#666666] text-sm">{item.budget_type}</p>
              </div>
            </div>

            <div className="flex justify-around  w-[700px] items-center">
              <button className="text-[#666666]">Proposals (2)</button>
              <button className="text-[#666666]">Message (1)</button>
              <button className="text-[#666666]">Shortlist (2)</button>
              <button className="bg-[#01237C] text-white border h-10 p-1 rounded">
                View details
              </button>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
}
