import Image from "next/image";
import { useEffect, useState } from "react";
import SvgIcon from "../SvgIcon";
import Button from "../ui/Button";

export default function Active_Contracts() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
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
    <div className="rounded-2xl mt-10 border border-gray-300 mx-6 w-full sm:mx-0">
      <div className="border-b border-gray-300 rounded py-2 px-3">
        <div className="w-full flex items-center rounded p-2 justify-between flex-wrap">
          <div className="flex gap-6 ">
            <Image
              src={"/freelancer.jpg"}
              height={80}
              width={100}
              className=" rounded-full "
              alt="Freelancer image"
              style={{ height: 80, width: 80 }}
            />
            <div className="flex flex-col p-2 gap-3 ">
              <div className="flex gap-8 items-center justify-between sm:w-full  w-[400px]  px-2">
                <h3 className="text-heading font-medium text-2xl">Harnish</h3>
                <p className="bg-secondary text-white rounded-2xl px-2 py-1 font-medium text-[12px]">
                  Active Contract
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-paragraph text-[16px]">Can u design ui</p>
                <div className="flex flex-row items-center">
                  <p className="text-heading font-medium">
                    Started Date: &nbsp;
                  </p>
                  <p className="text-paragraph text-sm">11-01-0001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  items-center mx-5 gap-2 ">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-paragraph p-2  font-semibold text-lg">
                Contract Amount :
              </h3>
              <p className="text-paragraph font-medium text-sm">$1000.00</p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <h3 className="text-paragraph p-2 font-semibold text-lg">
                Paid Amount :
              </h3>
              <p className="text-paragraph font-medium text-sm">$500.00</p>
            </div>
          </div>
          <div className="flex items-center ">
            <Button className="bg-[#01237C] text-white border mx-5 py-2 px-8 mt-5 sm:mt-0 mb-4 rounded cursor-pointer">
              View contract
            </Button>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-300 rounded py-2 px-3 ">
        <div className="w-full flex items-center  rounded p-2 justify-between flex-wrap ">
          <div className="flex gap-6 ">
            <Image
              src={"/freelancer.jpg"}
              height={80}
              width={100}
              className=" rounded-full "
              alt="Freelancer image"
              style={{ height: 80, width: 80 }}
            />
            <div className="flex flex-col p-2 gap-3 ">
              <div className="flex gap-8 items-center justify-between sm:w-full  w-[400px] px-2">
                <h3 className="text-heading font-medium text-2xl">Harnish</h3>
                <p className="bg-secondary text-white rounded-2xl px-2 py-1 font-medium text-[12px]">
                  Active Contract
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-paragraph text-[16px]">Can u design ui</p>
                <div className="flex flex-row items-center">
                  <p className="text-heading font-medium">
                    Started Date: &nbsp;
                  </p>
                  <p className="text-paragraph text-sm">11-01-0001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  items-center mx-5 gap-2 ">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-paragraph p-2  font-semibold text-lg">
                Contract Amount :
              </h3>
              <p className="text-paragraph font-medium text-sm">$1000.00</p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <h3 className="text-paragraph p-2 font-semibold text-lg">
                Paid Amount :
              </h3>
              <p className="text-paragraph font-medium text-sm">$500.00</p>
            </div>
          </div>
          <div className="flex items-center ">
            <Button className="bg-[#01237C] text-white border mx-5 py-2 px-8 mt-5 sm:mt-0 mb-4 rounded cursor-pointer">
              View contract
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-end py-6 px-6">
        <div className="flex justify-center gap-5 items-center">
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
                  ? "bg-primary text-white border rounded-full "
                  : "bg-white text-paragraph border rounded-full font-medium px-2 py-1"
              }px-3 py-1  cursor-pointer`}
            >
              {i + 1}
            </span>
          ))}

          <Button
            disabled={page === totalPage}
            onClick={() => selectPage(page + 1)}
            className="cursor-pointer"
          >
            <SvgIcon name="Control_next" />
          </Button>
        </div>
      </div>
    </div>
  );
}
