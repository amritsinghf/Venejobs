"use client";
import React, { lazy, Suspense } from "react";
import ClientProfileLayout from "@/app/layout/ClientProfileLayout";

const PersonalInfoForm = lazy(() =>
  import("@/app/components/profile/PersonalInfoForm")
);

export default function Info() {
  return (
    <>
      <ClientProfileLayout>
        <Suspense
          fallback={
            <div className="bg-black">
             loading............!
            </div>
          }
        >
          <PersonalInfoForm />
        </Suspense>
      </ClientProfileLayout>
    </>
  );
}
