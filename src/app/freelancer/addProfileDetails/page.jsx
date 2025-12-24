"use client";
import MultiStepForm from "@/app/components/Freelancer/AddProfileDetails/MultiStepForm";
import FreelancerLayout from "@/app/layout/FreelancerLayout";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Routes } from "@/app/routes";
import freelanceApiStore from "@/app/store/FreelancerStore";

export default function page() {
  const router = useRouter();
  const { FreelanceDetails, getPersonalDetails, loadingData } =
    freelanceApiStore();

  useEffect(() => {
    getPersonalDetails();
  }, [getPersonalDetails]);
  useEffect(() => {
    if (!loadingData && FreelanceDetails?.freelancerProfile) {
      router.push(Routes.freelancer.page);
    }
  }, [loadingData, FreelanceDetails, router]);
  return (
    <>
      <FreelancerLayout>
        <MultiStepForm />
      </FreelancerLayout>
    </>
  );
}
