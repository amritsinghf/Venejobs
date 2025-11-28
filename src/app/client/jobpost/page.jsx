"use client";
import Footer from "@/app/components/Footer";
import HomeNavbar from "@/app/components/HomeNavbar";
import Link from "next/link";
import { Routes } from "@/app/routes.js";
import userApiStore from "@/app/store/userStore";

export default function Jobpost() {
  const { user, loading, error, fetchProfile } = userApiStore();
  return (
    <>
      <HomeNavbar />
      <div className="w-full  max-w-[1420px]  mb-20 mt-30 mx-auto ">
        <div className=" flex justify-items-start flex-col gap-8 py-36 px-10 ">
          <div className="flex flex-col justify-items-start max-w-[700px] w-full">
            <h2 className="text-heading font-semibold text-[44px]">
              Welcome back, {user?.name}!
            </h2>
            <h2 className="text-heading font-semibold text-[44px]">
              Let’s post your job and find the best Venezuelan talent.
            </h2>
            <p className="text-paragraph text-[18px]">
              Post your job and connect with exceptional Venezuelan talent. From
              creative minds to skilled professionals, find the perfect match to
              achieve outstanding results.
            </p>
          </div>
          <div className="flex">
            <Link
              href={Routes.job_post.form}
              className="border bg-primary text-white rounded p-4 w-[200px]"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
