import Button from "../button/Button";

export default function HeroButtons() {
    return (
        <div className="flex gap-4 w-full">
            <Button
                className="bg-neutral-900 text-white"
            >
                Find Freelancer
            </Button>

            <Button
                className="bg-white text-neutral-500"
            >
                Find Work
            </Button>
        </div>
    );
}
