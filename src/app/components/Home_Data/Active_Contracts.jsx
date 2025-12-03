import Image from "next/image";
import { useEffect, useState } from "react";
import SvgIcon from "../SvgIcon";
import Button from "../button/Button";

export default function Active_Contracts() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(3);
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
    <div className="rounded-2xl mt-10 border border-gray-300 w-full">
      <div className="border-b border-gray-300 rounded py-2 px-3">
        <div className="w-full flex items-center rounded p-2 justify-between flex-wrap">
          <div className="flex gap-6 ">
            <Image
              src="/freelancer.jpg"
              alt="Freelancer image"
              height={60}
              width={60}
              style={{
                width: "60px",
                height: "60px",
              }}
              className="rounded-full md:w-[80px] md:h-[80px]"
            />

            <div className="flex flex-col p-2 gap-3 ">
              <div className="flex gap-8 items-center justify-between sm:w-full flex-wrap ">
                <h3 className="text-heading font-medium text-lg md:text-2xl">
                  Harnish
                </h3>
                <p className="bg-secondary text-white rounded-2xl border font-medium p-1 text-xs md:text-base">
                  Active Contract
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-paragraph text-sm md:text-base">Can u design ui</p>
                <div className="flex flex-row items-center">
                  <p className="text-heading font-medium text-sm md:text-base">
                    Started Date: &nbsp;
                  </p>
                  <p className="text-paragraph text-sm md:text-base">11-01-0001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  items-center mx-5 gap-2 ">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-paragraph p-2  font-semibold text-sm md:text-lg">
                Contract Amount :
              </h3>
              <p className="text-paragraph font-medium text-xs md:text-base">$1000.00</p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <h3 className="text-paragraph p-2 font-semibold text-sm md:text-lg">
                Paid Amount :
              </h3>
              <p className="text-paragraph font-medium text-xs md:text-base">$500.00</p>
            </div>
          </div>
          <div className="flex items-center ">
            <Button className="bg-primary text-white border mx-5 py-2 px-4 md:py-3 md:px-8 mt-5 sm:mt-0 mb-4 rounded cursor-pointer">
              View contract
            </Button>
          </div>
        </div>
      </div>

     <div className="border-b border-gray-300 rounded py-2 px-3">
        <div className="w-full flex items-center rounded p-2 justify-between flex-wrap">
          <div className="flex gap-6 ">
            <Image
              src="/freelancer.jpg"
              alt="Freelancer image"
              height={60}
              width={60}
              style={{
                width: "60px",
                height: "60px",
              }}
              className="rounded-full md:w-[80px] md:h-[80px]"
            />

            <div className="flex flex-col p-2 gap-3 ">
              <div className="flex gap-8 items-center justify-between sm:w-full flex-wrap ">
                <h3 className="text-heading font-medium text-lg md:text-2xl">
                  Harnish
                </h3>
                <p className="bg-secondary text-white rounded-2xl border font-medium p-1 text-xs md:text-base">
                  Active Contract
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-paragraph text-sm md:text-base">Can u design ui</p>
                <div className="flex flex-row items-center">
                  <p className="text-heading font-medium text-sm md:text-base">
                    Started Date: &nbsp;
                  </p>
                  <p className="text-paragraph text-sm md:text-base">11-01-0001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  items-center mx-5 gap-2 ">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-paragraph p-2  font-semibold text-sm md:text-lg">
                Contract Amount :
              </h3>
              <p className="text-paragraph font-medium text-xs md:text-base">$1000.00</p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <h3 className="text-paragraph p-2 font-semibold text-sm md:text-lg">
                Paid Amount :
              </h3>
              <p className="text-paragraph font-medium text-xs md:text-base">$500.00</p>
            </div>
          </div>
          <div className="flex items-center ">
            <Button className="bg-primary text-white border mx-5 py-2 px-4 md:py-3 md:px-8 mt-5 sm:mt-0 mb-4 rounded cursor-pointer">
              View contract
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-end py-6 px-6">
        <div className="flex justify-center gap-3 items-center">
          {/* Prev Button */}
          <button
            disabled={page === 1}
            onClick={() => selectPage(page - 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border 
        cursor-pointer transition
        ${page === 1 ? "opacity-40" : "bg-white text-paragraph"}`}
          >
            <SvgIcon name="Control_prev" />
          </button>

          {/* Page Numbers */}
          {[...Array(totalPage)].map((_, i) => {
            const active = page === i + 1;

            return (
              <button
                key={i}
                onClick={() => selectPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full 
    border border-gray-300 leading-none transition font-semibold
    ${active ? "bg-primary text-white" : "bg-white text-paragraph"}`}
              >
                {i + 1}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            disabled={page === totalPage}
            onClick={() => selectPage(page + 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border 
        cursor-pointer transition
        ${page === totalPage ? "opacity-40" : "bg-white text-paragraph"}`}
          >
            <SvgIcon name="Control_next" />
          </button>
        </div>
      </div>
    </div>
  );
}
