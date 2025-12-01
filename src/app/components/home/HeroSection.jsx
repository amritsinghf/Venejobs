import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";

export default function HeroSection() {
    return (
        <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left gap-10">
            {/* LEFT CONTENT */}
            <div className="flex-1 flex flex-col gap-6 lg:gap-9">
                <h1 className="text-start text-white font-bold text-3xl md:text-5xl lg:text-6xl leading-10 lg:leading-18 tracking-normal">
                    Effortless hiring, inspired work with Venejobs.
                </h1>

                <p className="text-start text-white text-base md:text-lg w-full lg:max-w-5/6">
                    Work with talented people at the most affordable price to get the most
                    out of your time and cost
                </p>

                <HeroButtons />
            </div>

            <HeroImage />
        </div >
    );
}
