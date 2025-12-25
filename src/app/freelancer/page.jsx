"use client";
import Link from "next/link";
import { Routes } from "../routes";
import userApiStore from "@/app/store/userStore";
import { useEffect, useState } from "react";
import SvgIcon from "../components/Utility/SvgIcon";
import FreelancerLayout from "../layout/FreelancerLayout";
import Loader from "../components/common/Loader";
import freelanceApiStore from "../store/FreelancerStore";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { user } = userApiStore();
  const { FreelanceDetails, getPersonalDetails, loadingData } =
    freelanceApiStore();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPersonalDetails();
  }, [getPersonalDetails]);

  useEffect(() => {
    if (!loadingData && FreelanceDetails?.freelancerProfile) {
      router.push(Routes.freelancer.page);
    }
  }, [loadingData, FreelanceDetails, router]);

  if (loadingData) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // Prevent rendering while redirecting
  if (FreelanceDetails?.freelancerProfile) {
    return null;
  }

  return (
    <FreelancerLayout>
      <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1240px] 2xl:max-w-[1400px] mx-auto my-10 lg:my-20">
        <div className="flex-1 flex flex-col gap-6 lg:gap-7">
          <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl leading-10 lg:leading-[60px] tracking-normal max-w-4xl">
            Welcome back, {user?.name}! <br />
            Find the best freelance jobs on Venezuelan and boost your career.
          </h1>

          <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide w-full lg:max-w-5xl">
            Explore high-quality projects from top clients on Venezuelan.
          </p>

          <Link
            href={Routes.freelancer.get_started}
            onClick={() => setLoading(true)}
            className={`bg-secondary text-white text-center w-[180px] md:w-44 h-12 sm:h-[50px] lg:h-13 
              font-semibold tracking-wide text-sm xl:text-base flex items-center justify-center rounded 
              transition-all duration-300 gap-2
            ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {loading ? <Loader size={18} /> : "Get Started"}
            <SvgIcon name="RightArrWhite" />
          </Link>
        </div>
      </div>
    </FreelancerLayout>
  );
}
