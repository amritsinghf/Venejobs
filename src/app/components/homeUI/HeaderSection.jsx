"use client";
import Link from "next/link";
import { Routes } from "@/app/routes.js";

export default function HeaderSection({ name }) {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">

            {/* Left: Welcome Text */}
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl lg:text-4xl text-heading font-bold leading-tight">
                    Welcome back, {name}
                </h1>
                <p className="text-gray-500 text-base md:text-base font-medium leading-7">
                    Here's what's happening with your projects today. Ready to find top talent?
                </p>
            </div>

            {/* Right: Buttons */}
            <div className="flex justify-end gap-6 lg:gap-8">
                <Link
                    href={Routes.job_post.home}
                    className="bg-primary text-white text-center w-[180px] md:w-44 h-12 sm:h-[50px] 
          font-semibold tracking-wide text-sm sm:text-base flex items-center justify-center 
          rounded transition-all duration-300"
                >
                    Post a Job
                </Link>

                <Link
                    href=""
                    className="bg-white text-paragraph text-center w-[180px] md:w-44 h-12 sm:h-[50px]
          font-semibold tracking-wide text-sm sm:text-base flex items-center justify-center 
          rounded transition-all duration-300"
                    style={{
                        boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
                        border: "1px solid rgba(0,0,0,0.08)"
                    }}
                >
                    Find Talent
                </Link>
            </div>

        </div>
    );
}
