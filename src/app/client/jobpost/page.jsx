"use client";
import Link from "next/link";
import { Routes } from "@/app/routes.js";
import userApiStore from "@/app/store/userStore";
import ClientLayout from "@/app/layout/ClientLayout";
import SvgIcon from "@/app/components/SvgIcon";
import { useState } from "react";
import Loader from "@/app/components/common/Loader";

export default function Jobpost() {
  const { user } = userApiStore();

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <>
      <ClientLayout>
        <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1240px] 2xl:max-w-[1600px] mx-auto my-10 lg:my-20">
          <div className="flex flex-col gap-5 lg:gap-8">

            <h1 className="text-3xl lg:text-5xl text-heading font-bold leading-snug w-full lg:max-w-5xl">
              Welcome {user?.name}! <br />
              Let’s post your job and find the best Venezuelan talent.
            </h1>

            <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide w-full lg:max-w-5xl">
              Post your job and connect with exceptional Venezuelan talent. From creative minds to skilled professionals, find the perfect match to achieve outstanding results.
            </p>

            <Link
              href={Routes.job_post.form}
              onClick={handleClick}
              className={`bg-primary text-white text-center w-[180px] md:w-44 h-12 sm:h-[50px] lg:h-13 
              font-semibold tracking-wide text-sm xl:text-base flex items-center justify-center rounded 
              transition-all duration-300 gap-2
              ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <Loader size={18} border={3} color="white" />

              ) : (
                <>
                  Post a Job <SvgIcon name="RightArrWhite" />
                </>
              )}
            </Link>
          </div>
        </div>
      </ClientLayout>
    </>
  );
}
