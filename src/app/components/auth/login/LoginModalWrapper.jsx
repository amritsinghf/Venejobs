"use client";
import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import Button from "../../button/Button";
import SvgIcon from "../../SvgIcon";

export default function LoginModalWrapper({ children, setActiveModal }) {
  const loginRef = useRef(null);

  useClickOutside(loginRef, () => setActiveModal(""));

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-3">
      <div className="relative p-1 w-full max-w-md mx-auto">
        {/* Your same width but now responsive */}

        <div className="relative bg-white w-full sm:w-[440px] rounded-lg shadow-sm">
          <div className="flex justify-end px-2">
            <button
              type="button"
              onClick={() => setActiveModal("")}
              className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
            >
              <SvgIcon name="CrossButton"/>
            </button>
          </div>
          <div className="p-4 pt-15 pb-40 md:pt-15" ref={loginRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
