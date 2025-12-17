"use client";
import AllJobs from "@/app/components/Home_Data/AllJobs";
import SvgIcon from "@/app/components/SvgIcon";
import Button from "@/app/components/button/Button";
import FreelancerLayout from "@/app/layout/FreelancerLayout";

export default function Home() {
  return (
    <>
      <FreelancerLayout>
        <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1240px] 2xl:max-w-[1400px] mx-auto my-10 lg:my-20">
          <div className="rounded-lg p-5 md:px-8 md:py-10 flex flex-col gap-6 border border-[rgba(68,68,68,0.08)]">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl text-heading font-bold leading-tight">
                Find Projects That Match Your Passion With Venejobs
              </h2>

              <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide">
                Explore hand-picked freelance jobs tailored to your skills.
                Start earning on your own terms with Venejobs.
              </p>
            </div>
            <Button className="bg-primary text-white text-center w-[180px] md:w-44 h-12 sm:h-[50px] lg:h-13 
              font-semibold tracking-wide text-sm xl:text-base flex items-center justify-center rounded 
              transition-all duration-300 gap-2">
              Learn More <SvgIcon name="NextArrow" />
            </Button>
          </div>

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
            <AllJobs />
          </div>
        </div>
      </FreelancerLayout >
    </>
  );
}
