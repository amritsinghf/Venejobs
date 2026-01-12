"use client";
import MultiStepForm from "@/app/components/Freelancer/AddProfileDetails/MultiStepForm";
import FreelancerLayout from "@/app/layout/FreelancerLayout";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Routes } from "@/app/routes";
import freelancerApiStore from "@/app/store/freelancerApiStore";

export default function page() {
  const router = useRouter();
  const { freelanceDetails, getPersonalDetails, personalDetailLoading } =
    freelancerApiStore();

  useEffect(() => {
    getPersonalDetails();
  }, [getPersonalDetails]);
  useEffect(() => {
    if (!personalDetailLoading && freelanceDetails?.freelancerProfile) {
      router.push(Routes.freelancer.page);
    }
  }, [personalDetailLoading, freelanceDetails, router]);
  return (
    <>
      <FreelancerLayout>
        <MultiStepForm />
      </FreelancerLayout>
    </>
  );
}
