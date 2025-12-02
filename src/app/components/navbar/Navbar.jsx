"use client";
import { useState } from "react";
import AuthButtons from "./AuthButtons";
import DesktopMenu from "./DesktopMenu";
import LogoSection from "./LogoSection";
import MobileMenu from "./MobileMenu";
import Modals from "./Modals";

export default function Navbar() {
  const [activeModal, setActiveModal] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [verifyCode, setverifyCode] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white lg:bg-transparent w-full">
        <div className="flex justify-between items-center py-5 w-[90%] md:w-full mx-auto">
          <LogoSection />
          <DesktopMenu />

          <AuthButtons
            setActiveModal={setActiveModal}
            setMenuOpen={setMenuOpen}
          />
        </div>

        <MobileMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />

        <Modals
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          verifyCode={verifyCode}
          setverifyCode={setverifyCode}
        />
      </div>

    </>
  );
}
