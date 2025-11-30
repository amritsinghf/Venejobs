import SvgIcon from "../../SvgIcon";

export default function PasswordInput({ register, errors, isVisible, toggleVisibility }) {
    return (
        <div className="relative">
            <input
                type={isVisible ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                    required: "Password is required",
                })}
                className="block py-2.5 px-1 w-full text-base border-b border-neutral-300 focus:border-[var(--color-primary)] focus:outline-none text-heading tracking-wide placeholder:text-sm"
            />

            <button
                type="button"
                onClick={toggleVisibility}
                className="absolute inset-y-0 right-0 flex items-center"
            >
                <SvgIcon name="Eye" />
            </button>

            {errors.password && (
                <span className="text-red-500 text-sm">
                    {errors.password.message}
                </span>
            )}
        </div>
    );
}
