import Image from "next/image";
import Button from "../../button/Button";
import Link from "next/link";
import SvgIcon from "../../SvgIcon";
import ClearIcon from "@mui/icons-material/Clear";
import userApiStore from "@/app/store/userStore";
import toastStore from "@/app/store/toastStore";
import { useRouter } from "next/navigation";
import { Routes } from "@/app/routes";

export default function SidebarLinks({ menuOpen, setMenuOpen }) {
  const { user, logout, fetchProfile } = userApiStore();
  const router = useRouter();
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
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 lg:hidden h-full w-100 bg-white shadow-xl z-50 p-4 flex flex-col gap-5 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full "
        }`}
      >
        <div className="flex justify-between items-center mt-10">
          <div className="flex items-center gap-2">
            <Image
              src="/logo_freelance.png"
              alt="logo image"
              height={500}
              width={500}
              style={{ width: 50, height: 50 }}
              className="cursor-pointer"
            />
            <h5 className="text-4xl sm:text-2xl  font-semibold text-gray-900">
              Venejobs
            </h5>
          </div>
          <Button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            <ClearIcon fontSize="large" />
          </Button>
        </div>
        <hr />
        <nav className="flex flex-col items-start gap-4 sm:gap-3 mt-5 ">
          <div
            role="button"
            className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50"
          >
            <Link
              href={""}
              className="flex items-center gap-4  text-center text-2xl  px-4  font-medium  w-full border bg-secondary text-white py-3 rounded-2xl"
            >
              <SvgIcon name="Preview" /> My Info
            </Link>
          </div>
          <div
            role="button"
            className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50"
          >
            <Link
              href={""}
              className="flex items-center gap-4  text-center text-2xl  px-4  font-medium  w-full text-paragraph py-3 rounded-2xl"
            >
              <SvgIcon name="CreditCard" />
              Billing & Payments
            </Link>
          </div>

          <div
            role="button"
            className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50"
          >
            <Link
              href={""}
              className="flex items-center gap-4  text-center text-2xl  px-4  font-medium  w-full text-paragraph py-3 rounded-2xl"
            >
              <SvgIcon name="Notify" />
              Notification
            </Link>
          </div>
          <div
            role="button"
            className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50"
          >
            <Link
              href={""}
              className="flex items-center gap-4  text-center text-2xl  px-4  font-medium  w-full text-paragraph py-3 rounded-2xl"
            >
              <SvgIcon name="Premium" />
              Get paid
            </Link>
          </div>
          <div
            role="button"
            className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50"
          >
            <Link
              href={""}
              className="flex items-center gap-4  text-center text-2xl  px-4  font-medium  w-full text-paragraph py-3 rounded-2xl"
            >
              <SvgIcon name="Settingss" />
              Security Settings
            </Link>
          </div>

          <div
            role="button"
            className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50"
          >
            <Link
              href={""}
              className="flex items-center gap-4  text-center text-2xl  px-4  font-medium  w-full text-paragraph py-3 rounded-2xl"
            >
              <SvgIcon name="leagal_doc" />
              Legal & Compliance
            </Link>
          </div>

          <div className="mt-20 flex flex-col gap-2">
            <div
              role="button"
              className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 "
            >
              <Link
                href={""}
                className="flex items-center gap-5 text-2xl  px-4 font-medium text-center  text-paragraph"
              >
                <SvgIcon name="Question" />
                Help & Support
              </Link>
            </div>

            <div
              role="button"
              className="flex items-center w-full py-3 rounded-lg hover:bg-blue-gray-50 "
            >
              <Button
                onClick={() => user_logout()}
                className="flex items-center gap-5 text-2xl  px-4 font-medium text-center  text-paragraph"
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
