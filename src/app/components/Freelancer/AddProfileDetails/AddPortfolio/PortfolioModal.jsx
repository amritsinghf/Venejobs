import React, { useEffect, useState } from "react";
import Button from "@/app/components/button/Button";
import SvgIcon from "@/app/components/Utility/SvgIcon";

const INITIAL_PORTFOLIO = {
  title: "",
  image_url: "",
};

const validatePortfolio = (data) => {
  const errors = {};
  if (!data.title.trim()) errors.title = "Project title is required";
  if (!data.image_url.trim()) errors.image_url = "Project URL is required";
  return errors;
};

const InputField = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
}) => (
  <div className="flex flex-col gap-2">
    <label className="font-bold text-base">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full py-3.5 px-3 text-sm lg:text-base border border-[#D0D5DD] focus:border-secondary rounded-md focus:outline-none text-heading tracking-wide placeholder:text-sm"
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const PortfolioModal = ({
  setshowForm,
  append,
  update,
  editIndex,
  fields,
}) => {
  const [portfolio, setPortfolio] = useState(INITIAL_PORTFOLIO);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setPortfolio(editIndex !== null ? fields[editIndex] : INITIAL_PORTFOLIO);
  }, [editIndex, fields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPortfolio((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSave = () => {
    const validationErrors = validatePortfolio(portfolio);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    editIndex !== null
      ? update(editIndex, portfolio)
      : append(portfolio);

    setshowForm(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-full max-w-[1000px] rounded-2xl max-h-screen overflow-y-auto">
        <div className="px-6 py-8 flex flex-col gap-6">

          <div className="flex justify-between items-center">
            <h2 className="text-lg lg:text-2xl font-extrabold text-heading">
              {editIndex !== null ? "Edit Portfolio" : "Add Portfolio"}
            </h2>
            <button
              onClick={() => setshowForm(false)}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Project Title"
              name="title"
              value={portfolio.title}
              onChange={handleChange}
              error={errors.title}
              placeholder="E-commerce Website"
            />

            <InputField
              label="Project URL"
              name="image_url"
              value={portfolio.image_url}
              onChange={handleChange}
              error={errors.image_url}
              placeholder="https://example.com"
            />
          </div>

          <div className="flex justify-end gap-6 mt-10">
            <Button onClick={() => setshowForm(false)}
              className="bg-white text-gray-800 flex items-center gap-2 transition-all duration-300"
              style={{
                boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >Cancel</Button>
            <Button className="bg-secondary text-white" onClick={handleSave}>
              Save
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
