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
          <div className="flex flex-col gap-5">
            <div className="rounded-lg p-5 md:px-8 md:py-10 flex flex-col gap-6 border border-[rgba(68,68,68,0.08)]">
              <div className="flex flex-col gap-3 lg:gap-2">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl text-heading font-bold leading-snug">
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

            <div className="w-full">
              <label
                htmlFor="search"
                className="sr-only"
              >
                Search
              </label>

              <div className="relative w-full max-w-md sm:max-w-lg">
                {/* Icon */}
                <span className="absolute inset-y-0 left-0 flex items-center pl-1 text-gray-400">
                  <SvgIcon name="Search_Icon" />
                </span>

                {/* Input */}
                <input
                  type="search"
                  id="search"
                  placeholder="Search jobs, skills, companies"
                  className="
      w-full
      py-2.5
      pl-8 pr-2
      text-sm sm:text-base
      font-medium text-heading
      border-b border-[#D0D5DD]
      bg-transparent
      placeholder:text-sm placeholder:text-gray-400
      focus:outline-none
      focus:border-primary
      transition
    "
                />
              </div>
            </div>

            <AllJobs />

          </div>
        </div>
      </FreelancerLayout >
    </>
  );
}
