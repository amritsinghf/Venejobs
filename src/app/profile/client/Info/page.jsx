"use client";

import PersonalInfoForm from "@/app/components/profile/PersonalInfoForm";
import ClientProfileLayout from "@/app/layout/ClientProfileLayout";

export default function Info() {
  return (
    <>
      <ClientProfileLayout>
        <PersonalInfoForm/>
      </ClientProfileLayout>
    </>
  );
}
