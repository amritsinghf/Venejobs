import Button from "../../button/Button";
import Loader from "../../common/Loader";
import SvgIcon from "../../SvgIcon";

export default function SignupActions({ isSubmitting, setActiveModal }) {
    return (
        <>
            <div className="flex flex-col gap-10">
                {/* Terms & Conditions */}
                <div className="flex items-center gap-3">
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

                    <span className="text-sm my-5">
                        <span className="text-gray-500">I agree to the </span>
                        <span className="font-semibold text-heading">Privacy Policy</span>
                        <span className="text-gray-500"> & </span>
                        <span className="font-semibold text-heading">Terms of Use</span>
                    </span>
                </div>

                <div className="flex justify-end">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-primary text-white border border-[#FAFAFA] disabled:opacity-70 gap-2"
                        variant="primary"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader size={18} border={3} color="white" />
                            </>
                        ) : (
                            <>
                                Sign Up
                                <SvgIcon name="RightArrWhite" />
                            </>
                        )}
                    </Button>
                </div>


            </div>

        </>
    );
}
