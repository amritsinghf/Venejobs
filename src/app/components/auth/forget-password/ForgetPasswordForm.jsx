import { useForm } from "react-hook-form";
import userApiStore from "@/app/store/userStore";
import toastStore from "@/app/store/toastStore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "../../button/Button";

export default function ForgetPasswordForm({ setActiveModal, setUserEmail }) {
    const forgetPassword = userApiStore((s) => s.forgetPassword);
    const loading = userApiStore((s) => s.loading);
    const showToast = toastStore.getState().showToast;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await forgetPassword(data);

            if (res.success) {
                showToast(res.message, "success");
                setUserEmail(data.email);
                setActiveModal("check_mail_screen");
            }
        } catch (error) {
            if (error.response) {
                showToast(error.response.data.message, "error");
            }
        }
    };

    return (
        <>
            <h2 className="text-3xl text-heading font-extrabold leading-tight text-center mb-3">
                Forgot password?
            </h2>

            <p className="text-sm text-center text-gray-500 tracking-wide">
                No worries, we’ll send you reset instructions.
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 mt-6 px-2 md:px-6"
            >
                <div>
                    <input
                        type="text"
                        id="email"
                        className="
                            block w-full py-3 px-1 text-base 
                            border-b border-neutral-300 
                            focus:border-primary focus:outline-none 
                            placeholder:text-sm
                        "
                        placeholder="Email Address"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Please enter a valid email address",
                            },
                        })}
                    />

                    {errors.email && (
                        <span className="text-red-500 font-normal text-sm tracking-wide">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                {/* Button Right Aligned */}
                <div className="flex justify-end">
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-[200px] h-[50px] md:h-[60px] bg-primary text-white border border-[#FAFAFA] rounded-md flex items-center justify-center gap-2 font-semibold tracking-wide text-sm md:text-base cursor-pointer disabled:opacity-70"
                    >
                        {loading ? (
                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        ) : (
                            "Reset Password"
                        )}
                    </Button>
                </div>
            </form>

            <div className="flex justify-end mt-5 px-2 md:px-6 pb-4">
                <Button
                    type="button"
                    className="text-gray-600 text-sm flex items-center gap-2 cursor-pointer"
                    onClick={() => setActiveModal("signin")}
                >
                    <ArrowBackIcon className="text-gray-500" style={{ fontSize: "16px" }} />
                    Back to Login
                </Button>
            </div>
        </>
    );
}
