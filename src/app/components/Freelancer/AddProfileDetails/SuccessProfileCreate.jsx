import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Loader from "../../common/Loader";
import SvgIcon from "../../Utility/SvgIcon";

export default function SuccessProfileCreate() {
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      window.location.href = "/freelancer/";
    }, 800);
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
        <div
          className="
      bg-white rounded-xl shadow-md
      w-full max-w-md sm:max-w-lg lg:max-w-2xl
      max-h-[90vh] overflow-y-auto
      flex flex-col items-center
      px-6 py-8 sm:px-8 sm:py-10
    "
        >
          {/* Image */}
          <div className="mb-4 sm:mb-6">
            <Image
              src="/icons/party-popper-green.png"
              alt="party popper"
              height={120}
              width={120}
              className="sm:h-[150px] sm:w-[150px]"
            />
          </div>

          {/* Heading */}
          <h2 className="text-center text-heading font-semibold text-lg sm:text-xl lg:text-2xl mb-3">
            Congratulations! Your profile is complete.
          </h2>

          {/* Description */}
          <p className="text-paragraph text-center text-sm sm:text-base lg:text-lg max-w-md mb-6">
           You're all set to start exploring projects, connecting with clients, and building your freelance career.
          </p>

          {/* CTA Button */}
          <Link
            href="/freelancer/"
            onClick={handleClick}
            className={`bg-secondary text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 text-sm sm:text-base transition ${
              loading ? "opacity-70 pointer-events-none" : "hover:opacity-90"
            }`}
          >
            {loading ? (
              <>
                <Loader size={18} border={3} color="white" />
              </>
            ) : (
              <>
                Continue <SvgIcon name="RightArrWhite" />
              </>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}
