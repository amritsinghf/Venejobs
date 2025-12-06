import { useFormContext } from "react-hook-form";
import Button from "../../button/Button";
import SvgIcon from "../../SvgIcon";

const TitleInputSection = ({ handleNext }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col gap-4 w-full">
                <h2 className="text-xl xl:text-2xl text-heading font-bold leading-9">
                    Write a title for your job post
                </h2>

                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        {...register("title", {
                            required: "Title required",
                            minLength: {
                                value: 5,
                                message: "Title should be atleast 5 characters long",
                            },
                        })}
                        className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#D0D5DD] focus:border-primary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
                        placeholder="Enter Your Title"
                    />

                    {errors.title && (
                        <span className="text-sm text-red-500 font-medium">
                            {errors.title.message}
                        </span>
                    )}
                </div>


                <div className="flex flex-col gap-4 lg:gap-6">
                    <h3 className="text-base lg:text-lg text-heading font-bold">Example titles</h3>

                    <ul className="flex flex-col text-gray-500 text-base font-medium gap-4 list-disc pl-6 tracking-wide">
                        <li>UX/UI designer to bring website mockup and prototype to life</li>
                        <li>Video editor needed to create whiteboard explainer video</li>
                        <li>Remote assistant to handle scheduling & customer support</li>
                    </ul>

                    <div className="flex justify-end mt-5">
                        <Button
                            type="button"
                            onClick={handleNext}
                            className="bg-primary text-white border flex items-center gap-2 justify-center"
                        >
                            Next <SvgIcon name="NextArrow" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleInputSection;
