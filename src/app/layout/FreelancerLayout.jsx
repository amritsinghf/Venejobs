"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import HomeNavbarFreelance from "../components/Header/HomeNavbar_Freelance";
import userApiStore from "../store/userStore";
import Footer from "../components/Footer/Footer";
import { footerFreelanceConfig } from "../utils/footer/footerFreelanceConfig";

export default function FreelancerLayout({ children }) {
  const { logout } = userApiStore();
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
      <Footer {...footerFreelanceConfig} />
    </>
  );
}
