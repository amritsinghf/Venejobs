import SvgIcon from "../SvgIcon";
import Button from "../button/Button";

export default function LoginActions({ setActiveModal, isSubmitting }) {
    return (
        <>
            <div className="flex justify-between items-center flex-wrap gap-3">
                <label className="flex items-center gap-2 text-sm text-gray-500">
                    <input
                        type="checkbox"
                        className="w-4 h-4 cursor-pointer checked:bg-primary checked:border-primary"
                    />
                    Remember Me
                </label>

                <Button
                    type="button"
                    onClick={() => setActiveModal("forget_password")}
                    className="flex items-center text-sm font-semibold text-heading cursor-pointer"
                >
                    Forget password?
                </Button>
            </div>

            <div className="flex justify-end mt-2">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full max-w-[200px] h-[50px] md:h-[60px] bg-primary text-white border border-[#FAFAFA] rounded-md flex items-center justify-center gap-2 font-semibold tracking-wide text-sm md:text-base cursor-pointer"
                >
                    {isSubmitting ? "Logging in" : "Sign In"}
                    <SvgIcon name="RightArrWhite" />
                </Button>
            </div>
        </>
    );
}
