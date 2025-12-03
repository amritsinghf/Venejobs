"use client";
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

  const Links = [
    {
      label: "Contact Info",
      href: Routes.profile.freelancer.info,
      icon: "Preview",
      active: true,
    },
    {
      label: "Billing & Payments",
      href: Routes.profile.freelancer.billing,
      icon: "CreditCard",
    },
    {
      label: "Notification",
      href: "",
      icon: "Notify",
    },
    {
      label: "Get Paid",
      href: "",
      icon: "Premium",
    },
    {
      label: "Security Settings",
      href: "",
      icon: "Settingss",
    },
    {
      label: "Legal & Compliance",
      href: "",
      icon: "leagal_doc",
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:w-[350px]">
      <nav className="hidden lg:flex lg:flex-col lg:gap-8 items-start gap-1 border border-gray-300 rounded-2xl mb-4 p-5">
        <div className="flex flex-col gap-64 justify-between items-center w-full">

          {/* --------- Dynamic Links --------- */}
          <div className="flex flex-col gap-6 mt-5 pr-6">
            {Links.map((item, idx) => (
              <div
                key={idx}
                role="button"
                className={`flex items-center justify-center w-full py-7 h-[45px] rounded hover:bg-blue-gray-50
                ${item.active ? "bg-secondary text-white" : ""}`}
              >
                <Link
                  href={item.href}
                  className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
                >
                  <SvgIcon name={item.icon} />
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* -------- Bottom Section -------- */}
          <div className="flex flex-col gap-8 pr-6">
            <Link
              href=""
              className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6 text-paragraph"
            >
              <SvgIcon name="Question" />
              Help & Support
            </Link>

            <button
              onClick={()=>user_logout()}
              type="button"
              className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6 text-paragraph"
            >
              <SvgIcon name="Logout" />
              Sign Out
            </button>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}
