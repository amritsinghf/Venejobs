"use client";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer/Footer";
import HomeNavbar from "../components/Header/HomeNavbar";
import { useEffect } from "react";
import userApiStore from "../store/userStore";
import { footerClientConfig } from "../utils/footer/footerClientConfig";

export default function ClientLayout({ children }) {
  const { logout,fetchProfile } = userApiStore();
  const router = useRouter();

  useEffect(() => {
    fetchProfile()
    const token = localStorage.getItem("token");

    if (!token) {
      logout();
      router.replace("/");
    }
  }, []);
  return (
    <>
      <HomeNavbar />
      {children}
      <Footer {...footerClientConfig} />
    </>
  );
}
