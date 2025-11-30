import Button from "../button/Button";

export default function HeroButtons() {
    return (
        <div className="flex gap-4 w-full">
            <Button
                className="rounded-md py-3 px-6 lg:py-4 lg:px-8 flex-1 max-w-[200px] font-semibold tracking-wide text-sm lg:!text-base text-white bg-neutral-900 cursor-pointer"
            >
                Find Freelancer
            </Button>

            <Button
                className="rounded-md py-4 px-6 lg:py-4 lg:px-8 flex-1 max-w-[200px] font-semibold tracking-wide text-sm lg:!text-base text-neutral-500 bg-white cursor-pointer"
            >
                Find Work
            </Button>
        </div>
    );
}
