import Link from "next/link";
import DesktopLinks from "../components/profile/client_profile/DesktopLinks";
import { Routes } from "../routes";
import ClientLayout from "./ClientLayout";
import SvgIcon from "../components/SvgIcon";

export default function ClientProfileLayout({ children }) {
  return (
    <>
      <ClientLayout>
      <div className="w-full 2xl:w-[1400px] 2xl:mx-auto h-auto md:mt-10 lg:mt-28 mb-4 ">
        <div className="flex lg:gap-10 justify-center md:justify-start w-full">

          <DesktopLinks />

          {/* FULL WIDTH on all screens ≥ md */}
          <div className="border border-gray-300 p-5 rounded-2xl flex flex-col w-full gap-6 ">

            <div className="flex justify-end lg:hidden">
              <Link
                href={Routes.profile.client.home}
                className="bg-primary text-white px-4 py-1 rounded flex items-center gap-2"
              >
                <SvgIcon name="PrevButton" color="white"/> Back
              </Link>
            </div>

            {children}
          </div>

        </div>
      </div>
    </ClientLayout>
    </>
  );
}
