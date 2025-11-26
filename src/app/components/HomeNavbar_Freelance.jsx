"use client";
import Image from "next/image";
import Link from "next/link";
import "flowbite";
import ProfileDropdown from "./ProfileDropdown";
import { Routes } from "../routes";

export default function HomeNavbarFreelance() {
  return (
    <>
      <div className="w-full relative ">
        <div className="max-w-[1420px] w-full mx-auto ">
          <div className="flex justify-between items-center py-5 ">
            <div className="flex justify-evenly gap-1  items-center px-2">
              <Link href={Routes.freelancer.get_started}>
                <Image
                  src="/logo_freelance.png"
                  alt="logo image"
                  height={500}
                  width={500}
                  style={{ width: 40, height: 40 }}
                  className="cursor-pointer"
                />
              </Link>
              <h2 className="text-paragraph font-bold cursor-pointer">
                <Link href={Routes.freelancer.get_started}>Venejobs</Link>
              </h2>
            </div>
            <div className="lg:block hidden">
              <nav>
                <ul className="flex justify-around  items-center w-[500]">
                  <li className="text-paragraph">
                    <Link href="">Find Work</Link>
                  </li>
                  <li className="text-paragraph">
                    <Link href="">Deliver Work</Link>
                  </li>
                  <li className="text-paragraph">
                    <Link href="">Manage Finances</Link>
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
