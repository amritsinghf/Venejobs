"use client";
import { useEffect, useState } from "react";
import userApiStore from "@/app/store/userStore";
import DesktopLinks from "@/app/components/profile/client_profile/DesktopLinks";
import PersonalInfoForm from "@/app/components/profile/PersonalInfoForm";
import ClientLayout from "@/app/layout/ClientLayout";
import Page from "./Mobile/page";

export default function Profile() {
  const { user, logout, fetchProfile } = userApiStore();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <ClientLayout>
        <div className="w-full 2xl:w-[1500px] 2xl:mx-auto  h-auto  lg:mt-28  lg:px-12 mb-10">
          <div className="flex md:gap-10">
            <Page />
            <DesktopLinks />

            <div className="hidden lg:flex border-gray-300 border p-5  mx-auto  rounded-2xl  flex-col w-full  gap-6 ">
              <PersonalInfoForm />
            </div>
          </div>
        </div>
      </ClientLayout>
    </>
  );
}
