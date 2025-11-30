import Image from "next/image";
import Button from "../button/Button";
import SvgIcon from "../SvgIcon";

export default function MostPopular() {
    const cards = [1, 2, 3, 4];

    return (
        <div className="w-full flex flex-col px-1 gap-8 max-w-[1420px] mt-40">
            <div className="flex flex-col gap-3 md:flex-row justify-between items-center sm:px-3">
                <div>
                    <h2 className="text-[32px] lg:text-[44px] font-bold">Most Popular</h2>
                    <p className="text-zinc-500 text-[18px]">See how you can up your career status</p>
                </div>

                <Button className="flex gap-2 p-2 md:p-6 bg-[#5BBB7B1A] text-primary font-bold">
                    All category <SvgIcon name="RightOne" />
                </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-around items-center">
                {cards.map((c, i) => (
                    <div
                        key={i}
                        className="bg-neutral-primary-soft max-w-sm rounded-md w-[328px] shadow-xs"
                    >
                        <Image
                            src="/pop1.png"
                            alt="category"
                            width={328}
                            height={249}
                            className="w-full"
                        />
                        <div className="flex flex-col px-4 mt-5 gap-4">
                            <p className="text-paragraph text-[16px]">November 7, 2022</p>

                            <h5 className="font-semibold text-lg">
                                Exploring Some of the Cities and Home Services
                            </h5>

                            <p className="text-[14px] text-paragraph">
                                Bringing the culture of sharing to everyone
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
