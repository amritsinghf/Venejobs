"use client";

import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SvgIcon from "./components/SvgIcon";

export default function Home() {
  return (
    <div className="border w-[600px] sm:w-full">
      <div
        className="h-screen w-full  bg-primary relative "
        style={{ backgroundImage: "url('/bg-image.png')" }}
      >
        <Navbar />

        <div className="w-full  lg:absolute lg:top-[50%] lg:left-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 max-w-[1420px] flex items-center justify-center flex-col gap-6 lg:gap-2 lg:flex-row p-4 xl:p-0 mt-10 lg:mt-0">
          <div className="flex-1 lg:flex-3 xl:flex-10  flex flex-col lg:mt-20 gap-8 ">
            <h1 className="text-white text-[32px] md:text-4xl xl:text-6xl lg:text-5xl font-bold  ">
              Effortless hiring, inspired work with Venejobs.
            </h1>
            <p className="text-white">
              Work with talented people at the most affordable price to get the
              most out of your time and cost
            </p>

            <div className="flex gap-8">
              <button className="rounded p-3 px-6 lg:px-12 lg:py-5  lg:h-[60px] font-semibold text-[16px] text-white bg-black">
                Find Freelancer
              </button>
              <button className="rounded p-3 px-6 lg:px-12 lg:py-5 text-[16px]  lg:h-[60px] font-semibold text-[#777777] bg-white">
                Find Work
              </button>
            </div>
          </div>
          <div className="flex-1 lg:flex-4 xl:flex-8 ">
            <Image
              src="/Group1.png"
              height={"505"}
              width={"550"}
              alt="working man"
              className="xl:h-[505] xl:w-[900] lg:h-[380] w-[600] lg:block hidden"
            />
            <Image
              src="/Frame3.png"
              height={"505"}
              width={"550"}
              alt="working man"
              className="md:h-96 w-[500px] block lg:hidden"
            />
            {/* <div className="h-[505px] w-full">
              <div className="flex items-end">
                <div className="h-[249.21px] w-[170px] lg:h-[314.4px] lg:w-[232px] xl:w-[250px] relative ">
                  <Image src="/home/man-with-work.png" alt="working man" fill />
                </div>
                <div className="h-80 lg:h-[404px] w-[200px] lg:w-[270.4px]  relative">
                  <Image
                    src="/home/women-hand-shake.png"
                    alt="working man"
                    fill
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1420px] mx-auto   py-28 ">
        <div className="w-full flex flex-col  gap-8  ">
          <div className="text-center flex flex-col gap-4 ">
            <div className="flex flex-col gap-3 font-bold">
              <p className="text-[#01237C] text-lg">For Clients</p>
              <h2 className="text-[44px]">How it Works</h2>
            </div>
            <p className="text-lg text-paragraph">
              Find the perfect talent to bring your projects to life with a
              streamlined process designed for your success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:px-3">
            <div className="flex flex-col gap-8 text-center">
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 flex items-center justify-center bg-white shadow shadow-black/10 rounded-full">
                  <SvgIcon name={"Brifcase"} />
                </div>
              </div>

              <div>
                <h3 className="text-heading text-2xl font-semibold">
                  Post a Job
                </h3>
                <p className="text-paragraph text-[16px]">
                  Share your requirements, set your budget, and define the
                  timeline for your project.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 text-center">
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 flex items-center justify-center bg-white shadow shadow-black/10 rounded-full">
                  <SvgIcon name="Cv" />
                </div>
              </div>

              <div>
                <h3 className="text-heading text-2xl font-semibold">
                  Review Applications
                </h3>
                <p className="text-paragraph text-[16px]">
                  Browse through proposals, compare budgets, and evaluate
                  freelancer profiles to find the best fit.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 text-center">
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 flex items-center justify-center bg-white shadow shadow-black/10 rounded-full">
                  <SvgIcon name="Honesty" />
                </div>
              </div>

              <div>
                <h3 className="text-heading text-2xl font-semibold">
                  Start Collaborating
                </h3>
                <p className="text-paragraph text-[16px]">
                  Work with skilled freelancers and track the progress of your
                  project through our secure platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* responsive pending */}
        <div className="w-full flex flex-col gap-8 max-w-[1420px] mx-auto p-3 mt-[195px] hidden">
          <div className="">
            <div className=" p-1 flex justify-between items-center lg:flex-wrap ">
              <h2 className="text-[44px] text-[#222222] font-bold">
                Browse talent by category
              </h2>
              <button className="w-[200px] flex items-center justify-center gap-2  h-[60px] bg-[#5BBB7B1A] text-primary font-bold">
                All category
                <SvgIcon name="RightOne" />
              </button>
            </div>
            <p className="text-zinc-500 text-[18px]">
              Get some Inspirations from 1800+ skills
            </p>
          </div>

          <div className="h-[300px]  flex items-center justify-around">
            <Image
              src="/home/cat1.jpg"
              height={298}
              width={258}
              alt="categroy images"
            />
            <Image
              src="/home/cat1.jpg"
              height={298}
              width={258}
              alt="categroy images"
            />
            <Image
              src="/home/cat1.jpg"
              height={298}
              width={258}
              alt="categroy images"
            />
            <Image
              src="/home/cat1.jpg"
              height={298}
              width={258}
              alt="categroy images"
            />
            <Image
              src="/home/cat1.jpg"
              height={298}
              width={258}
              alt="categroy images"
            />
          </div>
        </div>

        <div className="w-full  flex flex-col  lg:flex-row flex-1  gap-[60px] max-w-[1420px] mt-[195px]  px-3">
          <div className="">
            <Image
              src="/home/manwithphone.jpg"
              alt="man on phone"
              height={692}
              width={644}
              style={{height:692,width:944}}
            />
          </div>

          <div className="flex w-full ">
            <div className="flex flex-col   h-[575px] gap-4">
              <p className="text-primary text-[16px] xl:text-[44px] font-bold">
                #Great Freelance Marketplace
              </p>
              <h2 className="xl:text-[44px] text-[32px] font-bold ">
                Empowering Freelancers to Achieve Their Career Goals
              </h2>
              <p className="text-lg text-[#6B7177]">
                Meet clients you’re excited to work with and takeyour career or
                business to new heights. Find opportunities for every stage of
                your freelance career.
              </p>

              <div className="flex flex-col lg:gap-5 gap-4">
                <div className="flex gap-1">
                  <div className="">
                    <SvgIcon name="Checkmark" />
                  </div>
                  <p className="text-lg">
                    <b>Kickstart Your Freelance Journey:</b>
                    <span className="text-[#6B7177]">
                      {" "}
                      Discover a variety of opportunities designed for beginners
                      and seasoned professionals alike.
                    </span>
                  </p>
                </div>

                <div className="flex  ">
                  <div className="m-1">
                    <SvgIcon name="Checkmark" />
                  </div>
                  <p className="text-lg">
                    <b>Build Meaningful Connections:</b>
                    <span className="text-[#6B7177] ">
                      Collaborate with clients who value your skills and are
                      eager to work with you.
                    </span>
                  </p>
                </div>

                <div className="flex ">
                  <div className="m-1">
                    <SvgIcon name="Checkmark" />
                  </div>
                  <p className="text-lg">
                    <b>Grow Your Career with Confidence:</b>
                    <span className="text-[#6B7177]">
                      Access projects that match your expertise and take your
                      freelancing career to the next level.
                    </span>
                  </p>
                </div>
                <button className="border p-5 lg:p-10 flex items-center justify-center gap-3 mt-10 w-[180px] bg-primary rounded text-white text-[16px] font-semibold">
                  Find Work
                  <SvgIcon name="RightArrWhite" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  justify-center flex flex-col  sm:mx-0 gap-8 max-w-[1420px] mt-30 md:mt-40">
          <div className=" ">
            <div className=" flex flex-col gap-3 md:flex-row justify-between items-center">
              <div className="flex flex-col ">
              <h2 className="text-[32px] mx-15 sm:mx-0 lg:text-[44px] text-[#222222] font-bold ">
                Most Popular
              </h2>
                <p className="text-zinc-500 text-[18px]">
              See how you can up your career status
            </p>
            </div>
              <button className="flex  items-center justify-center gap-2  p-2 md:p-6 bg-[#5BBB7B1A] text-primary font-bold">
                All category
                <SvgIcon name="RightOne" />
              </button>
            </div>
            
          </div>

          <div className="items-center justify-around flex flex-col md:flex-row px-1 gap-6">
            <div className="bg-neutral-primary-soft block max-w-sm  overflow-hidden rounded-md w-[328px]  shadow-xs">
              <Image
                src="/pop1.png"
                height={249}
                width={328}
                alt="categroy images"
                style={{ width: 327, height: 249 }}
              />

              <div className="flex flex-col px-4 mt-5 gap-4">
                <p className="text-paragraph text-[16px]">November 7, 2022</p>
                <a href="#">
                  <h5 className="font-semibold text-lg">
                    Exploring Some of the Cities and Home Services
                  </h5>
                </a>
                <p className="text-[14px] text-paragraph mb-2">
                  Bringing the culture of sharing to everyone
                </p>
              </div>
            </div>

            <div className="bg-neutral-primary-soft block max-w-sm  overflow-hidden rounded-md w-[328px]  shadow-xs">
              <Image
                src="/pop1.png"
                height={249}
                width={328}
                alt="categroy images"
                style={{ width: 327, height: 249 }}
              />

              <div className="flex flex-col px-4 mt-5 gap-4">
                <p className="text-paragraph text-[16px]">November 7, 2022</p>
                <a href="#">
                  <h5 className="font-semibold text-lg">
                    Exploring Some of the Cities and Home Services
                  </h5>
                </a>
                <p className="text-[14px] text-paragraph mb-2">
                  Bringing the culture of sharing to everyone
                </p>
              </div>
            </div>

           <div className="bg-neutral-primary-soft block max-w-sm  overflow-hidden rounded-md w-[328px] shadow-xs">
              <Image
                src="/pop1.png"
                height={249}
                width={328}
                alt="categroy images"
                style={{ width: 327, height: 249 }}
              />

              <div className="flex flex-col px-4 mt-5 gap-4">
                <p className="text-paragraph text-[16px]">November 7, 2022</p>
                <a href="#">
                  <h5 className="font-semibold text-lg">
                    Exploring Some of the Cities and Home Services
                  </h5>
                </a>
                <p className="text-[14px] text-paragraph mb-2">
                  Bringing the culture of sharing to everyone
                </p>
              </div>
            </div>
           <div className="bg-neutral-primary-soft block max-w-sm  overflow-hidden rounded-md w-[328px]   shadow-xs">
              <Image
                src="/pop1.png"
                height={249}
                width={328}
                alt="categroy images"
                style={{ width: 327, height: 249 }}
              />

              <div className="flex flex-col px-4 mt-5 gap-4">
                <p className="text-paragraph text-[16px]">November 7, 2022</p>
                <a href="#">
                  <h5 className="font-semibold text-lg">
                    Exploring Some of the Cities and Home Services
                  </h5>
                </a>
                <p className="text-[14px] text-paragraph mb-2">
                  Bringing the culture of sharing to everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
