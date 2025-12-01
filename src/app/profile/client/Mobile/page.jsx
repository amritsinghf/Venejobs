import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/SvgIcon";
import { Routes } from "@/app/routes";
import Link from "next/link";

export default function Page(){
    return (
        <>
            <div className="flex flex-col gap-44 justify-between items-center w-full lg:hidden">
          <div className="flex flex-col gap-6 mt-5 pr-6">
            <div
              role="button"
              className="flex items-center justify-center w-full py-7 h-[45px] rounded hover:bg-blue-gray-50 bg-primary text-white"
            >
              <Link
                href={Routes.profile.client.info}
                className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6 "
              >
                <SvgIcon name="Preview" /> My Info
              </Link>
            </div>
            <div
              role="button"
              className="flex items-center justify-center w-full py-7 h-[45px] rounded hover:bg-blue-gray-50 "
            >
              <Link
                href={Routes.profile.client.bill}
                className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
              >
                <SvgIcon name="CreditCard" /> Billing & Payments
              </Link>
            </div>

            <div
              role="button"
              className="flex items-center justify-center w-full py-7 h-[45px] rounded hover:bg-blue-gray-50 "
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
              className="flex items-center justify-center w-full py-7 h-[45px] rounded hover:bg-blue-gray-50 "
            >
              <Link
                href={""}
                className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
              >
                <SvgIcon name="Premium" /> Subscription Setting
              </Link>
            </div>
            <div
              role="button"
              className="flex items-center justify-center w-full py-7 h-[45px] rounded hover:bg-blue-gray-50 "
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
              className="flex items-center justify-center w-full py-7 h-[45px] rounded hover:bg-blue-gray-50 "
            >
              <Link
                href={""}
                className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6"
              >
                <SvgIcon name="leagal_doc" /> Legal & Compliance
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8 pr-6">
            <Link
              href={""}
              className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6 text-paragraph"
            >
              <SvgIcon name="Question" />
              Help & Support
            </Link>
            <Button
              onClick={() => user_logout()}
              type="button"
              className="flex items-center lg:w-[260px] gap-4 text-lg text-center px-6 text-paragraph"
            >
              <SvgIcon name="Logout" />
              Sign Out
            </Button>
          </div>
        </div>
        </>
    )
}