"use client";

import { useState } from "react";
import userApiStore from "../store/userStore";

import ClientLayout from "../layout/ClientLayout";
import HeaderSection from "../components/homeUI/HeaderSection";
import JobTabs from "../components/homeUI/JobTabs";
import JobContent from "../components/homeUI/JobContent";

export default function Home() {
  const [showData, setshowData] = useState(true);
  const name = userApiStore((s) => s.user?.name || "");

  return (
    <ClientLayout>
      <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1600px] mx-auto my-10 lg:my-20">
        <div className="flex flex-col gap-12">

          <HeaderSection name={name} />

          <div className="flex flex-col gap-10">
            <h2 className="text-2xl lg:text-3xl text-heading font-bold leading-9">
              Your Job Posts & Active Contracts
            </h2>

            <div className="">
              <JobTabs showData={showData} setshowData={setshowData} />

              <JobContent showData={showData} />
            </div>

          </div>

        </div>
      </div>
    </ClientLayout>
  );
}
