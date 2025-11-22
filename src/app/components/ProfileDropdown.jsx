import { useEffect, useState } from "react";
import SvgIcon from "./SvgIcon";
import { useRouter } from "next/navigation";
import userApiStore from "../store/userStore";
import toastStore from "../store/toastStore";

export default function ProfileDropdown() {
  const router = useRouter();
  const { data, loading, error, fetchData } = userApiStore();
  const showToast = toastStore.getState().showToast;

  useEffect(() => {
    if (data.length === 0) fetchData();
  }, [data, fetchData]);

  const logout = async () => {
    localStorage.removeItem("token");
    //currenly just removing from localstorage but still in cookie
    showToast("Logged Out Successfully!", "success");
    router.push("/");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="flex justify-center gap-1">
        <button
          id="dropdownInformationButton"
          data-dropdown-toggle="dropdownInformation"
          className="inline-flex items-center justify-center  bg-brand  border border-transparent hover:bg-brand-strong  focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          type="button"
        >
          {data.user.name}
          <SvgIcon name="DownArrow" />
        </button>

        <div
          id="dropdownInformation"
          className="z-10  hidden bg-gray-50 border border-default-medium rounded shadow-lg w-72"
        >
          <div className="">
            <div className="flex items-center px-2.5 p-2 space-x-1.5 text-sm  bg-neutral-secondary-strong rounded">
              {/* <img
                class="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-5.jpg"
                alt="Rounded avatar"
              /> */}
              {/* USER IMAGE WILL DISPLAY HERE */}
              <div className="text-sm">
                {/* <div className="font-medium text-heading">{data.user.name}</div> */}
                {/* <div className="truncate text-body">{data.user.email}</div> */}
              </div>
            </div>
          </div>
          <ul
            className="px-2 pb-2 text-sm text-body font-medium"
            aria-labelledby="dropdownInformationButton"
          >
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
              >
                <SvgIcon name="Account" />
                Account
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
              >
                <SvgIcon name="Settings" />
                Settings
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
              >
                <SvgIcon name="Notification" />
                Notifications
              </a>
            </li>

            <li className="flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded mb-1.5">
              <a href="#" className="inline-flex items-center">
                <SvgIcon name="Darkmode" />
                Dark mode
              </a>
              <label className="inline-flex items-center cursor-pointer ms-auto">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-9 h-5 bg-black peer-focus:outline-none  peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                <span className="ms-3 text-sm font-medium text-heading sr-only">
                  Toggle me
                </span>
              </label>
            </li>

            <li className="border-t border-default-medium pt-1.5">
              <button
                href="#"
                className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                onClick={() => logout()}
              >
                <SvgIcon name="Signout" />
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
