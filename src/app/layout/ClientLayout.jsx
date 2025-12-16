import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import { useEffect } from "react";
import userApiStore from "../store/userStore";
import { footerClientConfig } from "../lib/footer/footerClientConfig";

export default function ClientLayout({ children }) {
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
      <HomeNavbar />
      {children}
      <Footer {...footerClientConfig} />
    </>
  );
}
