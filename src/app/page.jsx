"use client";

import Image from "next/image";
import Footer from "@/app/components/Footer";
import SvgIcon from "./components/SvgIcon";
import { useState } from "react";
import Button from "./components/ui/Button";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  const items = [
    { src: "/home/cat1.jpg", label: "UI-UX Design" },
    { src: "/home/cat1.jpg", label: "Title 3" },
    { src: "/home/cat1.jpg", label: "Title 2" },
    { src: "/home/cat1.jpg", label: "Title 4" },
    { src: "/home/cat1.jpg", label: "Title 5" },
  ];
  const [index, setIndex] = useState(0);

  const visibleCount = 3;
  const itemWidth = 150;
  const gap = 12;

  const maxIndex = Math.max(0, items.length - visibleCount);

  const next = () => setIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  const prev = () => setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  return (
    <>
      <div
        className="h-screen w-full  bg-primary relative "
        style={{ backgroundImage: "url('/bg-image.png')" }}
      >
        <Navbar /> 

        <div className="w-full  lg:absolute lg:top-[50%] lg:left-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 max-w-[1420px] flex items-center justify-center flex-col gap-6 lg:gap-2 lg:flex-row p-4 xl:p-0 mt-10 lg:mt-0">
          <div className="flex-1 lg:flex-3 xl:flex-10  flex flex-col lg:mt-20 gap-8 ">
            <h1 className="text-white text-[32px] md:text-4xl xl:text-6xl lg:text-5xl font-bold  ">
              Effortless hiring, inspired work with Venejobs.
            </h1>
            <p className="text-white">
              Work with talented people at the most affordable price to get the
              most out of your time and cost
            </p>

            <div className="flex gap-8">
              <Button className="rounded p-3 px-6 lg:px-12 lg:py-5  lg:h-[60px] font-semibold text-[16px] text-white bg-black">
                Find Freelancer
              </Button>
              <Button className="rounded p-3 px-6 lg:px-12 lg:py-5 text-[16px]  lg:h-[60px] font-semibold text-[#777777] bg-white">
                Find Work
              </Button>
            </div>
          </div>
          <div className="flex-1 lg:flex-4 xl:flex-8 ">
            <Image
              src="/Group1.png"
              height={"505"}
              width={"550"}
              alt="working man"
              className=""
            />
         
          </div>
        </div>
      </div>


      {/* <Footer /> */}
    </>
  );
}
