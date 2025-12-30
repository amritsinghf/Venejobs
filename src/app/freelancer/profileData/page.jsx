"use client";
import ShowDetailsWrapper from "@/app/components/Freelancer/ShowProfileDetails/ShowDetailsWrapper";
import FreelancerLayout from "@/app/layout/FreelancerLayout";
import { Routes } from "@/app/routes";
import freelanceApiStore from "@/app/store/FreelancerStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import React, { lazy, Suspense } from "react";

function lazyWithDelay(factory, delay = 100) {
  return lazy(() =>
    Promise.all([factory(), new Promise((res) => setTimeout(res, delay))]).then(
      ([moduleExports]) => moduleExports
    )
  );
}
const ShowDetailsHeader = lazyWithDelay(() =>
  import("@/app/components/Freelancer/ShowProfileDetails/ShowDetailsHeader")
);

const LeftPanel = lazyWithDelay(() =>
  import("@/app/components/Freelancer/ShowProfileDetails/LeftPanel")
);

const RightPanel = lazyWithDelay(() =>
  import("@/app/components/Freelancer/ShowProfileDetails/RightPanel")
);

const BottomPanel = lazyWithDelay(() =>
  import("@/app/components/Freelancer/ShowProfileDetails/BottomPanel")
);

export default function page() {
  const router = useRouter();
  const { FreelanceDetails, getPersonalDetails, loadingData } =
    freelanceApiStore();

  const { name, country } = FreelanceDetails || {};
  const { freelancerProfile } = FreelanceDetails || {};

  useEffect(() => {
    getPersonalDetails();
  }, []);

  useEffect(() => {
    if (!loadingData && FreelanceDetails?.freelancerProfile===null) {
      router.push(Routes.freelancer.page);
    }
  }, [loadingData, FreelanceDetails, router]);
  
  return (
    <>
      <FreelancerLayout>
        <ShowDetailsWrapper>
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen">
                <div className="flex flex-row gap-2">
                  <div
                    className="w-4 h-4 rounded-full bg-secondary animate-bounce"
                    style={{ animationDelay: "0s" }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full bg-secondary animate-bounce"
                    style={{ animationDelay: "-0.3s" }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full bg-secondary animate-bounce"
                    style={{ animationDelay: "-0.5s" }}
                  ></div>
                </div>
              </div>
            }
          >
            <ShowDetailsHeader name={name} country={country} />

            <div className="flex flex-col lg:flex-row gap-8 border-b border-gray-200">
              <LeftPanel freelancerProfile={freelancerProfile}/>
              <RightPanel freelancerProfile={freelancerProfile} />
            </div>
            <BottomPanel freelancerProfile={freelancerProfile} />
          </Suspense>
        </ShowDetailsWrapper>
      </FreelancerLayout>
    </>
  );
}
