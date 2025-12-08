import userApiStore from "@/app/store/userStore";
import Image from "next/image";

export default function PersonalInfoForm() {
  const { user, logout, fetchProfile } = userApiStore();
  return (
    <div className="">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl lg:text-3xl xl:text-3xl text-heading font-bold leading-tight">My Info</h2>
          <p className="text-gray-500 text-sm font-medium leading-7 lg:leading-8 tracking-wide">
            Update your account information
          </p>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-lg xl:text-xl text-heading font-bold leading-9">
            Personal Information
          </h2>
          <button className="text-primary">Edit</button>
        </div>

        <div className="mt-4">
          <Image
            className="rounded-full"
            src={"/home/manwithphone.jpg"}
            width={80}
            height={80}
            alt="Profile Image"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 lg:gap-7 mt-8">
        <div className="flex flex-col gap-2 ">
          <h3 className="text-base text-heading font-bold">Name : </h3>
          <input
            type="text"
            placeholder="Name"
            value={user?.name ?? ""}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#F5F5F5] focus:border-primary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <h3 className="text-base text-heading font-bold">Username : </h3>
          <input
            type="text"
            placeholder="Username"
            value={user?.username ?? ""}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#F5F5F5] focus:border-primary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <h3 className="text-base text-heading font-bold">Date of Birth : </h3>
          <input
            type="date"
            placeholder="DOB"
            className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#F5F5F5] focus:border-primary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <h3 className="text-base text-heading font-bold">Mobile Number : </h3>
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#F5F5F5] focus:border-primary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <h3 className="text-base text-heading font-bold">Email : </h3>
          <input
            type="text"
            placeholder="Email"
            value={user?.email ?? ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#F5F5F5] focus:border-primary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
          />
        </div>
      </div>
    </div>
  );
}
