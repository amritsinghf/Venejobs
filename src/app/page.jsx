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
        className="w-full h-[70vh] md:h-[85vh] lg:h-[90vh] bg-primary relative flex flex-col bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-image.png')" }}
      >

        <div className="w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1600px] mx-auto">
          <Navbar />
        </div>
        <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1600px] mx-auto flex-1 flex items-center">
          <HeroSection />
        </div>
      </div>

      {/* FIXED layout: proper wrapper */}
      <main className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1600px] mx-auto flex flex-col gap-20 lg:gap-30 my-20 lg:my-30">
        <HowItWorks />

        <BrowseCategories />

        <FreelancerPromo />
        <MostPopular />
      </main>
      <Footer />
    </>
  );
}
