import jobApiStore from "@/app/store/jobStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../button/Button";
import SvgIcon from "../SvgIcon";

export default function AllJobs() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const { jobs, pagenum, totalpagenum, loading, error, fetchAllJob } =
    jobApiStore();

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
            <div className="flex flex-col gap-3 ">
              <div className="flex justify-between items-center gap-2">
                <h2 className="font-medium text-2xl max-w-[700px]">
                  {item.title}
                </h2>
                <p className="text-paragraph text-sm text-nowrap">
                  {formatDuration(item.duration)}
                </p>
              </div>

              {/* budget and industry */}
              <div className="flex items-center justify-between flex-wrap sm:flex-row">
                <p className="font-medium">
                  {item.budget_type} - {item.experience_level} - Est. Budget:{" "}
                  <span className="text-paragraph"> {item.budget_amount}</span>
                </p>

                <div className="flex items-center gap-8">
                  <p className="text-paragraph text-sm">{item.category}</p>
                  <p className="text-paragraph text-sm">{item.project_size}</p>
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
            <div className="flex items-center gap-3 flex-wrap">
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
          <Button
            disabled={page === 1}
            onClick={() => selectPage(page - 1)}
            className={`cursor-pointer ${page === 1 ? "opacity-40" : ""}`}
          >
            <SvgIcon name="Control_prev" />
          </Button>

          {[...Array(totalPages)].map((_, i) => {
            const active = page === i + 1;

            return (
              <button
                key={i}
                onClick={() => selectPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full 
    border border-gray-300 leading-none transition font-semibold
    ${active ? "bg-secondary text-white" : "bg-white text-paragraph"}`}
              >
                {i + 1}
              </button>
            );
          })}

          <Button
            disabled={page === totalPages}
            onClick={() => selectPage(page + 1)}
            className={`cursor-pointer ${
              page === totalPages ? "opacity-40" : ""
            }`}
          >
            <SvgIcon name="Control_next" />
          </Button>
        </div>
      </div>
    </>
  );
}
