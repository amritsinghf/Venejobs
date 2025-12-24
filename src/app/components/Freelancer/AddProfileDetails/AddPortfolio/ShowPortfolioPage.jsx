import SvgIcon from "@/app/components/Utility/SvgIcon";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const ShowPorfolioPage = ({ fields, onEdit, onDelete, onAddMore }) => {
  if (!fields || fields.length === 0) {
    return <p className="text-gray-500">No education added yet.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg lg:text-[32px]">
          Portfolio History
        </h2>
        <button
          type="button"
          className="mt-4 px-2 py-2 bg-secondary text-white w-fit rounded-full"
          onClick={onAddMore}
        >
          <AddIcon />
        </button>
      </div>
      {fields.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 p-4 rounded-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div>
            <h2 className="font-bold text-lg">{item.title}</h2>
            <p className="text-gray-600">{item.image_url}</p>
          </div>

          <div className="flex gap-2 mt-2 md:mt-0">
            <button
              type="button"
              className="w-10 h-10 md:w-[50px] md:h-[50px] flex items-center justify-center bg-secondary text-white rounded-full"
              onClick={() => onEdit(index)}
            >
              <SvgIcon name="Editing" size={20} />
            </button>

            <button
              type="button"
              className="w-10 h-10 md:w-[50px] md:h-[50px] flex items-center justify-center bg-secondary text-white rounded-full"
              onClick={() => onDelete(index)}
            >
              <SvgIcon name="Delete1" size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPorfolioPage;
