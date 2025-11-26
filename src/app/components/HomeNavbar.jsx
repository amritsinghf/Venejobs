"use client";
import Image from "next/image";
import Link from "next/link";
import "flowbite";
import ProfileDropdown from "./ProfileDropdown";
import { Routes } from "../routes";

export default function HomeNavbar() {
  return (
    <>
      <div className="w-full  xl:w-[600px]  relative">
        <div className="max-w-[1420px] w-full mx-auto   ">
          <div className="flex justify-between items-center py-5 md:px-5 sm:px-5 lg:px-5 ">
            <div className="flex justify-evenly gap-1  items-center ">
              <Link href={Routes.client}>
                <Image
                  src="/home/logo-home.png"
                  alt="logo image"
                  height={500}
                  width={500}
                  style={{ width: 40, height: 40 }}
                  className="cursor-pointer"
                />
              </Link>
              <h2 className="text-paragraph font-bold cursor-pointer">
                <Link href={Routes.client}>Venejobs</Link>
              </h2>
            </div>
            <div className=" lg:block  hidden ">
              <nav>
                <ul className="flex justify-around  items-center w-[500] ">
                  <li className="text-paragraph">
                    <Link href="">Find Talent</Link>
                  </li>
                  <li className="text-paragraph">
                    <Link href={Routes.job_post.form}>Post a Job</Link>
                  </li>
                  <li className="text-paragraph">
                    <Link href="">Manage Work</Link>
                  </li>
                  <li className="text-paragraph">
                    <Link href="">Reports</Link>
                  </li>
                  <li className="text-paragraph">
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
