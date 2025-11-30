"use client";
import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

export default function SignupModalWrapper({ children, setActiveModal }) {
    const modalRef = useRef(null);

    useClickOutside(modalRef, () => setActiveModal(""));

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-3">
            <div className="relative p-1 w-full max-w-md mx-auto">
                {/* Your same width but now responsive */}
                <div className="relative bg-white w-full sm:w-[31rem] rounded-lg shadow-sm">
                    <div className="p-4 py-15" ref={modalRef}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
