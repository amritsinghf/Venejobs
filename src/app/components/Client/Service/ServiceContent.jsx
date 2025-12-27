"use client";
import { useState } from "react";
import Image from "next/image";
import Pagination from "@/app/components/Pagination/Pagination";


const images = [
  "/service/Service-Detail.png",
  "/home/Group_Home.png",
  "/service/Service-Detail.png",
  "/service/Service-Detail.png",
];

const ServiceContent = () => {
  const reviews = [1, 2, 3];

  const [page, setPage] = useState(1);
  const totalPage = 3;
  const selectPage = (p) => {
    if (p >= 1 && p <= totalPage) setPage(p);
  }

  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <div className="w-full lg:w-[65%] flex flex-col gap-6 lg:gap-10">
      <div className="flex flex-col gap-10 lg:gap-20">
        <div className="flex flex-col gap-3">
          {/* Image */}
          <div className="w-full">
            <Image src={activeImage} alt="Service detail" width={972} height={483} className="w-full h-auto rounded-md"
              priority />
          </div>

          {/* Thumbnail Image */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {images.map((img, index) => (
              <button key={index} onClick={() => setActiveImage(img)}
                className={`relative rounded overflow-hidden
      ${activeImage === img ? "ring-2 ring-black" : "opacity-80 hover:opacity-100"}`}
              >
                <Image src={img} alt={`Thumbnail ${index + 1}`} width={234} height={167} className="w-[234px] h-[150px] object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-2xl md:text-[32px] text-heading">
            About This Service
          </h4>
          <div className="flex flex-col gap-5">
            <p className="text-paragraph text-xs md:text-base leading-7">A structured, user-centered design service focused on creating clean, modern, and highly functional interfaces. Get a complete design solution tailored to your brand, with clear deliverables and predictable timelines. This service provides a complete UX/UI design solution for your digital product. Each step is crafted to ensure clarity, usability, and a consistent visual system aligned with industry best practices.</p>
          </div>
        </div>
      </div>
      {/* Reviews */}
      <div className="flex flex-col gap-6 md:gap-8 p-4 md:p-8 pb-2 rounded-2xl" style={{ boxShadow: "2px 2px 50px 0px #0000000D" }}>
        <h2 className="font-semibold text-xl md:text-2xl text-black">Reviews</h2>
        {reviews.map((_, i) => (
          <div key={i} className="flex flex-col gap-4 md:gap-8">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Image
                src="/freelancer.jpg"
                alt="Freelancer image"
                width={64}
                height={64}
                className="rounded-full w-[50px] h-[50px]"
              />
              <div className="flex flex-row gap-10 md:justify-between w-full">
                <div className="flex flex-col">
                  <h3 className="text-xs lg:text-sm text-heading font-semibold">
                    Yevhen K.
                  </h3>
                  <div className="flex gap-3 items-center mt-1.5">
                    <img src="/icons/stars2.png" alt="" />
                    <p className="text-xs md:text-sm">5.00</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <p className="font-medium text-xs md:text-base text-paragraph">
                    Dec 3, 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 w-full md:w-auto">
              <p className="text-heading text-sm md:text-lg font-semibold">
                UI/UX Designer Needed for Website and App Redesign
              </p>
              {/* job desc */}
              <p className="text-paragraph text-xs md:text-base font-normal leading-8">Alishan skills in UX design are exceptional, he follows up the ideas very easily. The design was good and was a very easy process overall, fast work and easy to communicate. Very helpful for my MVP</p>
            </div>
          </div>
        ))}
        <Pagination
          page={page}
          totalPage={totalPage}
          onChange={selectPage}
          jobs={reviews}
        />
      </div>
    </div>
  );
};

export default ServiceContent;
