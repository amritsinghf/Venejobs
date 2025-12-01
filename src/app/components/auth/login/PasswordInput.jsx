import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function PasswordInput({ register, errors, isVisible, toggleVisibility }) {
    return (
        <div className="relative">
            <input
                type={isVisible ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                className="block py-2.5 pr-10 px-1 w-full text-base border-b border-neutral-300
                focus:border-[var(--color-primary)] focus:outline-none text-heading tracking-wide
                placeholder:text-sm"
            />

            <button
                type="button"
                onClick={toggleVisibility}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 flex items-center"
            >
                {isVisible ? <VisibilityOff /> : <Visibility />}
            </button>

            {errors.password && (
                <span className="text-red-500 text-sm block mt-1">
                    {errors.password.message}
                </span>
            )}
        </div>
    );
}
