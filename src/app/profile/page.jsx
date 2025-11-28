"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import userApiStore from "../store/userStore";
import { useEffect } from "react";

export default function Profile() {
  const { user, fetchProfile } = userApiStore();

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <HomeNavbar />
      {/* {user?.name} */}
      <div className="w-[600px] sm:w-full 2xl:w-[1500px] 2xl:mx-auto   h-screen mt-28 px-8 ">
        <div className="border-gray-300 border  p-5 rounded-2xl flex flex-col gap-10">
          <div className="flex flex-col gap-3   ">
            <h2 className="text-heading text-3xl sm:text-[32px]">My Info</h2>
            <p className="text-paragraph text-sm sm:text-lg">
              Update your account information
            </p>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="text-heading  text-lg sm:text-2xl">
              Personal Information
            </h2>
            <button className="text-primary">Edit</button>
          </div>

          <div>
            <Image
              className="rounded-full"
              src={"/home/manwithphone.jpg"}
              width={80}
              height={80}
              alt="Profile Image"
            />
          </div>

          <div className="grid grid-cols-2   gap-10">
            <div className="flex flex-col gap-2 ">
              <h3 className="text-heading">Name : </h3>
              <input
                type="text"
                placeholder="Name"
                value={user?.name ?? ""}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="border border-gray-100 rounded text-paragraph"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <h3 className="text-heading">Username : </h3>
              <input
                type="text"
                placeholder="Username"
                value={user?.username ?? ""}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="border border-gray-100 rounded text-paragraph"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <h3 className="text-heading">Date of Birth : </h3>
              <input
                type="date"
                placeholder="DOB"
                className="border border-gray-100 rounded text-paragraph"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <h3 className="text-heading">Mobile Number : </h3>
              <input
                type="text"
                placeholder="Mobile Number"
                className="border border-gray-100 rounded text-paragraph"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <h3 className="text-heading">Email : </h3>
              <input
                type="text"
                placeholder="Email"
                value={user?.email ?? ""}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="border border-gray-100 rounded text-paragraph"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
