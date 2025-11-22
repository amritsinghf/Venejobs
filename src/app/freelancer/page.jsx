import Link from "next/link";
import SvgIcon from "../components/SvgIcon";
import HomeNavbarFreelance from "../components/HomeNavbar_Freelance";
import Footer_Freelance from "../components/Footer_Freelance";
import { Routes } from "../routes";

export default function Page() {
  return (
    <>
      <HomeNavbarFreelance />
      <div className="w-full  max-w-[1420px]  mb-20 mt-30 mx-auto ">
        <div className=" flex justify-items-start flex-col gap-8 py-36 px-10 ">
          <div className="flex flex-col justify-items-start w-[700px] ">
            <h2 className="text-[#333333] font-semibold text-[44px]">
              Welcome back, Freelancer!
            </h2>
            <h2 className="text-[#333333] font-semibold text-[44px]">
              Find the best freelance jobs on Venezuelan and boost your career.
            </h2>
            <p className="text-[#666666] text-[18px]">
              Explore high-quality projects from top clients on Venezuelan.
              Showcase your skills, land great jobs, and take your freelance
              career to the next level.
            </p>
          </div>
          <div className="flex">
            <Link
              href={Routes.freelancer.page}
              className="border bg-[#5BBB7B] text-white rounded p-4 w-[150px] items-center flex gap-2"
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
