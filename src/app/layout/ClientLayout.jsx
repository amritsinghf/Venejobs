import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";

export default function ClientLayout({ children }) {
  return (
    <>
      <HomeNavbar />
      <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:w-[2000px] lg:max-w-[960px] xl:max-w-[1340px] 2xl:max-w-[1400px] mx-auto">
        {children}
      </div>
      <Footer />
    </>
  );
}
