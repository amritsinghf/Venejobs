"use client";
import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

export default function LoginModalWrapper({ children, setActiveModal }) {
    const loginRef = useRef(null);

    useClickOutside(loginRef, () => setActiveModal(""));

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-3">
            <div className="relative p-1 w-full max-w-md mx-auto">
                {/* Your same width but now responsive */}
                <div className="relative bg-white w-full sm:w-[440px] rounded-lg shadow-sm">
                    <div className="p-4 pt-15 pb-40 md:pt-15" ref={loginRef}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
