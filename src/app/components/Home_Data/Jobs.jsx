"use client";

import { get_jobByUser } from "@/app/lib/jobs";
import jobApiStore from "@/app/store/jobStore";
import { useEffect, useState } from "react";

export default function Jobs() {
  const { data, loading, error, fetchData } = jobApiStore();

  useEffect(() => {
    if (data.length === 0) fetchData();
  }, [data, fetchData]);

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
    <>
      {data.map((item) => (
        <div className="" key={item.id}>
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
      ))}
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
    </>
  );
}
