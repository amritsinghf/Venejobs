"use client";
import Multistepform from "@/app/components/jobpost_stepper_form/MultiStepForm";
import ClientLayout from "@/app/layout/ClientLayout";

export default function Page() {
  return (
    <>
      <ClientLayout>
        <Multistepform />
      </ClientLayout>
    </>
  );
}
