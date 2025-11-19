import Image from "next/image";
import Link from "next/link";

export default function SuccessJobCreate() {
  return (
    <>
      <div className="flex flex-col justify-center overflow-y-auto  overflow-x-hidden fixed top-0 right-0 left-0 z-50  items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="p-4 w-[900px]  max-h-full mx-auto">
          <div className="bg-white rounded-lg shadow-sm ">
            <div className="flex flex-col justify-center  gap-3 md:p-5 h-[750]">
              <div className="flex justify-center items-center">
                <Image
                  src="/job_post/party-popper.png"
                  alt="part popper"
                  height={150}
                  width={150}
                />
              </div>
              <h2 className="text-center text-[#333333] font-semibold text-2xl  mb-3">
                Congrats! Your Job Post is Now Live!
              </h2>
              <p className="text-[#666666] text-center text-[18px] ">
                You’ll start receiving proposals soon. You can also browse
                profiles to invite the perfect match.
              </p>
              <div className="flex justify-center  ">
                <Link
                  href={"/client/"}
                  className="bg-blue-900 p-4 rounded text-white"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
