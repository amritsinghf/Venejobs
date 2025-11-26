"use client";
import Link from "next/link";
import SvgIcon from "../components/SvgIcon";
import HomeNavbarFreelance from "../components/HomeNavbar_Freelance";
import Footer_Freelance from "../components/Footer_Freelance";
import { Routes } from "../routes";
import userApiStore from "@/app/store/userStore";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    fetchData();
  }, []);

  const { user, loading, error, fetchData } = userApiStore();

  return (
    <>
      <HomeNavbarFreelance />
      <div className="w-full  max-w-[1420px]  mb-55 mt-20 sm:mt-[120px]  mx-auto sm:px-3">
        <div className="flex justify-items-start flex-col gap-10  px-2 sm:px-0">
          <div className="flex flex-col justify-items-start max-w-4xl w-full ">
            <h2 className="text-heading font-semibold text-[24px] sm:text-[64px]">
              Welcome back, {user?.name}!
            </h2>
            <h2 className="text-heading font-semibold text-[24px] sm:text-[44px]">
              Find the best freelance jobs on Venezuelan and boost your career.
            </h2>
            <p className="text-paragraph text-sm sm:text-lg">
              Explore high-quality projects from top clients on Venezuelan.
              Showcase your skills, land great jobs, and take your freelance
              career to the next level.
            </p>
          </div>
          <div className="flex ">
            <Link
              href={Routes.freelancer.page}
              className="border bg-secondary text-white rounded px-3 py-2 sm:p-4 w-[150px] items-center flex gap-2"
            >
              Get Started <SvgIcon name="RightArrWhite" />
            </Link>
          </div>
        </div>
      </div>
      <Footer_Freelance />
    </>
  );
}
