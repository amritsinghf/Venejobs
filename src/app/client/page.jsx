"use client";
import Link from "next/link";
import { Routes } from "@/app/routes.js";
import { useEffect, useState } from "react";
import Jobs from "@/app/components/Home_Data/Jobs";
import Active_Contracts from "@/app/components/Home_Data/Active_Contracts";
import userApiStore from "../store/userStore";
import Button from "../components/button/Button";
import ClientLayout from "../layout/ClientLayout";

export default function Home() {
  const [showData, setshowData] = useState(true);

  const { user, loading, error, fetchProfile } = userApiStore();
  const name = userApiStore((s) => s.user?.name || "");

  return (
    <>
      <ClientLayout>
        <div className="w-full  max-w-[1420px]  mb-20 mt-7 mx-auto">
          <div className="w-full flex flex-col sm:mx-0">
            <div className="flex flex-col sm:flex-row justify-between items-start px-1">
              <div className="flex flex-col gap-4 px-5 sm:px-0">
                <h2 className="text-heading font-semibold  text-[32px] sm:text-[44px]  sm:mx-3 mx-0">
                  Welcome back,{name}
                </h2>
                <p className="text-paragraph text-sm sm:text-lg sm:mx-3 mx-0">
                  Here's what's happening with your projects today. Ready to
                  find top talent?
                </p>
              </div>

              <div className="flex justify-end gap-4 py-5 px-5">
                <Link
                  href={Routes.job_post.home}
                  className="bg-primary text-[#FAFAFA] text-center py-2 px-2   lg:py-3 lg:px-8  rounded"
                >
                  Post a Job
                </Link>
                <Link
                  href={""}
                  className="bg-white text-paragraph text-center py-2 px-2 lg:py-3 lg:px-8 font-medium rounded"
                  style={{ boxShadow: "0 1px 2px rgba(0, 0, 0, 0.20)" }}
                >
                  Find Talent
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full flex gap-4  mt-9  ">
            <h2 className="font-semibold text-heading text-xl md:text-3xl px-5">
              Your Job Posts & Active Contracts
            </h2>
          </div>
          <div className="flex  gap-4 mt-10 ">
            <button
              onClick={() => setshowData(true)}
              className={`font-medium  px-5  `}
            >
              <p
                className={`px-4 sm:px-1 text-sm md:text-lg ${
                  showData
                    ? "text-blue-900 font-semibold"
                    : "bg-white text-paragraph"
                }`}
              >
                All job posts
              </p>
            </button>
            <button
              onClick={() => setshowData(false)}
              className={`font-medium  p-2`}
            >
              <p
                className={`${
                  !showData
                    ? "text-blue-900 font-semibold"
                    : "bg-white text-paragraph"
                }text-sm md:text-lg`}
              >
                Your Active Contracts
              </p>
            </button>
          </div>
          <hr className="mt-4 mx-5 border-gray-300 " />

          {showData && (
            <div className="mt-2 rounded px-2 ">
              <Jobs />
            </div>
          )}

          {!showData && (
            <div className="px-2">
              <Active_Contracts />
            </div>
          )}
        </div>
      </ClientLayout>
    </>
  );
}
