import Link from "next/link";
import SvgIcon from "../../SvgIcon";
import Button from "../../button/Button";
import userApiStore from "@/app/store/userStore";
import toastStore from "@/app/store/toastStore";
import { useRouter } from "next/navigation";
import { Routes } from "@/app/routes";

export default function DesktopLinks() {
  const router = useRouter();
  const { logout } = userApiStore();
  const showSuccess = toastStore.getState().showSuccess;
  const showError = toastStore.getState().showError;

  const Links = [
    {
      label: "My Info",
      href: Routes.profile.client.info,
      icon: "Preview",
      active: true,
    },
    {
      label: "Billing & Payments",
      href: Routes.profile.client.bill,
      icon: "CreditCard",
    },
    {
      label: "Notification",
      href: "",
      icon: "Notify",
    },
    {
      label: "Subscription Setting",
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

  const user_logout = () => {
    try {
      logout();
      localStorage.removeItem("token");
      router.push(Routes.home);
      showSuccess("Logged Out Successfully!", "success");
    } catch (error) {
      showError(error, "error");
    }
  };

  return (
    <div className="hidden lg:flex flex-col w-[350px]">
      <nav className="flex flex-col border border-[#D0D5DD] rounded-2xl py-7 px-5 h-full">

        {/* --------- Dynamic Links --------- */}
        <div className="flex flex-col w-full gap-4">
          {Links.map((item, idx) => (
            <div
              key={idx}
              role="button"
              className={`flex items-center w-full py-3.5 rounded-lg transition-all
              ${item.active ? "bg-primary text-white" : "hover:bg-blue-gray-50"}
            `}
            >
              <Link
                href={item.href}
                className="flex items-center gap-3 font-medium text-base w-full text-paragraph px-2"
              >
                <SvgIcon name={item.icon} />
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        {/* -------- Bottom Section -------- */}
        <div className="flex flex-col gap-3 mt-auto">

          <Link
            href=""
            className="flex items-center gap-3 text-base font-medium text-paragraph py-3.5 px-2"
          >
            <SvgIcon name="Question" />
            Help & Support
          </Link>

          <div
            onClick={user_logout}
            className="flex items-center gap-3 text-base font-medium text-paragraph py-3.5 px-2 cursor-pointer"
          >
            <SvgIcon name="Logout" />
            Sign Out
          </div>

        </div>

      </nav>
    </div>
  );

}
