"use client";
import Link from "next/link";
import { Routes } from "../routes";
import userApiStore from "@/app/store/userStore";
import { useState } from "react";
import SvgIcon from "../components/Utility/SvgIcon";
import FreelancerLayout from "../layout/FreelancerLayout";
import Loader from "../components/common/Loader";

export default function Page() {
  const { user, error, fetchProfile } = userApiStore();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <>
      <FreelancerLayout>
        <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1240px] 2xl:max-w-[1400px] mx-auto my-10 lg:my-20">
          {/* Left: Welcome Text */}
          <div className="flex flex-col gap-5 lg:gap-8">
            <h1 className="text-3xl lg:text-5xl text-heading font-bold leading-snug w-full lg:max-w-5xl">
              Welcome back, {user?.name}! <br />
              Find the best freelance jobs on Venezuelan and boost your career.
            </h1>
            <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide w-full lg:max-w-5xl">
              Explore high-quality projects from top clients on Venezuelan.
              Showcase your skills, land great jobs, and take your freelance
              career to the next level.
            </p>

            <Link
              href={Routes.freelancer.page}
              onClick={handleClick}
              className={`bg-secondary text-white text-center w-[180px] md:w-44 h-12 sm:h-[50px] lg:h-13 
              font-semibold tracking-wide text-sm xl:text-base flex items-center justify-center rounded 
              transition-all duration-300 gap-2
              ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <Loader size={18} border={3} color="white" />
              ) : (
                <>
                  Get Started <SvgIcon name="RightArrWhite" />
                </>
              )}
            </Link>
          </div>
        </div>
      </FreelancerLayout>
    </>
  );
}
