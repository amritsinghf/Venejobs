import React from "react";
import PaginationFreelance from "../../Pagination/PaginationFreelance";
import SvgIcon from "../../Utility/SvgIcon";

const BottomPanel = ({ freelancerProfile }) => {
  const formatMonthYear = (month, year) => {
    const date = new Date(year, month - 1);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl lg:text-[32px] font-semibold">
          Employment history
        </h2>
        <div className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4">
          <SvgIcon
            name="Editing"
            size={24}
            className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
          />
        </div>
      </div>

      {freelancerProfile?.meta?.experiences.map((item) => (
        <div className="flex flex-col gap-4" key={item.job_title}>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-lg lg:text-2xl font-semibold text-heading">
                {item.job_title}
              </h2>
              <p className="font-semibold text-heading text-sm lg:text-base">
                {formatMonthYear(item.start_month, item.start_year)} {"- "}
                {formatMonthYear(item.end_month, item.end_year)}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4">
                <SvgIcon
                  name="Editing"
                  size={24}
                  className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
                />
              </div>
              <div className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4">
                <SvgIcon
                  name="Delete1"
                  className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-paragraph">
              Embarking on my freelance journey, I've transformed my passion for
              design into a thriving business. With years of industry experience
              and a keen understanding of client needs, I offer bespoke design
              solutions that captivate audiences. My portfolio on Behance,
              Dribble, LinkedIn, and Instagram showcases my commitment to Learn
              More
            </p>
          </div>
          <hr className="text-gray-200" />
        </div>
      ))}

      
      <div className="flex justify-end">
        <PaginationFreelance totalPages={5} />
      </div>
    </div>
  );
};

export default BottomPanel;
