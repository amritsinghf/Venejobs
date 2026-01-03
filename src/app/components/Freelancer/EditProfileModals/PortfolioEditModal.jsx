import React, { useEffect } from "react";
import Button from "../../button/Button";
import SvgIcon from "../../Utility/SvgIcon";
import { useForm } from "react-hook-form";
import freelanceApiStore from "@/app/store/FreelancerStore";
import useToastStore from "@/app/store/toastStore";
import useEscapeKey from "@/hooks/useEscapeKey";

const PortfolioEditModal = ({
  showPortfolioModal,
  freelancerProfile,
  setShowPortfolioModal,
  portfolio,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: portfolio.id,
      title: portfolio.title,
      project_url: portfolio.project_url,
    },
  });

  useEscapeKey(showPortfolioModal, () => {
    setShowPortfolioModal(false);
  });

  const { showSuccess, showError } = useToastStore.getState();
  const { updatePortfolio, loading, error } = freelanceApiStore();

  useEffect(() => {
    reset({
      id: portfolio.id,
      title: portfolio.title,
      project_url: portfolio.project_url,
    });
  }, [portfolio, reset]);

  const handleSave = async (data) => {
    console.log(data);
    try {
      const res = await updatePortfolio(data);
      if (res.success) {
        showSuccess(res.message, "success");
        setShowPortfolioModal(false);
      }
      console.log(res);
    } catch (error) {
      showError(error.response.data.message, "error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 pt-2">
      <div className="relative bg-white w-full max-w-[1120px] rounded-xl shadow-sm h-[600px] flex flex-col">
        <div className="px-3 py-3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg lg:text-2xl font-extrabold leading-tight text-heading mb-3">
              Edit
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
                  <h3 className="font-bold text-base">Title</h3>
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
                    className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-base">Image URL</h3>
                  <input
                    type="text"
                    name="project_url"
                    {...register("project_url", {
                      required: {
                        value: true,
                        message: "Project url is required",
                      },
                    })}
                    placeholder="Explain yourself in brief"
                    className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                  />
                  {errors.project_url && (
                    <p className="text-red-500 text-sm">{errors.project_url}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <Button
                  type="button"
                  className="px-4 py-2 shadow text-paragraph font-semibold"
                  onClick={() => setShowPortfolioModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="px-4 py-2 bg-secondary text-white rounded"
                >
                  Edit
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
