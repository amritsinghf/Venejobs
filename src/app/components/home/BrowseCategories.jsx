import CategorySlider from "../BrowseCategories/CategorySlider";
import { categories } from "../BrowseCategories/data";
import Button from "../button/Button";
import SvgIcon from "../SvgIcon";

export default function BrowseCategories() {
    return (
        <section className="w-full">
            {/* HEADER */}
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-start md:items-center mb-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl lg:text-5xl font-bold text-heading">
                        Browse talent by category
                    </h2>

                    <p className="text-gray-500 text-sm md:text-lg">
                        Get some Inspirations from 1800+ skills
                    </p>
                </div>

                <Button className="flex items-center gap-2 bg-[#5BBB7B1A] text-primary font-semibold rounded-md">
                    All Category
                    <SvgIcon name="RightOne" />
                </Button>
            </div>

            {/* SLIDER */}
            <CategorySlider items={categories} />
        </section>
    );
}
