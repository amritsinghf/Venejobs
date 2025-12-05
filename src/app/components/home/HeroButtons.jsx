import Button from "../button/Button";

export default function HeroButtons() {
    return (
        <div className="flex gap-4 w-full">
            <Button
                className="bg-neutral-900 text-white p-4"
                variant="primary"
            >
                Find Freelancer
            </Button>

            <Button
                className="bg-white text-neutral-500 p-3"
                variant="secondary"
            >
                Find Work
            </Button>
        </div>
    );
}
