import Link from "next/link";
import DesktopLinks from "../components/profile/freelancer_profile/DesktopLinks";
import FreelancerLayout from "./FreelancerLayout";
import { Routes } from "../routes";
import SvgIcon from "../components/SvgIcon";

export default function FreelanceProfileLayout({ children }) {
  return (
    <>
      <FreelancerLayout>
        <div className="w-full 2xl:w-[1500px] 2xl:mx-auto h-auto md:mt-10 lg:mt-28 px-4 lg:px-12 mb-4">
          {/* Center on mobile, normal layout on md+ */}
          <div className="flex lg:gap-10 justify-center md:justify-start w-full">
            <DesktopLinks />

            {/* FULL WIDTH on md+, with border spacing */}
            <div className="border border-gray-300 p-5 rounded-2xl flex flex-col w-full gap-10">
              <div className="flex justify-end lg:hidden">
                <Link
                  href={Routes.profile.freelancer.home}
                  className="bg-secondary text-white px-4 py-1 rounded flex items-center gap-2"
                >
                 <SvgIcon name="PrevButton" color="white"/> Back
                </Link>
              </div>

              <div className="h-full">{children}</div>
            </div>
          </div>
        </div>
      </FreelancerLayout>
    </>
  );
}
