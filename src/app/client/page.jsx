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
      <div className="w-full  max-w-[1420px]  mb-20 mt-30 mx-auto lg:px-3 md:px-3 sm:px-3 ">
        <div className="w-full flex flex-col  ">
          <div className="flex flex-row justify-between items-center ">
            <h2 className="text-heading font-semibold text-[44px]">
              Welcome back,{user?.name}
            </h2>

            <div className="flex justify-end gap-4 px-3 py-5">
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

          <div className="">
            <p className="text-paragraph text-[18px]">
              Here's what's happening with your projects today. Ready to find
              top talent?
            </p>
          </div>
        </div>

        <div className="w-full flex gap-8 mt-20 ">
          <h2 className="font-semibold text-heading text-3xl">
            Your Job Posts & Active Contracts
          </h2>
        </div>
        <div className="w-full  flex  gap-4 mt-10">
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
        <hr />

        {showData && (
          <div className="mt-2 rounded ">
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
