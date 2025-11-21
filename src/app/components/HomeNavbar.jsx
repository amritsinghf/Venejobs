"use client";
import Image from "next/image";
import Link from "next/link";
import "flowbite";
import { useEffect, useState } from "react";
import SvgIcon from "./SvgIcon";
import ProfileDropdown from "./ProfileDropdown";

export default function HomeNavbar() {
  return (
    <>
      <div className="w-full  xl:w-[600px]  relative">
        <div className="max-w-[1420px] w-full mx-auto  lg:block hidden">
          <div className="flex justify-between items-center py-5 ">
            <div className="flex justify-evenly gap-1  items-center">
              <Image
                src="/home/logo-home.png"
                alt="logo image"
                height={500}
                width={500}
                style={{ width: 40, height: 40 }}
              />
              <h2 className="text-[#666666] font-bold">Venejobs</h2>
            </div>
            <div className="">
              <nav>
                <ul className="flex justify-around  items-center w-[500]">
                  <li className="text-[#666666]">
                    <Link href="">Find Talent</Link>
                  </li>
                  <li className="text-[#666666]">
                    <Link href="">Post a Job</Link>
                  </li>
                  <li className="text-[#666666]">
                    <Link href="">Manage Work</Link>
                  </li>
                  <li className="text-[#666666]">
                    <Link href="">Reports</Link>
                  </li>
                  <li className="text-[#666666]">
                    <Link href="">Messge</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <ProfileDropdown />
          </div>
        </div>
      </div>
    </>
  );
}
