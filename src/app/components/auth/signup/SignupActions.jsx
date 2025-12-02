import Button from "../../button/Button";
import SvgIcon from "../../SvgIcon";

export default function SignupActions({ isSubmitting, setActiveModal }) {
    return (
        <>
            {/* Terms & Conditions */}
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    className="
                        w-4 h-4 cursor-pointer appearance-none
                        border border-gray-400 rounded
                        flex items-center justify-center
                        checked:bg-primary checked:border-primary
                        relative
                        checked:before:content-['✔']
                        checked:before:text-white
                        checked:before:text-xs
                        checked:before:flex
                        checked:before:items-center
                        checked:before:justify-center
                        checked:before:absolute
                        checked:before:inset-0
                    "
                />

                <span className="text-sm">
                    <span className="text-gray-500">I agree to the </span>
                    <span className="font-semibold text-heading">Privacy Policy</span>
                    <span className="text-gray-500"> & </span>
                    <span className="font-semibold text-heading">Terms of Use</span>
                </span>
            </div>

            {/* Sign Up Button */}
            <div className="flex justify-end mt-2">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                        w-full max-w-[200px] h-[55px]
                        bg-primary text-white rounded-md
                        flex items-center justify-center gap-2
                        font-semibold disabled:opacity-70
                    "
                >
                    {isSubmitting ? "Creating..." : "Sign Up"}
                    <SvgIcon name="RightArrWhite" />
                </Button>
            </div>
        </>
    );
}
