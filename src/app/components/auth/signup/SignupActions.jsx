import Button from "../../button/Button";
import SvgIcon from "../../SvgIcon";

export default function SignupActions({ isSubmitting, setActiveModal }) {
    return (
        <>
            <div className="flex gap-2 items-center">
                <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer checked:bg-primary checked:border-primary"
                />

                <span className="text-sm">
                    <span className="text-gray-500">I agree to the </span>
                    <span className="text-heading font-semibold">Privacy Policy</span>
                    <span className="text-gray-500"> & </span>
                    <span className="text-heading font-semibold">Terms of Use</span>
                </span>
            </div>

            <div className="flex justify-end mt-2">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full max-w-[200px] h-[55px] bg-primary text-white rounded-md flex items-center justify-center gap-2 font-semibold"
                >
                    {isSubmitting ? "Creating..." : "Sign Up"}
                    <SvgIcon name="RightArrWhite" />
                </Button>
            </div>
        </>
    );
}
