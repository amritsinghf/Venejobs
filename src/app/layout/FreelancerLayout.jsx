"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Footer_Freelance from "../components/Footer_Freelance";
import HomeNavbarFreelance from "../components/HomeNavbar_Freelance";
import userApiStore from "../store/userStore";

export default function FreelancerLayout({ children }) {
  const {logout} = userApiStore();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      logout();
      router.replace("/");
    }
  }, []);

  return (
    <>
      <HomeNavbarFreelance />
      {children}
      <Footer_Freelance />
    </>
  );
}
