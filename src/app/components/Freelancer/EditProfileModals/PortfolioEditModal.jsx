import React, { useEffect } from "react";
import Button from "../../button/Button";
import SvgIcon from "../../Utility/SvgIcon";
import { useForm } from "react-hook-form";
import freelanceApiStore from "@/app/store/FreelancerStore";
import useToastStore from "@/app/store/toastStore";
import useEscapeKey from "@/hooks/useEscapeKey";

const PortfolioEditModal = ({
  showPortfolioModal,
  setShowPortfolioModal,
  portfolio,
}) => {
  const isEdit = Boolean(portfolio);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      project_url: "",
    },
  });

  useEscapeKey(showPortfolioModal, () => {
    setShowPortfolioModal(false);
  });

  const { showSuccess, showError } = useToastStore.getState();
  const { updatePortfolio, addPortfolio, loading, error } = freelanceApiStore();

  useEffect(() => {
    if (isEdit) {
      reset({
        id: portfolio.id,
        title: portfolio.title,
        project_url: portfolio.project_url,
      });
    } else {
      reset({
        title: "",
        project_url: "",
      });
    }
  }, [portfolio, isEdit, reset]);

  const handleSave = async (data) => {
    try {
      const res = isEdit
        ? await updatePortfolio(data.id, data)
        : await addPortfolio(data);

      if (res.success) {
        showSuccess(
          isEdit
            ? "Portfolio updated successfully"
            : "Portfolio added successfully",
          "success"
        );
        setShowPortfolioModal(false);
      }
    } catch (error) {
      showError(
        error?.response?.data?.message || "Something went wrong",
        "error"
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 pt-2">
      <div className="relative bg-white w-full max-w-[1120px] rounded-xl shadow-sm h-[600px] flex flex-col">
        <div className="px-4 py-6 md:px-6 md:py-8 flex flex-col gap-6">
          <div className="relative flex justify-between items-center top-0 bg-white z-10 pb-2">
            <h2 className="text-lg lg:text-2xl font-bold leading-snug text-heading">
              {isEdit ? "Edit Portfolio" : "Add Portfolio"}
            </h2>
            <button
              type="button"
              onClick={() => setShowPortfolioModal(false)}
              className="absolute right-4 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>

          <div className="flex flex-col justify-between h-120">
            <form onSubmit={handleSubmit(handleSave)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium lg:text-base tracking-wide">Title</h3>
                  <input
                    type="text"
                    name="title"
                    {...register("title", {
                      required: {
                        value: true,
                        message: "Title is required",
                      },
                    })}
                    placeholder="Enter your title"
                    className=" w-full py-3.5 px-3 text-sm lg:text-base rounded-md tracking-wide placeholder:text-sm border transition-all duration-200 focus:outline-none bg-white text-heading border-[#D0D5DD] focus:border-secondary  "
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-medium lg:text-base tracking-wide">Image URL</h3>
                  <input
                    type="text"
                    name="project_url"
                    {...register("project_url", {
                      required: {
                        value: true,
                        message: "Project URL is required",
                      },
                      validate: (value) => {
                        try {
                          new URL(value);
                          return true;
                        } catch {
                          return "Please enter a valid URL";
                        }
                      },
                    })}
                    placeholder="Enter image URL"
                    className=" w-full py-3.5 px-3 text-sm lg:text-base rounded-md tracking-wide placeholder:text-sm border transition-all duration-200 focus:outline-none bg-white text-heading border-[#D0D5DD] focus:border-secondary  "
                  />

                  {errors.project_url && (
                    <p className="text-red-500 text-sm">
                      {errors.project_url.message}
                    </p>
                  )}

                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <Button
                  type="button"
                  style={{
                    boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                  onClick={() => setShowPortfolioModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="px-4 py-2 bg-secondary text-white rounded"
                >
                  {isEdit ? "Upadate" : "Add"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioEditModal;
