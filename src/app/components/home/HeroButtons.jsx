import Button from "../button/Button";

export default function HeroButtons() {
    return (
        <div className="flex gap-4 w-full">
            <Button
                className="w-full max-w-[200px] flex-1 h-[50px] md:h-[60px] bg-neutral-900 text-white font-semibold tracking-wide text-sm md:text-base rounded-md flex items-center justify-center cursor-pointer"
            >
                Find Freelancer
            </Button>

            <Button
                className="w-full max-w-[200px] flex-1 h-[50px] md:h-[60px] bg-white text-neutral-500 font-semibold tracking-wide text-sm md:text-base rounded-md flex items-center justify-center cursor-pointer"
            >
                Find Work
            </Button>
        </div>
    );
}
