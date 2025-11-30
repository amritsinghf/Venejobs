import Image from "next/image";
import Button from "../button/Button";
import SvgIcon from "../SvgIcon";

export default function MostPopular() {
    const cards = [1, 2, 3, 4];

    return (
        <div className="w-full flex flex-col gap-8">

            <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center text-left">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl lg:text-5xl text-heading font-bold leading-tight w-full text-start">
                        Most Popular
                    </h2>

                    <p className="text-gray-500 text-sm md:text-lg text-start tracking-wide font-medium">
                        See how you can up your career status
                    </p>
                </div>

                <Button className="flex items-center justify-center md:justify-center gap-2 bg-[#5BBB7B1A] text-primary font-bold text-base w-fit">
                    All category
                    <SvgIcon name="RightOne" />
                </Button>
            </div>

            <div className="w-full flex flex-wrap justify-start gap-6 lg:justify-between">
                {cards.map((c, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-lg w-full md:w-[328px] shadow-[0_6px_15px_rgba(64,79,104,0.05)] overflow-hidden border border-[#E5E7EB]"
                    >
                        <Image
                            src="/pop1.png"
                            alt="popular"
                            width={328}
                            height={249}
                            className="w-full h-[249px] object-cover"
                        />

                        <div className="px-4 py-6 flex flex-col gap-4">
                            <p className="text-gray-500 font-medium text-sm">
                                November 7, 2022
                            </p>

                            <h5 className="font-semibold text-lg leading-7 text-heading">
                                Exploring Some of the Cities and Home Services
                            </h5>

                            <p className="text-gray-500 font-medium text-sm leading-snug">
                                Bringing the culture of sharing to everyone
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
}
