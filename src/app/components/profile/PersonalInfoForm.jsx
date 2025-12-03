import userApiStore from "@/app/store/userStore";
import Image from "next/image";

export default function PersonalInfoForm() {
  const { user, logout, fetchProfile } = userApiStore();
  return (
    <div className="px-2 ">
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex flex-col gap-3 ">
          <h2 className="text-heading text-3xl sm:text-[32px] font-semibold">My Info</h2>
          <p className="text-paragraph text-sm sm:text-lg">
            Update your account information
          </p>
        </div>

        <div className="flex items-center justify-between mt-6">
          <h2 className="text-heading  text-lg sm:text-2xl font-semibold">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-8">
        <div className="flex flex-col gap-2 ">
          <h3 className="text-heading">Name : </h3>
          <input
            type="text"
            placeholder="Name"
            value={user?.name ?? ""}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="border border-gray-100 rounded text-paragraph py-4 px-6"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <h3 className="text-heading">Username : </h3>
          <input
            type="text"
            placeholder="Username"
            value={user?.username ?? ""}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="border border-gray-100 rounded text-paragraph py-4 px-6"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <h3 className="text-heading">Date of Birth : </h3>
          <input
            type="date"
            placeholder="DOB"
            className="border border-gray-100 rounded text-paragraph py-4 px-6"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <h3 className="text-heading">Mobile Number : </h3>
          <input
            type="text"
            placeholder="Mobile Number"
            className="border border-gray-100 rounded text-paragraph py-4 px-6"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <h3 className="text-heading">Email : </h3>
          <input
            type="text"
            placeholder="Email"
            value={user?.email ?? ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="border border-gray-100 rounded text-paragraph py-4 px-6"
          />
        </div>
      </div>
    </div>
  );
}
