import Image from "next/image";
import SvgIcon from "../SvgIcon";
import Button from "../button/Button";

export default function FreelancerPromo() {
    return (
        <div className="w-full flex flex-col items-center lg:flex-row gap-[60px] max-w-[1420px] mt-[195px] px-3">
            <div className="w-[508px] sm:w-[600px] md:w-[500px] lg:w-[950px]">
                <Image
                    src="/home/manwithphone.jpg"
                    alt="man on phone"
                    width={644}
                    height={692}
                />
            </div>

            <div className="flex w-full justify-center px-5">
                <div className="flex flex-col h-[575px] gap-4">

                    <p className="text-primary text-[16px] xl:text-[44px] font-bold">
                        #Great Freelance Marketplace
                    </p>

                    <h2 className="xl:text-[44px] text-[32px] font-bold">
                        Empowering Freelancers to Achieve Their Career Goals
                    </h2>

                    <p className="text-lg text-[#6B7177]">
                        Meet clients you're excited to work with and take your career to new heights.
                    </p>

                    {/* Points List */}
                    {[
                        {
                            bold: "Kickstart Your Freelance Journey:",
                            text: " Discover opportunities for beginners and pros.",
                        },
                        {
                            bold: "Build Meaningful Connections:",
                            text: " Work with clients who value your skills.",
                        },
                        {
                            bold: "Grow Your Career with Confidence:",
                            text: " Access projects that match your expertise.",
                        },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-1">
                            <SvgIcon name="Checkmark" />
                            <p className="text-lg">
                                <b>{item.bold}</b>
                                <span className="text-[#6B7177]">{item.text}</span>
                            </p>
                        </div>
                    ))}

                    <Button className="border p-5 lg:p-10 gap-3 mt-10 w-[180px] bg-primary text-white rounded font-semibold">
                        Find Work
                        <SvgIcon name="RightArrWhite" />
                    </Button>

                </div>
            </div>
        </div>
    );
}
