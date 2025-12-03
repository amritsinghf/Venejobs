import Image from "next/image";
import Link from "next/link";
import SvgIcon from "../SvgIcon";

export default function SuccessJobCreate() {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
        <div
          className="
      bg-white rounded-lg shadow-sm 
      w-full max-w-[90%]
      sm:max-w-md
      md:max-w-[600px]
      lg:max-w-[800px]
      xl:max-w-[1000px]
      h-[600px]

      overflow-y-auto
      p-4
    "
        >
          <div className="flex flex-col lg:mt-20 justify-center gap-3 md:p-5">
            <div className="flex justify-center items-center">
              <Image
                src="/job_post/party-popper.png"
                alt="party popper"
                height={150}
                width={150}
                className="sm:h-[150px] sm:w-[150px]"
              />
            </div>

            <h2 className="text-center text-heading font-semibold text-lg lg:text-2xl mb-3">
              Congrats! Your Job Post is Now Live!
            </h2>

            <p className="text-paragraph text-center text-sm lg:text-lg px-3">
              You’ll start receiving proposals soon. You can also browse
              profiles to invite the perfect match.
            </p>

            <div className="flex justify-center">
              <Link
                href={"/client/"}
                className="bg-primary px-3 py-2 lg:px-6 lg:py-3 rounded text-white flex items-center gap-2"
              >
                Continue <SvgIcon name="RightArrWhite"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
