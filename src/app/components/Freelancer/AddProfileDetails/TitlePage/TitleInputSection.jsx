import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";
import { useFormContext } from "react-hook-form";

const TitleInputSection = ({ handleNext }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl xl:text-2xl text-heading font-bold leading-9">
          Tell us what you do best
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
            className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#D0D5DD] focus:border-secondary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
            placeholder="Enter Your Title"
          />

          {errors.title && (
            <span className="text-sm text-red-500 font-medium">
              {errors.title.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-4 lg:gap-6">
          <h3 className="text-base lg:text-lg text-heading font-bold">
            Example titles
          </h3>

          <ul className="flex flex-col text-gray-500 text-base font-medium gap-4 list-disc pl-6 tracking-wide">
            <li>
              Google Certified UX/UI Designer | Expert in
              Website|App|Software|Figma
            </li>
            <li>UX/UI Designer | Web & Mobile App Specialist</li>
            <li>UX/UI Designer, Mobile App Developer, Marketing Expert</li>
          </ul>

          <h2 className="text-xl xl:text-2xl text-heading font-bold leading-9">
            Overview
          </h2>

          <div className="flex flex-col gap-2">
          <input
            type="text"
            {...register("overview", {
              required: "Overview required",
              minLength: {
                value: 5,
                message: "Overview should be atleast 5 characters long",
              },
            })}
            className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#D0D5DD] focus:border-secondary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
            placeholder="Enter Your Overview"
          />

          {errors.overview && (
            <span className="text-sm text-red-500 font-medium">
              {errors.overview.message}
            </span>
          )}
        </div>

          <div className="flex justify-end mt-5">
            <Button
              type="button"
              onClick={handleNext}
              className="bg-secondary text-white border flex items-center gap-2 justify-center"
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
