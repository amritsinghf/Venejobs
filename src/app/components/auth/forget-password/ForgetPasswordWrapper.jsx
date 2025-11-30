import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import LogoHeader from "./LogoHeader";
import ForgetPasswordForm from "./ForgetPasswordForm";

export default function ForgetPasswordWrapper({ setActiveModal, setUserEmail }) {
    const forgetRef = useRef(null);

    useClickOutside(forgetRef, () => setActiveModal(""));

    return (
        <div className="overflow-y-auto bg-black/50 fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="relative w-full max-w-md mx-auto">
                <div className="relative bg-white w-full rounded-lg shadow-sm">
                    <div className="p-4 pt-15 pb-40 md:pt-15" ref={forgetRef}>
                        <LogoHeader />

                        <ForgetPasswordForm
                            setActiveModal={setActiveModal}
                            setUserEmail={setUserEmail}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
