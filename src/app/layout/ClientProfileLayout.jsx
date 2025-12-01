import DesktopLinks from "../components/profile/client_profile/DesktopLinks";
import ClientLayout from "./ClientLayout";

export default function ClientProfileLayout({ children }) {
  return (
    <>
      <ClientLayout>
        <div className="w-[600px] sm:w-full 2xl:w-[1500px] 2xl:mx-auto h-auto mt-28 px-4   lg:px-12 mb-4">
          <div className="flex gap-10 ">
            <DesktopLinks />

            <div className="lg:flex border-gray-300 border  p-5 rounded-2xl flex flex-col md:w-full  gap-6">
              {children}
            </div>
          </div>
        </div>
      </ClientLayout>
    </>
  );
}
