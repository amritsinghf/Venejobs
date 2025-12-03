"use client";
import Link from "next/link";
import { Routes } from "@/app/routes.js";
import userApiStore from "@/app/store/userStore";
import ClientLayout from "@/app/layout/ClientLayout";
import SvgIcon from "@/app/components/SvgIcon";

export default function Jobpost() {
  const { user, loading, error, fetchProfile } = userApiStore();
  return (
    <>
      <ClientLayout>
        <div className="w-full max-w-[1420px]  mb-20 lg:mt-20 mt-20  px-4 2xl:mx-auto ">
          <div className="flex justify-items-start flex-col gap-8 px-3 lg:px-3">
            <div className="flex flex-col justify-items-start  w-full lg:max-w-[1000px] gap-6 ">
              <div>
                <h2 className="text-heading font-semibold text-2xl md:text-4xl lg:text-6xl">
                  Welcome {user?.name}!
                </h2>
                <h2 className="text-heading font-semibold text-2xl md:text-4xl lg:text-6xl">
                  Let’s post your job and find the best Venezuelan talent.
                </h2>
              </div>

              <div>
                <p className="text-paragraph text-base md:text-xl lg:text-lg">
                  Post your job and connect with exceptional Venezuelan talent.
                  From creative minds to skilled professionals, find the perfect
                  match to achieve outstanding results.
                </p>
              </div>
            </div>
            <div className="flex mt-2 mb-5">
              <Link
                href={Routes.job_post.form}
                className="border bg-primary text-white rounded py-3 px-3 md:py-4 md:px-8 flex items-center gap-2"
              >
                Post a Job <SvgIcon name="RightArrWhite"/>
              </Link>
            </div>
          </div>
        </div>

        
      </ClientLayout>
    </>
  );
}
