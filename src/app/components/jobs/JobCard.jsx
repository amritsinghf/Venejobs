import SvgIcon from "../SvgIcon";
import Button from "../button/Button";

export default function JobCard({ item }) {
    const budgetType = item?.budget_type
        ? item.budget_type.charAt(0).toUpperCase() + item.budget_type.slice(1)
        : "";

    return (
        <div className="border-b border-[rgba(68,68,68,0.08)] p-6 lg:p-8">

            {/* Desktop View */}
            <div className="w-full flex flex-col lg:flex-row rounded justify-between gap-5 lg:gap-3.5">

                {/* Title + Posted (same CSS) */}
                <div className="flex flex-col gap-5 lg:gap-3.5">
                    <h3 className="text-xl lg:text-2xl text-heading font-semibold tracking-normal">
                        {item.title}
                    </h3>

                    <p className="text-paragraph text-sm lg:text-base font-medium">
                        Posted 4 days ago
                    </p>
                </div>

                {/* RIGHT SIDE – DESKTOP ITEMS */}
                <div className="hidden lg:flex flex-col md:flex-row justify-start md:items-center gap-5 sm:gap-20">

                    {/* Desktop stats (same CSS) */}
                    <span className="hidden lg:flex text-paragraph font-medium text-base">Proposals (2)</span>
                    <span className="hidden lg:flex text-paragraph font-medium text-base">Message (1)</span>
                    <span className="hidden lg:flex text-paragraph font-medium text-base">Shortlist (2)</span>

                    {/* Desktop Button */}
                    <Button className="bg-primary text-white border rounded cursor-pointer hidden lg:flex">
                        View details
                    </Button>

                    {/* Desktop More */}
                    <div
                        role="button"
                        tabIndex={0}
                        className="hidden lg:flex flex-col gap-2 items-center justify-center text-paragraph cursor-pointer "
                    >
                        <SvgIcon name="More" size={22} />
                        More
                    </div>
                </div>
            </div>

            {/* ---------- MOBILE LAYOUT ---------- */}

            {/* Budget stays exactly the same */}
            <div className="flex flex-row items-center gap-3 mt-4 lg:mt-3">
                <SvgIcon name="PriceTag" size={22} />

                <div className="flex items-center gap-1">
                    <p className="text-heading font-semibold">${item.budget_amount}: &nbsp;</p>

                    <p className="text-paragraph text-sm font-medium tracking-wide">
                        {budgetType} Price
                    </p>
                </div>
            </div>

            {/* Move these BELOW Budget for mobile (CSS unchanged) */}
            <div className="flex lg:hidden items-center gap-10 lg:justify-between mt-4">
                <span className="text-paragraph font-medium text-sm">Proposals (2)</span>
                <span className="text-paragraph font-medium text-sm">Message (1)</span>
                <span className="text-paragraph font-medium text-sm">Shortlist (2)</span>
            </div>

            <div className="flex lg:hidden items-center gap-10 mt-6">

                {/* Mobile View Details button — same CSS */}
                <Button className="bg-primary text-white border h-10 md:h-15 px-4 rounded cursor-pointer">
                    View details
                </Button>

                {/* Mobile More button — same CSS */}
                <div
                    role="button"
                    tabIndex={0}
                    className="flex flex-col gap-2 items-center justify-center text-paragraph cursor-pointer font-medium text-sm lg:text-base"
                >
                    <SvgIcon name="More" size={18} />
                    More
                </div>
            </div>

        </div>
    );
}
