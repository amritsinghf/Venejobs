import SvgIcon from "../../SvgIcon";

export default function RoleSelection({ register, errors }) {
    return (
        <>
            <div className="grid grid-cols-2 gap-1 md:gap-3 mt-5">

                {/* Freelancer */}
                <div>
                    <input
                        type="radio"
                        id="freelancer"
                        value="freelancer"
                        className="hidden peer"
                        {...register("role", { required: "Selecting role is required" })}
                    />

                    <label
                        htmlFor="freelancer"
                        className="
                flex items-center justify-center gap-3
                rounded-lg py-4 cursor-pointer
                text-gray-500 transition-all

                peer-checked:bg-primary
                peer-checked:text-white
                peer-checked:border-primary
            "
                    >
                        <SvgIcon name="Teleworking" className="w-5 h-5" />
                        <span className="text-sm md:text-base font-medium">
                            I'm a freelancer
                        </span>
                    </label>
                </div>

                {/* Client */}
                <div>
                    <input
                        type="radio"
                        id="client"
                        value="client"
                        className="hidden peer"
                        {...register("role", { required: "Selecting role is required" })}
                    />

                    <label
                        htmlFor="client"
                        className="
                flex items-center justify-center gap-3
                rounded-lg py-4 cursor-pointer
                text-gray-500 transition-all

                peer-checked:bg-primary
                peer-checked:text-white
                peer-checked:border-primary
            "
                    >
                        <SvgIcon name="Businessman" className="w-5 h-5" />
                        <span className="text-sm md:text-base font-medium">
                            I'm a Client
                        </span>
                    </label>
                </div>

            </div>


            {errors.role && (
                <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
            )}
        </>
    );
}
