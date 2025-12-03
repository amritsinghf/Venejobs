import Link from "next/link";
import DesktopLinks from "../components/profile/client_profile/DesktopLinks";
import { Routes } from "../routes";
import ClientLayout from "./ClientLayout";

export default function ClientProfileLayout({ children }) {
  return (
    <>
      <ClientLayout>
        <div className="w-full 2xl:w-[1500px] 2xl:mx-auto h-auto md:mt-28 px-4  lg:px-12 mb-4">
          <div className="flex lg:gap-10 ">
            <DesktopLinks />
            <div className="lg:flex border-gray-300 border p-5  rounded-2xl flex flex-col  md:w-full  gap-6">
              <div className="flex justify-end lg:hidden">
                <Link href={Routes.profile.client.home} className="bg-primary text-white px-4 py-1 rounded">Back</Link>
              </div>
              {children}
            </div>
          </div>
        </div>
      </ClientLayout>
    </>
  );
}
