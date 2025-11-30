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
            <div className="max-w-[1420px] w-full mx-auto px-6 bg-white lg:bg-transparent">
                <div className="flex justify-between items-center py-5">

                    <LogoSection />
                    <DesktopMenu />

                    <AuthButtons setActiveModal={setActiveModal} setMenuOpen={setMenuOpen} />

                </div>
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
        </>
    );
}
