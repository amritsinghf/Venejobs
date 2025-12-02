"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toastStore from "@/app/store/toastStore";
import userApiStore from "@/app/store/userStore";
import DesktopLinks from "@/app/components/profile/freelancer_profile/DesktopLinks";
import PersonalInfoForm from "@/app/components/profile/PersonalInfoForm";
import FreelancerLayout from "@/app/layout/FreelancerLayout";
import MobileView from "./Mobile/page";

export default function Profile() {
  const router = useRouter();

  const { user, logout, fetchProfile } = userApiStore();

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <FreelancerLayout>
        <div className="w-full 2xl:w-[1500px] 2xl:mx-auto   h-screen lg:mt-28 px-4   lg:px-12 mb-10">
          <div className="flex gap-10 ">
            <MobileView />
            <DesktopLinks />
            <div className="hidden lg:flex border-gray-300 border  p-5 rounded-2xl  flex-col md:w-full  gap-10">
              <PersonalInfoForm />
            </div>
          </div>
        </div>
      </FreelancerLayout>
    </>
  );
}
