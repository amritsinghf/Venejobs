import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import FreelancerLayout from "@/app/layout/FreelancerLayout";
import Image from "next/image";

export default function page() {
  const skills = ["Landing Page", "Web Design", "Prototype", "UX/UI Design"];
  return (
    <>
      <FreelancerLayout>
        <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1240px] 2xl:max-w-[1400px] mx-auto my-10 lg:my-20">
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between border-b border-gray-200 pb-10">
              <div className="flex items-center gap-8">
                <Image
                  src="/freelancer.jpg"
                  alt="Freelancer image"
                  width={100}
                  height={100}
                  className="rounded-full w-[100px] h-[100px]"
                />
                <div className="flex flex-col">
                  <h2 className="text-heading text-2xl font-semibold">
                    Thomas watson
                  </h2>
                  <div className="flex gap-10">
                    <p className="text-paragraph text-sm font-medium">
                      United State
                    </p>
                    <p className="text-paragraph text-sm font-medium">
                      {" "}
                      – 8:10 am local time
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <Button className="bg-primary text-white">
                    Profile Settings
                  </Button>
                  <Button className="text-paragraph shadow">Find Jobs</Button>
                </div>
                <div className="flex justify-end">
                  <p className="text-primary font-semibold">Share</p>
                </div>
              </div>
            </div>

            <div className="flex gap-8 border-b border-gray-200">
              <div className="flex flex-col gap-[60px] border-r border-gray-200 pr-8">
                <div className="flex gap-12">
                  <div className="flex gap-6 items-center">
                    <SvgIcon name="Brifcase" size={32} />
                    <div className="flex flex-col gap-2">
                      <h2 className="text-lg font-semibold text-heading">
                        Total Earning
                      </h2>
                      <p className="text-paragraph text-sm">100k Earned</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    <SvgIcon name="Brifcase" size={32} />
                    <div className="flex flex-col gap-2">
                      <h2 className="text-lg font-semibold text-heading">
                        Total Earning
                      </h2>
                      <p className="text-paragraph text-sm">100k Earned</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-10">
                  <h2 className="font-semibold text-lg">Language</h2>

                  <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                      <h2 className="font-medium text-heading">
                        English Level
                      </h2>
                      <p className="text-paragraph">Fluent</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <h2 className="font-medium text-heading">Urdu Level</h2>
                      <p className="text-paragraph">Fluent</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <h2 className="font-medium text-heading">Russia Level</h2>
                      <p className="text-paragraph">Native or Bilingual</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-10 xl:w-[900px]">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-2xl">
                      Google Certified UX/UI Designer | Expert in
                      Website|App|Software|Figma 
                    </h2>

                    <div className="flex gap-10 items-center">
                      <div className="flex items-center gap-3">
                        <p className="font-semibold text-2xl">$16.00/hr </p>
                        <SvgIcon name="Clock" size={32} />
                      </div>
                      <SvgIcon name="Editing" />
                    </div>
                  </div>

                  <div>
                    <p className="text-paragraph">
                      Hello and Welcome to my profile!Looking for a freelancer
                      to work on your next project? As a Google-certified UX/UI
                      Designer with 4+ years of expertise, I specialize in
                      creating captivating digital experiences for websites,
                      apps, and dashboards. Whether you need to boost user
                      engagement, streamline navigation, or enhance visual
                      appeal, I've got you covered., I'm here to help... Learn
                      More
                    </p>
                  </div>
                </div>
                <hr className="text-gray-200" />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between py-4">
                    <h2 className="text-2xl text-heading font-semibold">
                      Portfolio
                    </h2>
                    <SvgIcon name="Editing" />
                  </div>

                  <div className="flex items-center gap-12">
                    <div className="flex flex-col gap-6">
                      <Image
                        src={"/FreelanceProjectImage/projectImg.jpg"}
                        className="rounded"
                        alt=""
                        height={262}
                        width={300}
                      />
                      <h3 className="font-semibold ">
                        SaaS Application Website Designs
                      </h3>
                    </div>
                    <div className="flex flex-col gap-6">
                      <Image
                        src={"/FreelanceProjectImage/projectImg.jpg"}
                        className="rounded"
                        alt=""
                        height={262}
                        width={300}
                      />
                      <h3 className="font-semibold ">
                        SaaS Application Website Designs
                      </h3>
                    </div>
                    <div className="flex flex-col gap-6">
                      <Image
                        src={"/FreelanceProjectImage/projectImg.jpg"}
                        className="rounded"
                        alt=""
                        height={262}
                        width={300}
                      />
                      <h3 className="font-semibold ">
                        SaaS Application Website Designs
                      </h3>
                    </div>
                  </div>
                </div>
                <hr className="text-gray-200" />

                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-heading text-2xl font-semibold">
                      Work History
                    </h2>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-lg text-heading">
                          UI/UX Designer Needed for Website and App Redesign
                        </h2>
                        <SvgIcon name="Share" />
                      </div>

                      <p className="text-paragraph">
                        Alishan skills in UX design are exceptional, he follows
                        up the ideas very easily. The design was good and was a
                        very easy process overall, fast work and easy to
                        communicate.
                      </p>
                      <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                          <img src="/icons/stars2.png" alt="" />
                          <p>4.9</p>
                        </div>
                        <p className="font-semibold text-heading">
                          Jul 15, 2024 - Jul 24, 2024
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="text-gray-200" />
                </div>

                <div>
                  <h1>Pagination will be here</h1>
                  <hr className="text-gray-200" />
                </div>

                <div className="flex flex-col gap-6 pb-10">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Skills</h2>
                    <SvgIcon name="Edit" />
                  </div>
                  <div className="flex gap-6 flex-wrap">
                    {skills.map((skill, index) => (
                      <p
                        className="text-sm lg:text-base cursor-pointer border border-gray-200
                    relative overflow-hidden
                     px-4 py-2 font-medium text-paragraph rounded
                    transition-all duration-300
                    before:content-[''] before:absolute before:inset-0
                    before:bg-gray-200 before:-translate-x-full before:transition-transform before:duration-300
                    before:-z-10
                    hover:before:translate-x-0
                    z-10"
                        key={index}
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex items-center justify-between">
                    <h2 className="text-[32px] font-semibold">Employment history</h2>
                    <SvgIcon name="Edit"/>
              </div>

              
            </div>
          </div>
        </div>
      </FreelancerLayout>
    </>
  );
}
