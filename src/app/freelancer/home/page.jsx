import Footer_Freelance from "@/app/components/Footer_Freelance";
import HomeNavbarFreelance from "@/app/components/HomeNavbar_Freelance";
import SvgIcon from "@/app/components/SvgIcon";

export default function Home() {
  return (
    <>
      <HomeNavbarFreelance />
      <div className="w-full   max-w-[1420px]  mb-20 mt-30 mx-auto ">
        <div className="w-full bg-gray-100 rounded-2xl p-12 flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center ">
            <h2 className="text-[#333333] font-semibold text-[44px]">
              Find Projects That Match Your Passion With Venejobs
            </h2>
          </div>

          <div className="">
            <p className="text-[#666666] text-[18px]">
              Explore hand-picked freelance jobs tailored to your skills. Start
              earning on your own terms with Venejobs.
            </p>
            <button className="bg-[#5BBB7B] py-4 px-8 rounded text-white mt-5 flex items-center gap-1">
              Learn More <SvgIcon name="NextArrow" />
            </button>
          </div>
        </div>
      </div>
      <Footer_Freelance />
    </>
  );
}
