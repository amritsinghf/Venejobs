"use client";
import Footer_Freelance from "@/app/components/Footer_Freelance";
import HomeNavbarFreelance from "@/app/components/HomeNavbar_Freelance";
import SvgIcon from "@/app/components/SvgIcon";
import jobApiStore from "@/app/store/jobStore";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const { jobs, pagenum, totalpagenum, loading, error, fetchAllJob } = jobApiStore();

  useEffect(() => {
    fetchAllJob(page, limit);
  }, [page]);

  useEffect(() => {
  setTotalPages(totalpagenum);
}, [totalpagenum]);

  const selectPage = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  const formatDuration = (duration) => {
    if (duration === "ongoing") return "ongoing";
    const [start, end, unit] = duration.split("_");
    return `${start} to ${end} ${unit}`;
  };

  return (
    <>
      <HomeNavbarFreelance />
      <div className="w-full   max-w-[1420px]  mb-20 mt-30 mx-auto ">
        <div className="w-full bg-gray-100 rounded-2xl p-12 flex flex-col gap-4  ">
          <div className="flex flex-row justify-between items-center ">
            <h2 className="text-heading font-semibold text-[44px]">
              Find Projects That Match Your Passion With Venejobs
            </h2>
          </div>

          <div className="">
            <p className="text-paragraph text-[18px]">
              Explore hand-picked freelance jobs tailored to your skills. Start
              earning on your own terms with Venejobs.
            </p>
            <button className="bg-secondary py-4 px-8 rounded text-white mt-5 flex items-center gap-1">
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
            <h3 className="text-secondary px-5">My feed</h3>
            {/* main container for jobs */}
            {jobs?.map((item) => (
              <div
                className="flex flex-col p-5 m-5 border rounded border-gray-200 gap-4"
                key={item.id}
              >
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
                      {item.title}
                    </h2>
                    <p className="text-paragraph text-sm text-nowrap">
                      {formatDuration(item.duration)}
                    </p>
                  </div>

                  {/* budget and industry */}
                  <div className="flex items-center justify-between">
                    <p className="font-medium">
                      {item.budget_type} - {item.experience_level} - Est.
                      Budget:{" "}
                      <span className="text-paragraph">
                        {" "}
                        {item.budget_amount}
                      </span>
                    </p>

                    <div className="flex items-center gap-8">
                      <p className="text-paragraph text-sm">{item.category}</p>
                      <p className="text-paragraph text-sm">
                        {item.project_size}
                      </p>
                    </div>
                  </div>
                </div>
                <hr />

                {/* job desc */}
                <div className="flex flex-col gap-3 mt-4">
                  <h3 className="font-medium text-lg">Qualifications :</h3>
                  <p className="text-paragraph">{item.description}</p>
                </div>

                {/*category or skills */}
                <div className="flex items-center gap-3 sm:flex-wrap">
                  {item.skills.map((item) => (
                    <p
                      className="bg-[#FAFAFA] p-3 font-medium text-paragraph rounded-2xl"
                      key={item}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* pagiantion */}
            <div className="flex justify-start px-4 gap-5 items-center">
              <button
                disabled={page === 1}
                onClick={() => selectPage(page - 1)}
                className={`cursor-pointer ${page === 1 ? "opacity-40" : ""}`}
              >
                <SvgIcon name="Control_prev" />
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <span
                  key={i}
                  onClick={() => selectPage(i + 1)}
                  className={`cursor-pointer px-3 py-1 border rounded-full ${
                    page === i + 1
                      ? "bg-secondary text-white"
                      : "bg-white text-paragraph font-medium"
                  }`}
                >
                  {i + 1}
                </span>
              ))}

              <button
                disabled={page === totalPages}
                onClick={() => selectPage(page + 1)}
                className={`cursor-pointer ${
                  page === totalPages ? "opacity-40" : ""
                }`}
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
