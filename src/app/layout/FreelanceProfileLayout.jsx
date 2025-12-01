import DesktopLinks from "../components/profile/freelancer_profile/DesktopLinks";
import FreelancerLayout from "./FreelancerLayout";

export default function FreelanceProfileLayout({children}) {
  return (
    <>
      <FreelancerLayout>
        <div className="w-[600px] sm:w-full 2xl:w-[1500px] 2xl:mx-auto   h-screen mt-28 px-4   lg:px-12 ">
          <div className="flex gap-10 ">
            <DesktopLinks />
            <div className="lg:flex border-gray-300 border  p-5 rounded-2xl  flex-col md:w-full  gap-10">
              {children}
            </div>
          </div>
        </div>
      </FreelancerLayout>
    </>
  );
}
