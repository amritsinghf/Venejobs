"use client";
import Footer from "@/app/components/Footer";
import HomeNavbar from "@/app/components/HomeNavbar";
import Multistepform from "@/app/components/jobpost_stepper_form/MultiStepForm";

export default function Page() {
  return (
    <>
      <HomeNavbar />
      <Multistepform />
      <Footer />
    </>
  );
}
