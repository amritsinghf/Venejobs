import Image from "next/image";
import Button from "../button/Button";

export default function CheckMailScreen({ setActiveModal }) {
  return (
    <>
      <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full mx-auto">
          <div className="relative bg-white w-[440px] rounded-lg shadow-sm">
            <div className="p-4 pt-15 pb-40 md:pt-15">
              <div className="flex items-center justify-center gap-3 mt-[60px] mb-10">
                <Image
                  src="/logo.png"
                  alt="logo image"
                  height={50}
                  width={50}
                  style={{ width: "40px", height: "40px" }}
                />
                <h1 className="font-semibold text-xl text-gray-500">
                  Venejobs
                </h1>
              </div>
              <div className="">
                <h2 className="text-3xl text-heading font-extrabold leading-tight text-center mb-3">
                  Check your email
                </h2>
                <p className="text-sm text-center text-gray-500 tracking-wide">
                  Didn’t receive the email?{" "}
                  <b style={{ color: "var(--color-primary)", cursor: "pointer" }}>
                    Click to resend
                  </b>
                </p>
              </div>

              <div className="flex justify-center m-5">
                <Button
                  onClick={() => setActiveModal("otp_verify")}
                  className="w-[200px] h-[50px] md:h-[60px] bg-primary text-white border border-[#FAFAFA] rounded-md flex items-center justify-center gap-2 font-semibold tracking-wide text-sm md:text-base cursor-pointer disabled:opacity-70"
                >
                  Verify Your OTP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
