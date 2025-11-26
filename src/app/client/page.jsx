"use client";
import Link from "next/link";
import HomeNavbar from "@/app/components/HomeNavbar";
import Footer from "@/app/components/Footer";
import { Routes } from "@/app/routes.js";
import { useEffect, useState } from "react";
import Jobs from "@/app/components/Home_Data/Jobs";
import Active_Contracts from "@/app/components/Home_Data/Active_Contracts";
import userApiStore from "../store/userStore";

export default function Home() {
  const [showData, setshowData] = useState(true);

  const { user, loading, error, fetchData } = userApiStore();

  return (
    <>
      <HomeNavbar />
      <div className="w-[550px] sm:w-full  max-w-[1420px]  mb-20 mt-7 mx-auto ">
        <div className="w-full flex flex-col  mx-5 sm:mx-0">
          <div className="flex flex-col sm:flex-row justify-between items-center ">
            <div className="flex flex-col">
              <h2 className="text-heading font-semibold text-[32px] sm:text-[44px] mx-30 sm:mx-1">
                Welcome back,{user?.name}
              </h2>
              <p className="text-paragraph text-sm sm:text-lg sm:mx-1">
                Here's what's happening with your projects today. Ready to find
                top talent?
              </p>
            </div>

            <div className="flex justify-end gap-4 px-4 py-5 ">
              <Link
                href={Routes.job_post.home}
                className="bg-[#01237C] text-[#FAFAFA] text-center py-3 px-4 h-[50px] rounded w-[150px]"
              >
                Post a Job
              </Link>
              <Link
                href={""}
                className="bg-white text-paragraph text-center py-3 px-4 h-[50px] font-semibold rounded border w-[150px]"
              >
                Find Talent
              </Link>
            </div>
          </div>

          
        </div>

        <div className="w-full flex gap-4  mt-9 mx-10 sm:mx-0 ">
          <h2 className="font-semibold text-heading text-3xl">
            Your Job Posts & Active Contracts
          </h2>
        </div>
        <div className="w-full  flex  gap-4 mt-10 mx-10 sm:mx-0">
          <button
            onClick={() => setshowData(true)}
            className={`font-medium  p-2  `}
          >
            <p
              className={`${
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
            className={`font-medium  p-2  `}
          >
            <p
              className={`${
                !showData
                  ? "text-blue-900 font-semibold"
                  : "bg-white text-paragraph"
              }`}
            >
              Your Active Contracts
            </p>
          </button>
        </div>
        <hr className="mx-10 sm:mx-0"/>

        {showData && (
          <div className="mt-2 rounded px-2 ">
            <Jobs />
          </div>
        )}

        {!showData && (
          <div>
            <Active_Contracts />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
