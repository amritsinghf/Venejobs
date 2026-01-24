"use client";
import Link from "next/link";
import { Routes } from "../routes";
import userApiStore from "@/app/store/userStore";
import { useState } from "react";
import SvgIcon from "../components/Utility/SvgIcon";
import FreelancerLayout from "../layout/FreelancerLayout";
import Loader from "../components/common/Loader";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user } = userApiStore();

  const [loading, setLoading] = useState(false);

  return (
    <FreelancerLayout>
      <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1240px] 2xl:max-w-[1400px] mx-auto my-10 lg:my-20">
        <div className="flex flex-col gap-5 lg:gap-6">
          <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl leading-10 lg:leading-snug tracking-normal max-w-4xl">
            Welcome,{" "}
            {user?.name
              ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
              : ""}
            ! <br />
            Find the best freelance jobs on Venezuelan and boost your career.
          </h1>

          <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide w-full lg:max-w-5xl">
            Explore high-quality projects from top clients on Venezuelan.
          </p>

          <Link
            href={Routes.freelancer.get_started}
            onClick={() => setLoading(true)}
            className={`
    bg-secondary text-white text-center w-40 sm:min-w-[180px] md:min-w-50
    h-[50px] sm:h-[52px] md:h-14
    font-semibold tracking-wide text-sm xl:text-base flex items-center justify-center 
    rounded transition-all duration-200 ease-out gap-2
    hover:scale-[1.02] active:scale-95
    hover:shadow-lg active:shadow-md
    ${loading ? "opacity-60 cursor-not-allowed pointer-events-none" : ""}
  `}
          >
            {loading ? (
              <Loader size={18} />
            ) : (
              <>
                Get Started
                <SvgIcon name="RightArrWhite" />
              </>
            )}
          </Link>

        </div>
      </div>
    </FreelancerLayout>
  );
}
