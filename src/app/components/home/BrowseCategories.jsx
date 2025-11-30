import SvgIcon from "../SvgIcon";
import Button from "../button/Button";

export default function BrowseCategories() {
    return (
        <div className="w-full mx-auto">
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-start lg:flex-wrap">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl lg:text-5xl text-heading font-bold leading-tight w-full text-center lg:text-start">
                        Browse talent by category
                    </h2>
                    <p className="text-gray-500 text-sm md:text-lg text-center lg:text-start tracking-wide">
                        Get some inspirations from 1800+ skills
                    </p>
                </div>

                <Button className="px-4 flex items-center justify-center gap-2 bg-[#5BBB7B1A] text-primary font-bold text-base">
                    All category
                    <SvgIcon name="RightOne" />
                </Button>
            </div>

            {/* SLIDER CODE WILL GO HERE */}
        </div>
    );
}
