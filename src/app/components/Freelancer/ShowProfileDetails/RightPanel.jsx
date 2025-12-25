import React from "react";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import PaginationFreelance from "../../Pagination/PaginationFreelance";
import Image from "next/image";
import TitleEditModal from "../EditProfileModals/TitleEditModal";

const RightPanel = ({ freelancerProfile }) => {
  const formatMonthYear = (month, year) => {
    const date = new Date(year, month - 1);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const [showTitleModal, setshowTitleModal] = useState(false);

  return (
    <div className="flex flex-col gap-10 xl:w-[900px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
          <h2 className="font-semibold text-lg lg:text-2xl">
            {freelancerProfile?.professional_title}
          </h2>

          <div className="flex gap-10 items-center">
            <div className="flex items-center gap-3">
              <p className="font-semibold text-base lg:text-2xl">
                $ {freelancerProfile?.hourly_rate} /hr{" "}
              </p>
              <SvgIcon
                name="Clock"
                className="w-[18px] h-[18px] lg:w-5 lg:h-5 text-heading"
              />
            </div>
            <div
              className="shadow rounded-full px-1 py-1 lg:px-2 lg:py-2 cursor-pointer"
              onClick={() => setshowTitleModal(true)}
            >
              <SvgIcon
                name="Editing"
                size={24}
                className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-paragraph text-base">
            {freelancerProfile?.overview}
          </p>
        </div>
      </div>
      <hr className="text-gray-200" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between py-4">
          <h2 className="text-2xl text-heading font-semibold">Portfolio</h2>
          <div className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4">
            <SvgIcon
              name="Editing"
              size={24}
              className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
            />
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap items-center gap-12">
          {freelancerProfile?.meta?.portfolios?.map((item) => (
            <div className="flex flex-col gap-6" key={item.title}>
              <div className="bg-heading border rounded-2xl">
                <Image
                  src={"/FreelanceProjectImage/projectImg.jpg"}
                  className="rounded pt-6 pb-2 px-4"
                  alt=""
                  height={262}
                  width={300}
                />
              </div>
              <h3 className="font-semibold ">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-gray-200" />

      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-heading text-2xl font-semibold">Work History</h2>
        </div>

        <div className="flex flex-col items-center justify-between">
          {freelancerProfile?.meta?.educations?.map((item) => (
            <div className="flex flex-col gap-4" key={item.institution_name}>
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-base lg:text-lg text-heading">
                  {item.institution_name}
                </h2>
                <div className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4">
                  <SvgIcon
                    name="Share"
                    size={24}
                    className="text-secondary w-[18px] h-[18px] lg:w-5 lg:h-5"
                  />
                </div>
              </div>

              <p className="text-paragraph text-sm lg:text-base">
                {item.description}
              </p>
              <div className="flex flex-col sm:flex-row  lg:items-center gap-8">
                <div className="flex items-center gap-3">
                  <img src="/icons/stars2.png" alt="" />
                  <p>4.9</p>
                </div>
                <p className="font-semibold text-heading">
                  {item.start_date} - {item.end_date}
                </p>
              </div>
              <hr className="text-gray-200" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <PaginationFreelance totalPages={5} />
      </div>
      <hr className="text-gray-200" />

      <div className="flex flex-col gap-6 pb-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="shadow rounded-full px-1 py-1 lg:px-4 lg:py-4">
            <SvgIcon
              name="Editing"
              size={24}
              className="text-gray-500 w-[18px] h-[18px] lg:w-5 lg:h-5"
            />
          </div>
        </div>
        <div className="flex gap-6 flex-wrap">
          {freelancerProfile?.meta?.skills?.map((skill, index) => (
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

      {showTitleModal && (
        <TitleEditModal
          setshowTitleModal={setshowTitleModal}
          freelancerProfile={freelancerProfile}
        />
      )}
    </div>
  );
};

export default RightPanel;
