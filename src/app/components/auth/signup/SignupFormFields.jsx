import PasswordInput from "../login/PasswordInput";
import RoleSelection from "./RoleSelection";

export default function SignupFormFields({
    register,
    errors,
    isVisible,
    toggleVisibility,
}) {
    return (
        <div className="space-y-5">

            <RoleSelection register={register} errors={errors} />

            <div>
                <input
                    type="text"
                    placeholder="Full Name"
                    {...register("name", { required: "Name is required" })}
                    className="block py-2.5 px-1 w-full text-base border-b border-neutral-300 focus:border-[var(--color-primary)] focus:outline-none text-heading tracking-wide placeholder:text-sm"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Username"
                    {...register("username", { required: "Username is required" })}
                    className="block py-2.5 px-1 w-full text-base border-b border-neutral-300 focus:border-[var(--color-primary)] focus:outline-none text-heading tracking-wide placeholder:text-sm"
                />
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
            </div>

            <div>
                <input
                    type="email"
                    placeholder="Email Address"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                        },
                    })}
                    className="block py-2.5 px-1 w-full text-base border-b border-neutral-300 focus:border-[var(--color-primary)] focus:outline-none text-heading tracking-wide placeholder:text-sm"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <PasswordInput
                register={register}
                errors={errors}
                isVisible={isVisible}
                toggleVisibility={toggleVisibility}
            />
        </div>
    );
}
