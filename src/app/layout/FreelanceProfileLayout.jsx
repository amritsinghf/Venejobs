import Link from "next/link";
import DesktopLinks from "../components/profile/freelancer_profile/DesktopLinks";
import FreelancerLayout from "./FreelancerLayout";
import { Routes } from "../routes";

export default function FreelanceProfileLayout({children}) {
  return (
    <>
      <FreelancerLayout>
        <div className="w-full 2xl:w-[1500px] 2xl:mx-auto   h-auto mt-28 px-4   lg:px-12 mb-4">
          <div className="flex lg:gap-10">
            <DesktopLinks />
            <div className="lg:flex border-gray-300 border  p-5 rounded-2xl  flex-col md:w-full  gap-10">
              <div className="flex justify-end lg:hidden">
                <Link href={Routes.profile.freelancer.home} className="bg-secondary text-white px-4 py-1 rounded">Back</Link>
              </div>
              {children}
            </div>
          </div>
        </div>
      </FreelancerLayout>
    </>
  );
}
