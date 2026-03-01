"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MultiStepForm from "@/app/components/Freelancer/AddProfileDetails/MultiStepForm";
import FreelancerLayout from "@/app/layout/FreelancerLayout";
import freelancerApiStore from "@/app/store/freelancerApiStore";
import { Routes } from "@/app/routes";
import Loader from "@/app/components/common/Loader";

export default function Page() {
  const router = useRouter();

  const { freelanceDetails, getPersonalDetails, personalDetailLoading } =
    freelancerApiStore();

  useEffect(() => {
    getPersonalDetails();
  }, []);

  useEffect(() => {
    if (personalDetailLoading) return;

    const completed =
      freelanceDetails?.freelancerProfile?.profile_completed;

    if (completed) {
      router.replace(Routes.freelancer.page);
    }
  }, [freelanceDetails, personalDetailLoading]);

  if (personalDetailLoading) {
    return <Loader />;
  }

  return (
    <FreelancerLayout>
      <MultiStepForm />
    </FreelancerLayout>
  );
}