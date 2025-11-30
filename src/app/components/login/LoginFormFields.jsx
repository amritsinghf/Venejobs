import PasswordInput from "./PasswordInput";

export default function LoginFormFields({
    register,
    errors,
    isVisible,
    toggleVisibility,
}) {
    return (
        <>
            {/* Email */}
            <div>
                <input
                    type="email"
                    placeholder="Email Address"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address",
                        },
                    })}
                    className="block py-2.5 px-1 w-full text-base border-b border-neutral-300 focus:border-[var(--color-primary)] focus:outline-none text-heading tracking-wide placeholder:text-sm"
                />

                {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}
            </div>

            <PasswordInput
                register={register}
                errors={errors}
                isVisible={isVisible}
                toggleVisibility={toggleVisibility}
            />
        </>
    );
}
