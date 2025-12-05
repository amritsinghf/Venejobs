"use client";

import Link from "next/link";
import Image from "next/image";
import ClearIcon from "@mui/icons-material/Clear";

export default function HomeNavbarMobileFreelance({ isOpen, setIsOpen, SidebarLinks, logout }) {

    return (
        <>
            {/* BACKDROP */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* DRAWER MENU */}
            <div
                className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-xl z-50 p-5
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* HEADER */}
                <div className="flex justify-between items-center  mt-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/logo_freelance.png"
                        alt="logo image"
                        height={500}
                        width={500}
                        style={{ width: 40, height: 40 }}
                        className="cursor-pointer"
                      />
                      <h5 className="text-lg font-semibold text-gray-600">
                        Venejobs
                      </h5>
                    </div>
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      <ClearIcon fontSize="small" />
                    </button>
                  </div>
                  <hr className="mt-4" />

                {/* NAVIGATION */}
                <nav className="flex flex-col items-start gap-2 mt-2">
                    {SidebarLinks.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="py-2.5 px-2 text-base font-medium text-gray-600 
            hover:bg-gray-100 rounded-lg w-full transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* SIGN OUT BUTTON FIXED */}
                    <button
                        type="button"
                        onClick={() => {
                            logout();
                            setIsOpen(false);
                        }}
                        className="flex items-center gap-3 w-full py-2.5 px-2 text-base font-medium
        text-gray-600 hover:bg-gray-100 rounded-lg transition"
                    >
                        Sign out
                    </button>
                </nav>

            </div>
        </>
    );
}
