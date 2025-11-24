"use client";
import Footer_Freelance from "@/app/components/Footer_Freelance";
import HomeNavbarFreelance from "@/app/components/HomeNavbar_Freelance";
import SvgIcon from "@/app/components/SvgIcon";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  // const [jobsData, setjobsData] = useState([])

  // const get_jobsdata = async () => {
  //   const res = await
  // }

  // useEffect(() => {

  // }, [])

  const selectPage = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPage &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  useEffect(() => {}, [page]);
  return (
    <>
      <HomeNavbarFreelance />
      <div className="w-full   max-w-[1420px]  mb-20 mt-30 mx-auto ">
        <div className="w-full bg-gray-100 rounded-2xl p-12 flex flex-col gap-4  ">
          <div className="flex flex-row justify-between items-center ">
            <h2 className="text-[#333333] font-semibold text-[44px]">
              Find Projects That Match Your Passion With Venejobs
            </h2>
          </div>

          <div className="">
            <p className="text-[#666666] text-[18px]">
              Explore hand-picked freelance jobs tailored to your skills. Start
              earning on your own terms with Venejobs.
            </p>
            <button className="bg-[#5BBB7B] py-4 px-8 rounded text-white mt-5 flex items-center gap-1">
              Learn More <SvgIcon name="NextArrow" />
            </button>
          </div>
        </div>

        <div className=" max-w-[1200px]  h-auto  w-full  flex  mt-10 flex-col">
          <div className="p-5 ">
            <label
              htmlFor="search"
              className="block mb-2.5 text-sm font-medium text-heading sr-only "
            >
              Search
            </label>
            <div className="relative ">
              <span className="absolute inset-y-0 px-2   flex items-center  ">
                <SvgIcon name="Search_Icon" />
              </span>
              <input
                type="search"
                id="search"
                className="block w-full px-8 rounded-2xl text-sm text-gray-900 border border-gray-300  bg-gray-50"
                placeholder="Search"
                required
              />
            </div>
          </div>

          <div className="flex flex-col  h-auto  mb-50 ">
            <h3 className="text-[#5BBB7B] px-5">My feed</h3>

            {/* main container for jobs */}
            <div className="flex flex-col p-5 m-5 border rounded border-gray-200 gap-4  ">
              {/* title and image */}
              <div className="flex items-center gap-2">
                <Image
                  src={"/logo.png"}
                  height={"32"}
                  width={"38"}
                  alt="Logo of company"
                />
                <h2 className="text-lg text-[#3B3A40]">Adobe</h2>
              </div>

              {/* job title and time ago */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center ">
                  <h2 className="font-medium text-2xl max-w-[700px]">
                    Sales Engineer, Application Modernization, Healthcare,
                    Google Cloud
                  </h2>
                  <p className="text-[#666666] text-sm text-nowrap">
                    3 days ago
                  </p>
                </div>

                {/* budget and industry */}
                <div className="flex items-center justify-between">
                  <p className="font-medium">
                    Fixed-price - Expert - Est. Budget:{" "}
                    <span className="text-[#666666]"> 70K - 90K</span>
                  </p>

                  <div className="flex items-center gap-8">
                    <p className="text-[#666666] text-sm">
                      Internet & Technology
                    </p>
                    <p className="text-[#666666] text-sm">Fulltime</p>
                  </div>
                </div>
              </div>
              <hr />

              {/* job desc */}
              <div className="flex flex-col gap-3 mt-4">
                <h3 className="font-medium text-lg">Qualifications :</h3>
                <p className="text-[#666666]">
                  We are seeking a talented and experienced UI/UX Designer to
                  join our team and help us create a visually stunning and
                  user-friendly mobile app. The ideal candidate will have a
                  strong portfolio showcasing their ability to design intuitive,
                  modern, and engaging interfaces for mobile applications. This
                  project involves designing the entire user experience and
                  interface for a mobile...More...
                </p>
              </div>

              {/*category or skills */}
              <div className="flex items-center gap-3 sm:flex-wrap">
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  Landing Page
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  Web Design
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  User Flow
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  Prototype
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  UXUI Design
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  Web Design
                </p>
              </div>
            </div>

            <div className="flex flex-col p-5 m-5 border rounded border-gray-200 gap-4 xl:h-[420px] md:h-[500px] sm:h-[520px] ">
              {/* title and image */}
              <div className="flex items-center gap-2">
                <Image
                  src={"/logo.png"}
                  height={"32"}
                  width={"38"}
                  alt="Logo of company"
                />
                <h2 className="text-lg text-[#3B3A40]">Adobe</h2>
              </div>

              {/* job title and time ago */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center ">
                  <h2 className="font-medium text-2xl max-w-[700px]">
                    Sales Engineer, Application Modernization, Healthcare,
                    Google Cloud
                  </h2>
                  <p className="text-[#666666] text-sm">3 days ago</p>
                </div>

                {/* budget and industry */}
                <div className="flex items-center justify-between">
                  <p className="font-medium">
                    Fixed-price - Expert - Est. Budget:{" "}
                    <span className="text-[#666666]"> 70K - 90K</span>
                  </p>

                  <div className="flex items-center gap-8">
                    <p className="text-[#666666] text-sm">
                      Internet & Technology
                    </p>
                    <p className="text-[#666666] text-sm">Fulltime</p>
                  </div>
                </div>
              </div>
              <hr />

              {/* job desc */}
              <div className="flex flex-col gap-3 mt-4">
                <h3 className="font-medium text-lg">Qualifications :</h3>
                <p className="text-[#666666]">
                  We are seeking a talented and experienced UI/UX Designer to
                  join our team and help us create a visually stunning and
                  user-friendly mobile app. The ideal candidate will have a
                  strong portfolio showcasing their ability to design intuitive,
                  modern, and engaging interfaces for mobile applications. This
                  project involves designing the entire user experience and
                  interface for a mobile...More...
                </p>
              </div>

              {/*category or skills */}
              <div className="flex items-center gap-3 sm:flex-wrap">
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  Landing Page
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  Web Design
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  User Flow
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  Prototype
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  UXUI Design
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  Web Design
                </p>
              </div>
            </div>

            <div className="flex flex-col p-5 m-5 border rounded border-gray-200 gap-4 xl:h-[420px] md:h-[500px] sm:h-[520px] ">
              {/* title and image */}
              <div className="flex items-center gap-2">
                <Image
                  src={"/logo.png"}
                  height={"32"}
                  width={"38"}
                  alt="Logo of company"
                />
                <h2 className="text-lg text-[#3B3A40]">Adobe</h2>
              </div>

              {/* job title and time ago */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center ">
                  <h2 className="font-medium text-2xl max-w-[700px]">
                    Sales Engineer, Application Modernization, Healthcare,
                    Google Cloud
                  </h2>
                  <p className="text-[#666666] text-sm">3 days ago</p>
                </div>

                {/* budget and industry */}
                <div className="flex items-center justify-between">
                  <p className="font-medium">
                    Fixed-price - Expert - Est. Budget:{" "}
                    <span className="text-[#666666]"> 70K - 90K</span>
                  </p>

                  <div className="flex items-center gap-8">
                    <p className="text-[#666666] text-sm">
                      Internet & Technology
                    </p>
                    <p className="text-[#666666] text-sm">Fulltime</p>
                  </div>
                </div>
              </div>
              <hr />

              {/* job desc */}
              <div className="flex flex-col gap-3 mt-4">
                <h3 className="font-medium text-lg">Qualifications :</h3>
                <p className="text-[#666666]">
                  We are seeking a talented and experienced UI/UX Designer to
                  join our team and help us create a visually stunning and
                  user-friendly mobile app. The ideal candidate will have a
                  strong portfolio showcasing their ability to design intuitive,
                  modern, and engaging interfaces for mobile applications. This
                  project involves designing the entire user experience and
                  interface for a mobile...More...
                </p>
              </div>

              {/*category or skills */}
              <div className="flex items-center gap-3 sm:flex-wrap">
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  Landing Page
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  Web Design
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  User Flow
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  Prototype
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  UXUI Design
                </p>
                <p className="bg-[#FAFAFA] p-3 font-medium text-[#666666] rounded-2xl">
                  Web Design
                </p>
              </div>
            </div>

            {/* pagiantion */}
            <div className="flex justify-start px-4 gap-5 items-center">
              <button
                disabled={page === 1}
                onClick={() => selectPage(page - 1)}
                className="cursor-pointer"
              >
                <SvgIcon name="Control_prev" />
              </button>

              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  onClick={() => selectPage(i + 1)}
                  className={`${
                    page === i + 1
                      ? "bg-[#5BBB7B] text-white border rounded-full "
                      : "bg-white text-[#666666] border rounded-full font-medium px-2 py-1"
                  }px-3 py-1  cursor-pointer`}
                >
                  {i + 1}
                </span>
              ))}

              <button
                disabled={page === totalPage}
                onClick={() => selectPage(page + 1)}
                className="cursor-pointer"
              >
                <SvgIcon name="Control_next" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer_Freelance />
    </>
  );
}
