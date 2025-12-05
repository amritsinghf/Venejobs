import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/SvgIcon";
import { Routes } from "@/app/routes";
import userApiStore from "@/app/store/userStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toastStore from "@/app/store/toastStore";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import { useState } from "react";

export default function Page() {
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

  const menuItems = [
    {
      label: "My Info",
      icon: "Preview",
      href: Routes.profile.client.info,
    },
    {
      label: "Billing & Payments",
      icon: "CreditCard",
      href: Routes.profile.client.bill,
    },
    {
      label: "Notification",
      icon: "Notify",
      href: "/notifications",
    },
    {
      label: "Subscription Setting",
      icon: "Premium",
      href: "/subscription",
    },
    {
      label: "Security Settings",
      icon: "Settingss",
      href: "/security-settings",
    },
    {
      label: "Legal & Compliance",
      icon: "leagal_doc",
      href: "/legal",
    },
  ];

  const [activeTab, setActiveTab] = useState(menuItems[0].label);

  return (
    <>
      <div className="flex flex-col gap-44 justify-between items-center w-full md:px-3 lg:hidden">
        <div className="rounded-2xl flex flex-col gap-44 p-1 w-full ">
          <div className="flex flex-col gap-6 mt-5">
            <div className="flex justify-between items-center px-4 py-2 border border-gray-200 rounded-4xl shadow">
              <div className="flex items-center gap-2">
                <img
                  src={
                    user?.profile_picture ||
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  }
                  alt=""
                  className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
                <p>Hi, {user?.name || "User"} !</p>
              </div>

              <Link
                className="bg-primary text-white p-1 rounded text-sm 
             active:scale-95 transition-transform duration-150 hover:scale-105 hover:shadow-md flex items-center gap-1"
                href={Routes.client}
              >
                <HomeFilledIcon fontSize="small" /> Home
              </Link>
            </div>
            {menuItems.map((item) => (
              <div
                key={item.label}
                role="button"
                className={`flex items-center justify-start w-full py-6 h-[45px] hover:bg-blue-gray-50 border border-gray-200 rounded-4xl shadow ${
                  activeTab === item.label
                    ? "bg-primary text-white"
                    : "text-paragraph"
                }`}
                onClick={() => setActiveTab(item.label)} // set clicked tab as active
              >
                <Link
                  href={item.href}
                  className="flex items-center lg:w-64 gap-4 text-lg text-center px-6 w-full"
                >
                  <SvgIcon name={item.icon} /> {item.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <Link
              href={""}
              className="flex items-center md:w-full justify-start px-10 py-2 gap-5 lg:w-64  text-lg text-center  text-paragraph border border-gray-200 rounded-4xl shadow active:scale-95 transition-transform duration-150 hover:scale-105 hover:shadow-md"
            >
              <SvgIcon name="Question" />
              Help & Support
            </Link>
            <Button
              onClick={() => user_logout()}
              type="button"
              className="flex items-center md:w-full justify-start px-10 py-2 gap-5 lg:w-64  text-lg text-center  text-paragraph border border-gray-200 rounded-4xl shadow active:scale-95 transition-transform duration-150 hover:scale-105 hover:shadow-md"
            >
              <SvgIcon name="Logout" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
