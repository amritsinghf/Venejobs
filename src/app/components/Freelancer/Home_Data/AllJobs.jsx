import jobApiStore from "@/app/store/jobStore";
import { useEffect, useState } from "react";

import JobDescription from "../../jobs/JobDescription";
import PaginationFreelance from "../../Pagination/PaginationFreelance";

export default function AllJobs() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const { jobs, totalpagenum, fetchAllJob } = jobApiStore();

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
    if (duration === "ongoing") return "Ongoing";
    const [start, end, unit] = duration.split("_");
    return `${start} to ${end} ${unit}`;
  };

  return (
    <div className="flex flex-col gap-5">
      {!jobs || jobs.length === 0 ? (
        <div className="flex justify-center mt-10">
          <div className=" px-6 py-8 text-center max-w-xl w-full">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              No Jobs Posted Yet
            </h2>
          </div>
        </div>
      ) : (
        jobs.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-[rgba(68,68,68,0.08)] w-full p-5 sm:p-6 flex flex-col gap-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h2 className="text-xl xl:text-2xl text-heading font-semibold">
                {item.title}
              </h2>
              <p className="text-paragraph text-base font-medium whitespace-nowrap">
                {formatDuration(item.duration)}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-heading font-semibold text-base">
                {item.budget_type} · {item.experience_level} · Est. Budget:
                <span className="text-paragraph ml-1">
                  {item.budget_amount}
                </span>
              </p>

              <div className="text-paragraph text-base font-medium flex gap-2">
                <span>{item.category}</span>
                <span>{item.project_size}</span>
              </div>
            </div>

            <hr />

            <div className="flex flex-col gap-2">
              <h3 className="text-heading font-semibold text-base lg:text-lg">
                Qualifications
              </h3>
              <JobDescription
                text={item.description}
                font="text-paragraph text-sm lg:text-base font-medium"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium text-paragraph bg-[#FAFAFA] border border-gray-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))
      )}

      <PaginationFreelance
        page={page}
        totalPages={totalPages}
        totalItems={jobs?.length || 0}
        selectPage={selectPage}
      />
    </div>
  );
}
