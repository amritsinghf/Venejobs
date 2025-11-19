"use client";
import Image from "next/image";
import Link from "next/link";
import "flowbite";
import { useEffect, useState } from "react";
import { get_client_profile } from "@/app/lib/auth/auth.api";

export default function HomeNavbar() {

  const [userData, setuserData] = useState({name:"",email:""})

  const getUserData = async () => {
    const res = await get_client_profile();
    setuserData({name:res.data.user.name,email:res.data.user.email})
  }

  useEffect(() => {
    getUserData();
  }, [])
  
  return (
    <>
      <div className="w-full  xl:w-[600px]  relative">
        <div className="max-w-[1420px] w-full mx-auto  lg:block hidden">
          <div className="flex justify-between items-center py-5 ">
            <div className="flex justify-evenly gap-1  items-center">
              <Image
                src="/home/logo-home.png"
                alt="logo image"
                height={500}
                width={500}
                style={{ width: 40, height: 40 }}
              />
              <h2 className="text-[#666666] font-bold">Venejobs</h2>
            </div>
            <div className="">
              <nav>
                <ul className="flex justify-around  items-center w-[500]">
                  <li className="text-[#666666]">
                    <Link href="">Find Talent</Link>
                  </li>
                  <li className="text-[#666666]">
                    <Link href="">Post a Job</Link>
                  </li>
                  <li className="text-[#666666]">
                    <Link href="">Manage Work</Link>
                  </li>
                  <li className="text-[#666666]">
                    <Link href="">Reports</Link>
                  </li>
                  <li className="text-[#666666]">
                    <Link href="">Messge</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex justify-center gap-1">
              <button
                id="dropdownInformationButton"
                data-dropdown-toggle="dropdownInformation"
                className="inline-flex items-center justify-center  bg-brand  border border-transparent hover:bg-brand-strong  focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                type="button"
              >
                {userData.name}
                <svg
                  className="w-4 h-4 ms-1.5 -me-0.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id="dropdownInformation"
                class="z-10  hidden bg-gray-50 border border-default-medium rounded shadow-lg w-72"
              >
                <div class="">
                  <div class="flex items-center px-2.5 p-2 space-x-1.5 text-sm  bg-neutral-secondary-strong rounded">
                    {/* <img
                      class="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-5.jpg"
                      alt="Rounded avatar"
                    /> */}
                    {/* USER IMAGE WILL DISPLAY HERE */}
                    <div class="text-sm">
                      <div class="font-medium text-heading">{userData.name}</div>
                      <div class="truncate text-body">{userData.email}</div>
                    </div>
                  </div>
                </div>
                <ul
                  class="px-2 pb-2 text-sm text-body font-medium"
                  aria-labelledby="dropdownInformationButton"
                >
                  <li>
                    <a
                      href="#"
                      class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                    >
                      <svg
                        class="w-4 h-4 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-width="2"
                          d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                    >
                      <svg
                        class="w-4 h-4 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="2"
                          d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
                        />
                      </svg>
                      Settings
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                    >
                      <svg
                        class="w-4 h-4 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
                        />
                      </svg>
                      Notifications
                    </a>
                  </li>

                  <li class="flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded mb-1.5">
                    <a href="#" class="inline-flex items-center">
                      <svg
                        class="w-4 h-4 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
                        />
                      </svg>
                      Dark mode
                    </a>
                    <label class="inline-flex items-center cursor-pointer ms-auto">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div class="relative w-9 h-5 bg-black peer-focus:outline-none  peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                      <span class="ms-3 text-sm font-medium text-heading sr-only">
                        Toggle me
                      </span>
                    </label>
                  </li>

                  <li class="border-t border-default-medium pt-1.5">
                    <a
                      href="#"
                      class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                    >
                      <svg
                        class="w-4 h-4 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                        />
                      </svg>
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
