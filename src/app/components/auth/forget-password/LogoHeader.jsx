import Image from "next/image";

export default function LogoHeader() {
    return (
        <div className="flex items-center justify-center gap-3 mt-10 mb-8">
            <Image
                src="/logo.png"
                alt="logo image"
                width={40}
                height={40}
                className="w-[36px] h-[36px] md:w-[40px] md:h-[40px]"
            />

            <h1 className="font-semibold text-xl text-gray-500">
                Venejobs
            </h1>
        </div>
    );
}
