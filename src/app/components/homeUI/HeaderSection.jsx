"use client";
import Link from "next/link";
import { Routes } from "@/app/routes.js";
import SvgIcon from "../SvgIcon";
import { useState } from "react";
import Loader from "../common/Loader";

export default function HeaderSection({ name }) {

    const [loadingBtn, setLoadingBtn] = useState(null);

    const handleClick = (type) => {
        setLoadingBtn(type);
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">

            {/* Left: Welcome Text */}
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl lg:text-4xl text-heading font-bold leading-tight leading-tight">
                    Welcome back, {name}
                </h1>
                <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide">
                    Here's what's happening with your projects today. Ready to find top talent?
                </p>
            </div>

            {/* Right: Buttons */}
            <div className="flex items-center justify-end gap-4 md:gap-6 lg:gap-8">

                {/* Post Job */}
                <Link
                    href={Routes.job_post.home}
                    onClick={() => handleClick("post")}
                    className={`
                        bg-primary text-white text-center w-40 md:w-44 h-12 sm:h-[50px] lg:h-13 
                        font-semibold tracking-wide text-sm xl:text-base flex items-center justify-center 
                        rounded transition-all duration-300 gap-2
                        ${loadingBtn === "post" ? "opacity-60 cursor-not-allowed" : ""}
                    `}
                >
                    {loadingBtn === "post" ? (
                        <Loader size={18} border={3} color="white" />
                    ) : (
                        <>
                            Post a Job <SvgIcon name="RightArrWhite" />
                        </>
                    )}
                </Link>

                {/* Find Talent */}
                <Link
                    href=""
                    onClick={() => handleClick("talent")}
                    className={`
                        bg-white text-paragraph text-center w-40 md:w-44 h-12 sm:h-[50px] lg:h-13 
                        font-semibold tracking-wide text-sm xl:text-base flex items-center justify-center 
                        rounded transition-all duration-300
                        ${loadingBtn === "talent" ? "opacity-60 cursor-not-allowed" : ""}
                    `}
                    style={{
                        boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
                        border: "1px solid rgba(0,0,0,0.08)"
                    }}
                >
                    {loadingBtn === "talent" ? (
                        <Loader size={18} border={3} color="black" />
                    ) : (
                        "Find Talent"
                    )}
                </Link>

            </div>

        </div>
    );
}
