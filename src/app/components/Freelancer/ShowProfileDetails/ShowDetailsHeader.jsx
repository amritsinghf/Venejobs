import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/app/routes";
import SvgIcon from "@/app/components/Utility/SvgIcon";

const ShowDetailsHeader = ({ name, country }) => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center justify-between border-b border-gray-200 pb-6 lg:pb-10">
      <div className="flex items-center gap-8">
        <Image
          src="/freelancer.jpg"
          alt="Freelancer image"
          width={100}
          height={100}
          className="rounded-full w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
        />
        <div className="flex flex-col gap-3 lg:gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-heading text-lg lg:text-2xl font-semibold">
              {name}
            </h2>
            <SvgIcon name="ShareGreen" className="flex lg:hidden" />
          </div>

          <div className="flex gap-1">
            <p className="text-paragraph text-sm font-medium">{country}</p>
            <p className="text-paragraph text-sm font-medium">
              {" "}
              – 8:10 am local time
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <Link
            href={Routes.freelancer.profile.home}
            className="
    bg-secondary text-white text-center
    w-40 md:w-44
    h-12 sm:h-[50px]
    font-semibold tracking-wide
    text-sm xl:text-base

    inline-flex items-center justify-center gap-2
    rounded

    transition-all duration-200 ease-out
    hover:shadow-md
    hover:brightness-105
    active:brightness-95
  "
          >
            Profile Settings
          </Link>

          <Link
            href={Routes.freelancer.page}
            className="
              bg-white text-paragraph text-center w-40 sm:w-[180px] md:w-45 h-[50px] sm:h-[52px] md:h-15 
                font-semibold tracking-wide text-sm xl:text-base flex items-center justify-center 
                rounded transition-all duration-300
                "
            style={{
              boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            Find Jobs
          </Link>
        </div>
        <div className="hidden lg:flex justify-end items-center gap-4">
          <SvgIcon name="ShareGreen" />
          <p className="hidden lg:flex text-secondary font-medium">Share</p>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailsHeader;
