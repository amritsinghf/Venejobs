import React from "react";

const InputField = ({
    label,
    name,
    register,
    rules,
    error,
    placeholder,
    type = "text",
    as = "input",
    rows = 4,
    disabled = false,
}) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-medium lg:text-base tracking-wide">
                {label}
            </label>

            {as === "textarea" ? (
                <textarea
                    {...register(name, rules)}
                    rows={rows}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={`
            w-full py-3.5 px-3 text-sm lg:text-base rounded-md
            tracking-wide placeholder:text-sm resize-none
            border transition-all duration-200 focus:outline-none
            ${disabled
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                            : "bg-white text-heading border-[#D0D5DD] focus:border-secondary"
                        }
          `}
                />
            ) : (
                <input
                    type={type}
                    {...register(name, rules)}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={`
            w-full py-3.5 px-3 text-sm lg:text-base rounded-md
            tracking-wide placeholder:text-sm
            border transition-all duration-200 focus:outline-none
            ${disabled
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                            : "bg-white text-heading border-[#D0D5DD] focus:border-secondary"
                        }
          `}
                />
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default InputField;
