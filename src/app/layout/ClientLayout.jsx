import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";

export default function ClientLayout({ children }) {
  return (
    <>
      <HomeNavbar />
      {children}
      <Footer />
    </>
  );
}
