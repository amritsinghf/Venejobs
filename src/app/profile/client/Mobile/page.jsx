import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/SvgIcon";
import { Routes } from "@/app/routes";
import userApiStore from "@/app/store/userStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toastStore from "@/app/store/toastStore";

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
      active:true
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

  return (
    <>
      <div className="flex flex-col gap-44 justify-between items-center w-full lg:hidden ">
        <div className="border border-gray-400 rounded-2xl  flex flex-col gap-44 p-1 md:w-full ">
          <div className="flex flex-col gap-6 mt-5">
            {menuItems.map((item) => (
              <div
                key={item.label}
                role="button"
                className={`flex items-center justify-center w-full py-7 h-[45px] rounded hover:bg-blue-gray-50 ${item.active ? "bg-primary text-white" : "text-paragraph"}`}
              >
                <Link
                  href={item.href}
                  className={`flex items-center lg:w-64 gap-4 text-lg text-center px-6 w-full `}
                >
                  <SvgIcon name={item.icon} /> {item.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <Link
              href={""}
              className="flex items-center w-2xs justify-start px-10 gap-5   lg:w-64  text-lg text-center  text-paragraph"
            >
              <SvgIcon name="Question" />
              Help & Support
            </Link>
            <Button
              onClick={() => user_logout()}
              type="button"
              className="flex items-center w-2xs justify-start px-10 gap-5   lg:w-64  text-lg text-center  text-paragraph"
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
