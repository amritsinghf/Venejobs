import jobApiStore from "@/app/store/jobStore";
import { useEffect, useState } from "react";

import ReadMoreBtn from "../../button/ReadMoreBtn";
import PaginationFreelance from "../../Pagination/PaginationFreelance";
import JobCardSkeleton from "../../Skeletons/JobCardSkeleton";

export default function AllJobs() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { jobs, totalpagenum, fetchAllJob, loading } = jobApiStore();

  useEffect(() => {
    fetchAllJob(page, limit);
  }, [page]);

  const selectPage = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalpagenum) {
      setPage(selectedPage);
    }
  };

  const formatDuration = (duration) => {
    if (!duration) return "-";
    if (duration === "ongoing") return "Ongoing";
    const [start, end, unit] = duration.split("_");
    return `${start} to ${end} ${unit}`;
  };
  return (
    <div className="flex flex-col gap-6">
      {/* 🔹 Skeleton */}
      {loading &&
        Array.from({ length: 5 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}

      {/* 🔹 Empty State */}
      {!loading && (!jobs || jobs.length === 0) && (
        <div className="flex justify-center mt-12">
          <h2 className="text-xl font-semibold text-gray-600">
            No Jobs Posted Yet
          </h2>
        </div>
      )}

      {/* 🔹 Job Cards */}
      {!loading &&
        jobs?.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-[rgba(68,68,68,0.08)] bg-white p-6 flex flex-col gap-4 hover:shadow-md transition"
          >
            {/* Header */}
            <div className="flex justify-between items-start gap-3">
              <h2 className="text-xl font-semibold text-heading">
                {item.title}
              </h2>
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {formatDuration(item.duration)}
              </span>
            </div>

            {/* Meta */}
            <p className="text-sm text-gray-600">
              {item.budget_type} · {item.experience_level} · Est. Budget:
              <span className="ml-1 font-semibold">
                ₹{item.budget_amount}
              </span>
            </p>

            {/* Category */}
            <div className="flex gap-3 text-sm text-gray-500">
              <span>{item.category}</span>
              <span>{item.project_size}</span>
            </div>

            <hr />

            {/* Description */}
            <ReadMoreBtn
              text={item.description}
              font="text-secondary text-sm font-medium"
            />

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {item.skills?.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-700"
                >
                  {skill.name}
                  <span className="ml-1 text-gray-500">
                    ({skill.level})
                  </span>
                </span>
              ))}
            </div>

          </div>
        ))}

      {/* 🔹 Pagination */}
      {!loading && totalpagenum > 1 && (
        <PaginationFreelance
          page={page}
          totalPages={totalpagenum}
          selectPage={selectPage}
        />
      )}
    </div>
  );
}
