import React from "react";
import Button from "../../button/Button";
import Image from "next/image";
import SvgIcon from "../../Utility/SvgIcon";

const ShowDetailsHeader = () => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center justify-between border-b border-gray-200 pb-10">
      <div className="flex items-center gap-8">
        <Image
          src="/freelancer.jpg"
          alt="Freelancer image"
          width={100}
          height={100}
          className="rounded-full w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
        />
        <div className="flex flex-col gap-3 lg:gap-4">
            <div className="flex items-center gap-4">
                <h2 className="text-heading text-lg lg:text-2xl font-semibold">
            Thomas watson
          </h2>
            <SvgIcon name="ShareGreen" className="flex lg:hidden"/>
            </div>
          
          <div className="flex gap-10">
            <p className="text-paragraph text-sm font-medium">United State</p>
            <p className="text-paragraph text-sm font-medium">
              {" "}
              – 8:10 am local time
            </p>
          </div>
        </div>
        
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <Button className="bg-secondary w-auto h-auto px-3 py-2 text-white">
            Profile Settings
          </Button>
          <Button className="text-paragraph shadow w-auto h-auto px-3 py-2">
            Find Jobs
          </Button>
        </div>
        <div className="hidden lg:flex justify-end items-center gap-4">
          <SvgIcon name="ShareGreen" />
          <p className="hidden lg:flex text-secondary font-semibold">Share</p>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailsHeader;
