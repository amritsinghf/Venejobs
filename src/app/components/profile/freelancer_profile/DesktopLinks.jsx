"use client"
import Link from "next/link";
import SvgIcon from "../../SvgIcon";
import Button from "../../button/Button";
import userApiStore from "@/app/store/userStore";

import toastStore from "@/app/store/toastStore";
import { Routes } from "@/app/routes";
import { useRouter } from "next/navigation";

export default function DesktopLinks() {
  const router = useRouter();
  const { user, logout, fetchProfile } = userApiStore();
  const showSuccess = toastStore.getState().showSuccess;
  const showError = toastStore.getState().showError;
  const user_logout = () => {
      try {
        logout();
        localStorage.removeItem("token");
        router.push(Routes.home);
        //currenly just removing from localstorage but still in cookie
        showSuccess("Logged Out Successfully!", "success");
      } catch (error) {
        showError(error, "error");
      }
    };
  return (
    <>
      <div className="flex flex-col  lg:w-[350px]">
        <nav className="hidden lg:flex lg:flex-col lg:gap-8  items-start  gap-1 border border-gray-300 rounded-2xl mb-4 p-5">
          <div className="flex flex-col gap-64 justify-between items-center w-full">
            <div className="flex flex-col gap-4 mt-5 pr-6">
              <div
                role="button"
                className="flex items-center justify-center w-full py-2 h-[45px] rounded hover:bg-blue-gray-50 bg-secondary text-white"
              >
                <Link
                  href={Routes.profile.freelancer.info}
                  className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
                >
                  <SvgIcon name="Preview" /> Contact Info
                </Link>
              </div>
              <div
                role="button"
                className="flex items-center justify-center w-full py-2 h-[45px] rounded hover:bg-blue-gray-50 "
              >
                <Link
                  href={Routes.profile.freelancer.billing}
                  className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
                >
                  <SvgIcon name="CreditCard" /> Billing & Payments
                </Link>
              </div>

              <div
                role="button"
                className="flex items-center justify-center w-full py-2 h-[45px] rounded hover:bg-blue-gray-50 "
              >
                <Link
                  href={""}
                  className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
                >
                  <SvgIcon name="Notify" /> Notification
                </Link>
              </div>
              <div
                role="button"
                className="flex items-center justify-center w-full py-2 h-[45px] rounded hover:bg-blue-gray-50 "
              >
                <Link
                  href={""}
                  className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
                >
                  <SvgIcon name="Premium" /> Get Paid
                </Link>
              </div>
              <div
                role="button"
                className="flex items-center justify-center w-full py-2 h-[45px] rounded hover:bg-blue-gray-50 "
              >
                <Link
                  href={""}
                  className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
                >
                  <SvgIcon name="Settingss" /> Security Settings
                </Link>
              </div>

              <div
                role="button"
                className="flex items-center justify-center w-full py-2 h-[45px] rounded hover:bg-blue-gray-50 "
              >
                <Link
                  href={""}
                  className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
                >
                  <SvgIcon name="leagal_doc" /> Legal & Compliance
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 pr-6">
              <Link
                href={""}
                className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6 text-paragraph"
              >
                <SvgIcon name="Question" />
                Help & Support
              </Link>
              <Button
                onClick={()=>user_logout()}
                className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6 text-paragraph"
              >
                <SvgIcon name="Logout" />
                Sign Out
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
