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
        <div className="flex flex-col gap-5 lg:gap-8">
          <h1 className="text-3xl lg:text-5xl text-heading font-bold">
            Welcome back, {user?.name}! <br />
            Find the best freelance jobs on Venezuelan.
          </h1>

          <p className="text-gray-500">
            Explore high-quality projects from top clients on Venezuelan.
          </p>

          <Link
            href={Routes.freelancer.get_started}
            onClick={() => setLoading(true)}
            className={`bg-secondary text-white w-44 h-12 flex items-center gap-3 justify-center rounded font-semibold
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
