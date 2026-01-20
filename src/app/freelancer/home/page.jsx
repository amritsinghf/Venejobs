"use client";
// import AllJobs from "@/app/components/HomeData/AllJobs";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import Button from "@/app/components/button/Button";
import FreelancerLayout from "@/app/layout/FreelancerLayout";
import { Routes } from "@/app/routes";
import freelancerApiStore from "@/app/store/freelancerApiStore";
import { useRouter } from "next/navigation";

import React, { lazy, Suspense, useEffect } from "react";

const AllJobs = lazy(
  () => import("../../components/Freelancer/HomeData/AllJobs"),
);

export default function Home() {
  const router = useRouter();

  const { freelanceDetails, getPersonalDetails, personalDetailLoading } =
    freelancerApiStore();

  // fetch only once
  useEffect(() => {
    if (!freelanceDetails || Object.keys(freelanceDetails).length === 0) {
      getPersonalDetails();
    }
  }, [freelanceDetails, getPersonalDetails]);

  // redirect guard
  useEffect(() => {
    if (
      !personalDetailLoading &&
      freelanceDetails?.freelancerProfile === null
    ) {
      router.replace(Routes.freelancer.home);
    }
  }, [personalDetailLoading, freelanceDetails, router]);

  return (
    <>
      <FreelancerLayout>
        <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1240px] 2xl:max-w-[1400px] mx-auto my-10 lg:my-20">
          <div className="flex flex-col gap-5">
            <div className="rounded-lg p-5 md:px-8 md:py-10 flex flex-col gap-6 border border-[rgba(68,68,68,0.08)] bg-[#F8F8FD]">
              <div className="flex flex-col gap-3 lg:gap-2">
                <h2 className="text-2xl lg:text-2xl xl:text-3xl text-heading font-bold leading-snug">
                  Find Projects That Match Your Passion With Venejobs
                </h2>

                <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide">
                  Explore hand-picked freelance jobs tailored to your skills.
                  Start earning on your own terms with Venejobs.
                </p>
              </div>
              <Button
                className="bg-secondary text-white text-center flex items-center justify-center rounded 
              transition-all duration-300 gap-2"
              >
                Learn More <SvgIcon name="NextArrow" />
              </Button>
            </div>

            <div className="max-w-[1040px]  h-auto  w-full  flex  mt-10 flex-col">
              <div className="">
                <label
                  htmlFor="search"
                  className="block mb-2.5 text-sm font-medium text-heading sr-only "
                >
                  Search
                </label>
                <div className="relative ">
                  <span className="absolute inset-y-0 px-4 py-2 flex items-center  ">
                    <SvgIcon name="Search_Icon" size={18}/>
                  </span>
                  <input
                    type="search"
                    id="search"
                    className="block w-full pl-12 pr-4 py-1 md:py-3 
                    rounded-4xl  text-gray-900 
                    border border-lightborder focus:border-secondary outline-none
                    placeholder:text-gray-400 shadow md:text-lg font-medium"
                    placeholder="Search"
                    required
                  />
                </div>
              </div>
            </div>
            <Suspense fallback={null}>
              <AllJobs />
            </Suspense>
          </div>
        </div>
      </FreelancerLayout>
    </>
  );
}
