"use client";
import Image from "next/image";
import Link from "next/link";
import "flowbite";
import ProfileDropdown from "./ProfileDropdown";

export default function HomeNavbarFreelance() {
  return (
    <>
      <div className="w-full  xl:w-[600px]  relative">
        <div className="max-w-[1420px] w-full mx-auto ">
          <div className="flex justify-between items-center py-5 ">
            <div className="flex justify-evenly gap-1  items-center">
              <Link href={""}>
                <Image
                  src="/logo_green.png"
                  alt="logo image"
                  height={500}
                  width={500}
                  style={{ width: 40, height: 40 }}
                  className="cursor-pointer"
                />
              </Link>
              <h2 className="text-[#666666] font-bold cursor-pointer">
                <Link href={""}>Venejobs</Link>
              </h2>
            </div>
            <div className="lg:block hidden">
              <nav>
                <ul className="flex justify-around  items-center w-[500]">
                  <li className="text-[#666666]">
                    <Link href="">Find Work</Link>
                  </li>
                  <li className="text-[#666666]">
                    <Link href="">Deliver Work</Link>
                  </li>
                  <li className="text-[#666666]">
                    <Link href="">Manage Finances</Link>
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
