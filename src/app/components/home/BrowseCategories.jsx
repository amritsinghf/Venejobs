import SvgIcon from "../SvgIcon";
import Button from "../button/Button";

export default function BrowseCategories() {
    return (
        <div className="pt-15 w-full mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left gap-10">
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-start lg:flex-wrap">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[32px] sm:text-[44px] font-bold">
                        Browse talent by category
                    </h2>
                    <p className="text-zinc-500 text-[16px] sm:text-lg">
                        Get some inspirations from 1800+ skills
                    </p>
                </div>

                <Button className="px-4 flex items-center justify-center gap-2 h-[60px] bg-[#5BBB7B1A] text-primary font-bold">
                    All category
                    <SvgIcon name="RightOne" />
                </Button>
            </div>

            {/* SLIDER CODE WILL GO HERE */}
        </div>
    );
}
