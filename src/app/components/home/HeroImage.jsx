import Image from "next/image";

export default function HeroImage() {
    return (
        <div className="relative flex items-center justify-center">
            <Image
                src="/heroSectionImage.png"
                alt="person working"
                width={450}
                height={500}
                className="md:w-[400px] lg:w-[500px] xl:w-full"
            />
            {/* Floating Card 1 - Proof of Quality */}
            <div className="absolute left-[-60px] bottom-5 bg-white shadow-lg rounded-2xl px-5 py-3 hidden lg:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <img src="/icons/medal.png" className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="text-start font-semibold text-sm text-gray-800 tracking-wide">Proof of quality</h4>
                    <p className="text-xs text-gray-600 tracking-wide font-normal">Lorem Ipsum Dolor Amet</p>
                </div>
            </div>

            {/* Floating Card 2 - Safe & Secure */}
            <div className="absolute lg:right-0 xl:right-[-100px] bottom-25 bg-white shadow-lg rounded-2xl  px-5 py-3 hidden lg:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center ">
                    <img src="/icons/security.png" className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="text-start font-semibold text-sm text-gray-800 tracking-wide">Safe & secure</h4>
                    <p className="text-xs text-gray-600 tracking-wide font-normal">Lorem Ipsum Dolor Amet</p>
                </div>
            </div>

        </div>
    );
}
