"use client";
import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import SvgIcon from "../../SvgIcon";

export default function SignupModalWrapper({ children, setActiveModal }) {
  const modalRef = useRef(null);

  useClickOutside(modalRef, () => setActiveModal(""));

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-3">
      <div className="relative p-1 w-full max-w-md mx-auto">
        {/* Your same width but now responsive */}
        <div className="relative bg-white w-full sm:w-[31rem] rounded-lg shadow-sm">
          <div className="flex justify-end px-2">
            <button
              type="button"
              onClick={() => setActiveModal("")}
              className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
            >
              <SvgIcon name="CrossButton" />
            </button>
          </div>
          <div className="p-4 py-15" ref={modalRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
