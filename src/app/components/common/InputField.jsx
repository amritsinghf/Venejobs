import React from "react";

const InputField = ({
    label,
    name,
    register,
    rules,
    value,
    onChange,
    error,
    placeholder,
    type = "text",
    as = "input",
    rows = 4,
    disabled = false,
}) => {
    const commonProps = register
        ? register(name, rules)
        : {
            name,
            value,
            onChange,
        };

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="font-medium lg:text-base tracking-wide">
                    {label}
                </label>
            )}

            {as === "textarea" ? (
                <textarea
                    {...commonProps}
                    rows={rows}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={`
            w-full py-3.5 px-3 text-sm lg:text-base rounded-md
            tracking-wider placeholder:text-sm resize-none
            border transition-all duration-200 focus:outline-none
            ${disabled
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                            : "bg-white text-black border-[#D0D5DD] focus:border-secondary"
                        }
          `}
                />
            ) : (
                <input
                    type={type}
                    {...commonProps}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={`
            w-full py-3.5 px-3 text-sm lg:text-base rounded-md
            tracking-wider placeholder:text-sm
            border transition-all duration-200 focus:outline-none
            ${disabled
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                            : "bg-white text-black border-[#D0D5DD] focus:border-secondary"
                        }
          `}
                />
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default InputField;
