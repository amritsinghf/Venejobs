"use client";
import Link from "next/link";
import HomeNavbar from "@/app/components/HomeNavbar";
import Footer from "@/app/components/Footer";
import { get_client_profile } from "../lib/auth/auth.api";
import { ROUTES } from "@/app/routes.js";
import { useEffect, useState } from "react";
import Jobs from "@/app/components/Home_Data/Jobs";
import Active_Contracts from "@/app/components/Home_Data/Active_Contracts";

export default function Home() {
  const [userData, setuserData] = useState({ name: "", email: "" });
  const [showData, setshowData] = useState(true);

  const getUserData = async () => {
    const res = await get_client_profile();
    setuserData({ name: res.data.user.name, email: res.data.user.email });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <HomeNavbar />

      <div className="w-full  max-w-[1420px]  mb-20 mt-30 mx-auto ">
        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-[#333333] font-semibold text-[44px]">
              Welcome back,{userData.name}
            </h2>

            <div className="flex justify-center gap-4 px-29 py-5">
              <Link
                href={ROUTES.JOB_POST.HOME}
                className="bg-blue-900 text-[#FAFAFA] text-center p-4 rounded w-[150px]"
              >
                Post a Job
              </Link>
              <Link
                href={""}
                className="bg-white text-[#666666] text-center p-4 rounded border w-[150px]"
              >
                Find Talent
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[#666666] text-[18px]">
              Here's what's happening with your projects today. Ready to find
              top talent?
            </p>
          </div>
        </div>

        <div className="w-full flex gap-8 mt-20">
          <h2 className="font-semibold text-[#333333] text-3xl">
            Your Job Posts & Active Contracts
          </h2>
        </div>
        <div className="w-full  flex  gap-8 mt-10">
          <button
            onClick={() => setshowData(true)}
            // className="bg-[#01237C] text-white font-bold border p-2 rounded"
            className={`font-bold border p-2 rounded ${
              showData ? "bg-[#01237C] text-white" : "bg-white text-black"
            }`}
          >
            All job posts
          </button>
          <button
            onClick={() => setshowData(false)}
            className={`font-bold border p-2 rounded ${
              !showData ? "bg-[#01237C] text-white" : "bg-white text-black"
            }`}
          >
            Your Active Contracts
          </button>
        </div>

        {showData && (
          <div className="mt-2 rounded">
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
