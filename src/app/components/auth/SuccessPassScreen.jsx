import Image from "next/image";

export default function SuccessPassScreen({ setActiveModal }) {
  return (
    <>
      <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full mx-auto">
          <div className="relative bg-white rounded-lg shadow-sm">
            <div className="p-4 md:p-5 h-[680]">
              <div className="flex items-center justify-center gap-3 mt-[60px] mb-10">
                <Image
                  src="/logo.png"
                  alt="logo image"
                  height={50}
                  width={50}
                  style={{ width: "40px", height: "40px" }}
                />
                <h1 className="font-semibold text-[23px] font-sans text-gray-500">
                  Venejobs
                </h1>
              </div>
              <div className="mt-20">
                <h2 className="text-center text-heading font-semibold text-[42px]  mb-3">
                  Password Reset
                </h2>
                <p className="text-paragraph text-center text-[16px] ">
                  Your password has been successfully reset. Click below to log
                  in magically.
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 justify-end m-5">
                {/* <button className="bg-[#01237C] h-[60px] w-1/2 text-[#FAFAFA] rounded">Continue</button> */}
                <button
                  onClick={() => setActiveModal("signin")}
                  className="text-[#858585] text-[16px] font-semibold"
                >
                  Back to Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
