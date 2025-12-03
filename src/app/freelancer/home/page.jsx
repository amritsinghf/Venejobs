"use client";
import AllJobs from "@/app/components/Home_Data/AllJobs";
import SvgIcon from "@/app/components/SvgIcon";
import Button from "@/app/components/button/Button";
import FreelancerLayout from "@/app/layout/FreelancerLayout";

export default function Home() {
  return (
    <>
      <FreelancerLayout>
        <div className="w-full   max-w-[1420px]  mb-20 mt-30  sm:mx-auto">
          <div className="w-2xs md:w-full  mx-auto bg-gray-100 rounded-2xl px-8   py-5  flex flex-col gap-4 ">
            <div className="flex flex-row justify-between items-center ">
              <h2 className="text-heading font-semibold text-[24px] sm:text-[44px]">
                Find Projects That Match Your Passion With Venejobs
              </h2>
            </div>

            <div className="">
              <p className="text-paragraph text-sm sm:text-lg">
                Explore hand-picked freelance jobs tailored to your skills.
                Start earning on your own terms with Venejobs.
              </p>
              <Button className="bg-secondary p-2 sm:p-4 rounded text-white mt-5 flex items-center gap-1">
                Learn More <SvgIcon name="NextArrow" />
              </Button>
            </div>
          </div>

          <div className="max-w-[1200px]  h-auto  w-full  flex  mt-10 flex-col">
            <div className="p-5">
              <label
                htmlFor="search"
                className="block mb-2.5 text-sm font-medium text-heading sr-only "
              >
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 px-4   flex items-center  ">
                  <SvgIcon name="Search_Icon" />
                </span>
                <input
                  type="search"
                  id="search"
                  className="block w-full px-10 py-2 rounded-2xl text-sm text-gray-900 shadow-2xs  bg-white font-medium"
                  placeholder="Search"
                  required
                />
              </div>
            </div>
            <AllJobs />
          </div>
        </div>
      </FreelancerLayout>
    </>
  );
}
