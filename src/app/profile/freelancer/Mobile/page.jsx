import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/SvgIcon";
import { Routes } from "@/app/routes";
import Link from "next/link";

export default function MobileView() {
  return (
    <>
      <div className="flex flex-col gap-44 justify-between items-center w-[600px] lg:hidden ">
        <div className="flex flex-col gap-8 mt-5 ">
          <div
            role="button"
            className="flex items-center justify-start w-full py-2 h-[45px] rounded hover:bg-blue-gray-50 bg-secondary text-white "
          >
            <Link
              href={Routes.profile.freelancer.info}
              className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6 "
            >
              <SvgIcon name="Preview" /> Contact Info
            </Link>
          </div>
          <div
            role="button"
            className="flex items-center justify-start w-full py-2 h-[45px] rounded hover:bg-blue-gray-50"
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
            className="flex items-center justify-start w-full py-2 h-[45px] rounded hover:bg-blue-gray-50 "
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
            className="flex items-center justify-start w-full py-2 h-[45px] rounded hover:bg-blue-gray-50 "
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
            className="flex items-center justify-start w-full py-2 h-[45px] rounded hover:bg-blue-gray-50 "
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
            className="flex items-center justify-start w-full py-2 h-[45px] rounded hover:bg-blue-gray-50 "
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
            onClick={() => user_logout()}
            className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6 text-paragraph"
          >
            <SvgIcon name="Logout" />
            Sign Out
          </Button>
        </div>
      </div>
    </>
  );
}
