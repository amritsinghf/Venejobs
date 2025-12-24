import React, { useEffect, useState } from "react";
import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";

const PortfolioModal = ({
  setshowForm,
  close,
  append,
  update,
  editIndex,
  fields,
}) => {
  const [portfolioTemp, setPortfolioTemp] = useState({
    title: "",
    image_url: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editIndex !== null) {
      setPortfolioTemp(fields[editIndex]);
    } else {
      setPortfolioTemp({
        title: "",
        image_url: "",
      });
    }
  }, [editIndex, fields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPortfolioTemp((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const newErrors = {};

    if (!portfolioTemp.title.trim()) {
      newErrors.title = "Project Title is required";
    }
    if (!portfolioTemp.image_url.trim()) {
      newErrors.image_url = "Project URL is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); 
    if (editIndex !== null) {
      update(editIndex, portfolioTemp); // Edit existing
    } else {
      append(portfolioTemp); // Add new
    }
    close();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 pt-2">
      <div className="relative bg-white w-full max-w-[1120px] rounded-xl shadow-sm h-[600px] flex flex-col">
        <div className="px-3 py-3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg lg:text-2xl font-extrabold leading-tight text-heading mb-3">
              {editIndex !== null ? "Edit Portfolio" : "Add Portfolio"}
            </h2>
            <button
              type="button"
              onClick={() => setshowForm(false)}
              className="absolute right-4 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>

          <div className="flex flex-col justify-between h-120">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-base">Project Title</h3>
                <input
                  type="text"
                  name="title"
                  value={portfolioTemp.title}
                  onChange={handleChange}
                  placeholder="E-commerce Website"
                  className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title}</p>
                )}
              </div>

              
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-base">Project URL</h3>
                <input
                  type="text"
                  name="image_url"
                  value={portfolioTemp.image_url}
                  onChange={handleChange}
                  placeholder="https://example.com/project.com"
                  className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                />
                {errors.image_url && (
                  <p className="text-red-500 text-sm">{errors.image_url}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button
                className="px-4 py-2 shadow text-paragraph font-semibold"
                onClick={() => setshowForm(false)}
              >
                Cancel
              </Button>
              <Button
                className="px-4 py-2 bg-secondary text-white rounded"
                onClick={handleSave}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
