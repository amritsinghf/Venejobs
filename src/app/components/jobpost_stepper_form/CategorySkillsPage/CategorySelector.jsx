import React from "react";
import { useFormContext } from "react-hook-form";
import ComputerIcon from "@mui/icons-material/Computer";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CampaignIcon from "@mui/icons-material/Campaign";
import SettingsIcon from "@mui/icons-material/Settings";
import EditNoteIcon from "@mui/icons-material/EditNote";

const categoryIcons = {
    it_programming: <ComputerIcon fontSize="small" />,
    design_multimedia: <DesignServicesIcon fontSize="small" />,
    marketing: <CampaignIcon fontSize="small" />,
    admin_support: <SettingsIcon fontSize="small" />,
    writing_translation: <EditNoteIcon fontSize="small" />,
};

const CategorySelector = ({ category_data, errors, getskillsbycategory }) => {
    const { register } = useFormContext();

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-xl lg:text-2xl text-heading font-bold">
                Select the Category
            </h2>

            <ul className="flex items-center flex-wrap gap-3 lg:gap-5 w-full">
                {category_data?.map((item) => (
                    <li key={item.code} className="text-center">
                        <input
                            type="radio"
                            id={item.code}
                            className="sr-only peer"
                            value={item.name}
                            {...register("category", {
                                validate: (value) =>
                                    value?.length > 0 || "Select at least one Category",
                            })}
                            onChange={() => getskillsbycategory(item.code, item.name)}
                        />

                        <label
                            htmlFor={item.code} className="flex flex-col py-3.5 px-4 items-center justify-center w-full rounded-lg cursor-pointer border border-[#D0D5DD] transition-all peer-checked:bg-primary peer-checked:**:text-white"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-paragraph text-sm lg:text-base">
                                    {item.name}
                                </span>
                                <div>{categoryIcons[item.code]}</div>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>

            {errors.category && (
                <span className="text-sm text-red-500 font-medium">
                    {errors.category.message}
                </span>
            )}
        </div>
    );
};

export default CategorySelector;
