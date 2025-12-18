"use client";
// import AllJobs from "@/app/components/Home_Data/AllJobs";
import SvgIcon from "@/app/components/SvgIcon";
import Button from "@/app/components/button/Button";
import FreelancerLayout from "@/app/layout/FreelancerLayout";

import React, { lazy, Suspense } from "react";

const AllJobs = lazy(() => import("../../components/Home_Data/AllJobs"));

export default function Home() {
  return (
    <>
      <FreelancerLayout>
        <div className="w-full max-w-[1420px] mb-20 mt-30 sm:mx-auto">
          <div className="mx-4 sm:mx-6 md:mx-6  bg-gray-100 rounded-2xl p-5 md:px-8 md:py-5 flex flex-col gap-4 border">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-heading font-semibold text-[24px] sm:text-[44px]">
                Find Projects That Match Your Passion With Venejobs
              </h2>
            </div>

            <div>
              <p className="text-paragraph text-sm sm:text-lg">
                Explore hand-picked freelance jobs tailored to your skills.
                Start earning on your own terms with Venejobs.
              </p>
              <Button className="bg-secondary p-2 sm:p-4 rounded text-white mt-5 flex items-center gap-1">
                Learn More <SvgIcon name="NextArrow" />
              </Button>
            </div>
          </div>

          <div className="max-w-[1200px]  h-auto  w-full  flex  mt-10 flex-col">
            <div className="p-5">
              <label
                htmlFor="search"
                className="block mb-2.5 text-sm font-medium text-heading sr-only "
              >
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 px-4   flex items-center  ">
                  <SvgIcon name="Search_Icon" />
                </span>
                <input
                  type="search"
                  id="search"
                  className="block w-full px-10 py-2 rounded-2xl text-sm text-gray-900 shadow-2xs  bg-white font-medium"
                  placeholder="Search"
                  required
                />
              </div>
            </div>
            <Suspense
              fallback={
                <div className="space-y-4 p-4 border border-gray-200 rounded-lg shadow animate-pulse">
                  <div className="h-40 bg-gray-200 rounded"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              }
            >
              <AllJobs />
            </Suspense>
          </div>
        </div>
      </FreelancerLayout>
    </>
  );
}
