"use client";

import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/home/HeroSection";
import HowItWorks from "./components/home/HowItWorks";
import BrowseCategories from "./components/home/BrowseCategories";
import FreelancerPromo from "./components/home/FreelancerPromo";
import MostPopular from "./components/home/MostPopular";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div
        className="w-full min-h-[90vh] bg-primary relative flex flex-col"
        style={{ backgroundImage: "url('/bg-image.png')" }}
      >
        <div className="bg-white  lg:bg-transparent">
          <Navbar />
        </div>

        <div className="flex flex-1 items-center justify-center">
          <HeroSection />
        </div>
      </div>

      {/* FIXED layout: proper wrapper */}
      <main className="w-full lg:max-w-[80%] mx-auto flex flex-col gap-20 lg:gap-30 my-20 lg:my-30">
        <HowItWorks />

        <BrowseCategories />

        <FreelancerPromo />
        <MostPopular />
      </main>
      <Footer/>
    </>
  );
}
