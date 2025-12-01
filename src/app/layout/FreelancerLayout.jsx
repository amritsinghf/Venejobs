import Footer_Freelance from "../components/Footer_Freelance";
import HomeNavbarFreelance from "../components/HomeNavbar_Freelance";

export default function FreelancerLayout({ children }) {
  return (
    <>
      <HomeNavbarFreelance />
      {children}
      <Footer_Freelance />
    </>
  );
}
