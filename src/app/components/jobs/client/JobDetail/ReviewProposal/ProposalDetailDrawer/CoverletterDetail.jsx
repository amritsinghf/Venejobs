import React from "react";
import { useState } from "react";
import Image from "next/image";
import Pagination from "@/app/components/Pagination/Pagination";

export default function CoverletterDetail() {
  const reviews = [1, 2, 3];
  const [page, setPage] = useState(1);
  const totalPage = 3;
  const selectPage = (p) => {
    if (p >= 1 && p <= totalPage) setPage(p);
  }

  const skills = ["Landing Page", "Web Design", "Prototype", "UX/UI Design", "JavaScript", "WebDesign", "App Design"];
  return (
    <div className="w-full lg:w-[65%] flex flex-col gap-6 lg:gap-10">
      <div className="flex flex-col gap-6 lg:gap-10 border-b lg:border-r border-[#44444414] pb-8 lg:pb-10 lg:pr-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-2xl md:text-[32px] text-heading">
            Cover letter
          </h2>
          <div className="flex flex-col gap-5">
            <p className="text-paragraph text-xs md:text-base leading-7">
              Hi 👋,<br></br>
              You are looking for a skilled web designer to create a personal website for the CEO of a venture capital firm. I can help with that and get this job done as efficiently as possible, saving you money and time., so I can start.</p>
            <p className="text-paragraph text-xs md:text-base leading-7">
              About me:<br></br>
              I have over 4 years of experience in creating engaging digital experiences for websites, apps, and dashboards. My process starts with understanding client needs, sketching wireframe concepts, and developing high-fidelity designs. I welcome feedback at all stages, though most clients prefer to provide it at the high-fidelity stage. My goal is to ensure the design meets the client's vision perfectly.</p>
            <p className="text-paragraph text-xs md:text-base leading-7">
              I believe communication is key to any successful project, and I'd like to start things on the right foot but suggesting to have a call or chat to discuss this further.You can book a meeting from
              https://calendly.com/alishannoor/30min?month=2024-05</p>
            <p className="text-paragraph text-xs md:text-base leading-7">
              Portfolio:<br></br>
              https://www.behance.net/alishannoor001</p>
            <p className="text-paragraph text-xs md:text-base leading-7">
              Looking forward to hearing from you.
            </p>
            <p className="text-paragraph text-xs md:text-base leading-7">
              Kind regards,<br></br>
              Alishan Noor
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:gap-8 border-b border-[#44444414] pb-2">
        <h2 className="font-semibold text-2xl md:text-[32px] text-black">
          Completed jobs (4)
        </h2>
        {reviews.map((_, i) => (
          <div key={i} className="flex flex-col gap-4 md:gap-10">
            <div className="flex items-center gap-3.5 md:gap-6 w-full md:w-auto">
              <Image
                src="/freelancer.jpg"
                alt="Freelancer image"
                width={64}
                height={64}
                className="rounded-full w-[50px] h-[50px]"
              />
              <div className="flex flex-row gap-10 md:justify-between w-full">
                <div className="flex flex-col">
                  <h3 className="text-base lg:text-2xl text-heading font-semibold">
                    Alishan Noor
                  </h3>
                  <div className="flex gap-3 items-center mt-1.5">
                    <img src="/icons/stars2.png" alt="" />
                    <p className="text-xs md:text-sm">5.00</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <p className="font-medium text-xs md:text-[15px] text-paragraph">
                    Dec 2, 2024 - Dec 3, 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 w-full md:w-auto">
              <p className="text-heading text-sm md:text-lg font-semibold">
                UX/UI Designer | Expert in Website | App | Software | Figma
              </p>
              {/* job desc */}
              <p className="text-paragraph text-xs md:text-base font-normal leading-8">Alishan skills in UX design are exceptional, he follows up the ideas very easily. The design was good and was a very easy process overall, fast work and easy to communicate. Very helpful for my MVP</p>
            </div>
          </div>
        ))}
        <Pagination
          page={page}
          totalPage={totalPage}
          onChange={selectPage}
          jobs={reviews}
        />
      </div>
      <div className="flex flex-col gap-8 border-b border-[#44444414] pb-2">
        <h2 className="font-semibold text-2xl md:text-[32px] text-black">
          Portfolio (4)
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-8 md:gap-4">
          {reviews.map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 w-full md:w-auto"
            >
              <div className="bg-heading border rounded-2xl pb-2 pt-5.5 px-3.5 w-full">
                <Image
                  src="/FreelanceProjectImage/projectImg.jpg"
                  alt=""
                  width={222}
                  height={190}
                  className="w-auto md:w-[222px]"
                />
              </div>
              <h3 className="font-sm text-heading font-semibold ">
                SaaS Application Website Designs
              </h3>
            </div>

          ))}
        </div>
        <Pagination
          page={page}
          totalPage={totalPage}
          onChange={selectPage}
          jobs={reviews}
        />
      </div>
      <div className="flex flex-col gap-3 border-b border-[#44444414] pb-8">
        <h2 className="font-semibold text-2xl md:text-[32px] mb-3 text-heading">Education</h2>
        <div className="flex flex-row gap-6">
          <div className="md:hidden flex flex-col items-center gap-2">
            <div className="w-[30px] h-[30px] rounded-full bg-[#5BBB7B4D]" />
            <div className="border-l-2 border-dashed border-l-[#5BBB7BCC] h-[38%]"></div>
            <div className="w-[30px] h-[30px] rounded-full bg-[#5BBB7B4D]" />
          </div>
          <div>
            <div>
              <p className="inline-block cursor-pointer overflow-hidden bg-[#FAFAFA] px-6 py-1 font-medium text-paragraph rounded-full text-base transition-all duration-300 relative z-10 before:content-[''] before:absolute before:inset-0 before:bg-gray-200 before:-translate-x-full before:transition-transform before:duration-300 before:-z-10 hover:before:translate-x-0">
                2020-2024
              </p>
              <h6 className="text-heading text-base md:text-lg font-semibold my-3">Marketing College</h6>
              <p className="text-paragraph text-xs md:text-base font-normal leading-7.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
            <div>
              <p className="inline-block cursor-pointer overflow-hidden bg-[#FAFAFA] px-6 py-1 font-medium text-paragraph rounded-full text-base transition-all duration-300 relative z-10 before:content-[''] before:absolute before:inset-0 before:bg-gray-200 before:-translate-x-full before:transition-transform before:duration-300 before:-z-10 hover:before:translate-x-0">
                2019-2020
              </p>
              <h6 className="text-heading text-base md:text-lg font-semibold my-3">Army Public School and Collage Jutial Gilgit</h6>
              <p className="text-paragraph text-xs md:text-base font-normal leading-7.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b border-[#44444414] pb-8">
        <h2 className="font-semibold text-2xl md:text-[32px] mb-3 text-heading">Work & Experience</h2>
        <div className="flex flex-row gap-6">
          <div className="md:hidden flex flex-col items-center gap-2">
            <div className="w-[30px] h-[30px] rounded-full bg-[#5BBB7B4D]" />
            <div className="border-l-2 border-dashed border-l-[#5BBB7BCC] h-[38%]"></div>
            <div className="w-[30px] h-[30px] rounded-full bg-[#5BBB7B4D]" />
          </div>
          <div>
            <div>
              <p className="inline-block cursor-pointer overflow-hidden bg-[#FAFAFA] px-6 py-1 font-medium text-paragraph rounded-full text-base transition-all duration-300 relative z-10 before:content-[''] before:absolute before:inset-0 before:bg-gray-200 before:-translate-x-full before:transition-transform before:duration-300 before:-z-10 hover:before:translate-x-0">
                December 2023 - Present
              </p>
              <h6 className="text-heading text-base md:text-lg font-semibold my-3">Senior UXUI Designer | Freelancer</h6>
              <p className="text-paragraph text-xs md:text-base font-normal leading-7.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
            <div>
              <p className="inline-block cursor-pointer overflow-hidden bg-[#FAFAFA] px-6 py-1 font-medium text-paragraph rounded-full text-base transition-all duration-300 relative z-10 before:content-[''] before:absolute before:inset-0 before:bg-gray-200 before:-translate-x-full before:transition-transform before:duration-300 before:-z-10 hover:before:translate-x-0">
                July 2023 - November 2023
              </p>
              <h6 className="text-heading text-base md:text-lg font-semibold my-3">Senior UXUI Designer | Design Arena</h6>
              <p className="text-paragraph text-xs md:text-base font-normal leading-7.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-2xl md:text-[32px] text-heading">
            Skills
          </h2>
          <div className="flex items-center gap-3 flex-wrap">
            {skills.length ? (
              skills.map((item) => (
                <p
                  className="cursor-pointer relative overflow-hidden
                          bg-[#FAFAFA] p-3 font-medium text-paragraph rounded-full
                          transition-all duration-300
                          before:content-[''] before:absolute before:inset-0
                          before:bg-gray-200 before:-translate-x-full before:transition-transform before:duration-300
                          before:-z-10
                          hover:before:translate-x-0
                          z-10 text-base"
                  key={item}
                >
                  {item}
                </p>
              ))
            ) : (
              <p className="text-paragraph text-sm">No skills available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
