import Image from "next/image";
import { useEffect, useState } from "react";
import SvgIcon from "../SvgIcon";

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
    // <div className="w-full flex  border border-gray-300 rounded-2xl justify-between  mt-10">
    //   <div className="flex  p-4  gap-2">
    //     <Image src={"/public/home/manwithphone.jpg"} height={80} width={80} className="border rounded-full border-gray-300" alt="Freelancer image"/>

    //     <div className="flex flex-col">
    //       <h3 className="text-[#333333] font-semibold text-2xl">Harnish</h3>
    //     <p className="text-[#666666] text-[16px]">Can u design ui</p>
    //     <div className="flex flex-row items-center">
    //       <p className="text-[#333333] font-semibold">Started Date:</p>
    //       <p className="text-[#666666] text-sm">11 Dec</p>
    //     </div>
    //     </div>

    //   </div>

    //   <div className="flex justify-around  w-[700px] items-center">
    //     <button className="text-[#666666]">Proposals (2)</button>
    //     <button className="text-[#666666]">Message (1)</button>

    //     <button className="bg-[#01237C] text-white border h-10 p-1 rounded">
    //       View Contract
    //     </button>
    //   </div>
    // </div>

    <div className="rounded-2xl mt-10 border border-gray-300">
      <div className="border-b border-gray-300 rounded py-2 px-3">
        <div className="w-full flex  rounded p-2 justify-between ">
          <div className="flex gap-2">
            <Image
              src={"/freelancer.jpg"}
              height={80}
              width={100}
              className=" rounded-full "
              alt="Freelancer image"
            />
            <div className="flex flex-col p-2 gap-2">
              <div className="flex gap-4 items-center">
                <h3 className="text-[#333333] font-medium text-2xl">Harnish</h3>
                <p className="bg-[#5BBB7B] text-white rounded-2xl p-1 font-medium text-[12px]">
                  Active Contract
                </p>
              </div>
              <p className="text-[#666666] text-[16px]">Can u design ui</p>
              <div className="flex flex-row items-center">
                <p className="text-[#333333] font-medium">
                  Started Date: &nbsp;
                </p>
                <p className="text-[#666666] text-sm">11-01-0001</p>
              </div>
            </div>
          </div>

          <div className="flex  items-center mx-5 gap-1">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#666666] p-2  font-semibold text-lg">
                Contract Amount :
              </h3>
              <p className="text-[#666666] font-medium text-sm">$1000.00</p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <h3 className="text-[#666666] p-2 font-semibold text-lg">
                Paid Amount :
              </h3>
              <p className="text-[#666666] font-medium text-sm">$500.00</p>
            </div>
          </div>
          <div className="flex items-center ">
            <button className="bg-[#01237C] text-white border h-12 py-2 px-8  rounded cursor-pointer">
              View contract
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-300 rounded py-2 px-3">
        <div className="w-full flex  rounded p-2 justify-between ">
          <div className="flex gap-2 ">
            <Image
              src={"/freelancer.jpg"}
              height={80}
              width={100}
              className=" rounded-full "
              alt="Freelancer image"
            />
            <div className="flex flex-col p-2 gap-2">
              <div className="flex gap-4 items-center">
                <h3 className="text-[#333333] font-medium text-2xl text-wrap">
                  Krushang
                </h3>
                <p className="bg-[#5BBB7B] text-white rounded-2xl p-1 font-medium text-[12px]">
                  Active Contract
                </p>
              </div>
              <p className="text-[#666666] text-[16px]">Can u make app</p>
              <div className="flex flex-row items-center">
                <p className="text-[#333333] font-medium">
                  Started Date: &nbsp;
                </p>
                <p className="text-[#666666] text-sm">11-01-0001</p>
              </div>
            </div>
          </div>

          <div className="flex  items-center mx-5 gap-1">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#666666] p-2  font-semibold text-lg">
                Contract Amount :
              </h3>
              <p className="text-[#666666] font-medium text-sm">$1000.00</p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <h3 className="text-[#666666] p-2 font-semibold text-lg">
                Paid Amount :
              </h3>
              <p className="text-[#666666] font-medium text-sm">$500.00</p>
            </div>
          </div>
          <div className="flex items-center ">
            <button className="bg-[#01237C] text-white border h-12 py-2 px-8  rounded cursor-pointer">
              View contract
            </button>
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
                  ? "bg-blue-900 text-white border rounded-full "
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
  );
}
