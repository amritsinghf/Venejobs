import React, { useEffect } from "react";
import Button from "../../button/Button";
import SvgIcon from "../../Utility/SvgIcon";
import { useForm } from "react-hook-form";
import freelanceApiStore from "@/app/store/FreelancerStore";
import useToastStore from "@/app/store/toastStore";
import useEscapeKey from "@/hooks/useEscapeKey";

const TitleEditModal = ({
  setshowTitleModal,
  freelancerProfile,
  showTitleModal,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEscapeKey(showTitleModal, () => {
    setshowTitleModal(false);
  });

  const { updatePersonalDetails, loading, error } = freelanceApiStore();
  const { showSuccess, showError } = useToastStore.getState();

  useEffect(() => {
      if (freelancerProfile) {
        reset({
          professional_title: freelancerProfile.professional_title,
          overview: freelancerProfile.overview,
          hourly_rate: freelancerProfile.hourly_rate,
        });
      }
    }, [freelancerProfile, reset]);

  const handleSave = async (data) => {
    try {
      const res = await updatePersonalDetails(data);
      if (res.success) {
        showSuccess(res.message, "success");
        setshowTitleModal(false);
      }
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
              onClick={() => setshowTitleModal(false)}
              className="absolute right-4 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>

          <div className="flex flex-col justify-between h-120">
            <form onSubmit={handleSubmit(handleSave)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-base">Professional Title</h3>
                  <input
                    type="text"
                    name="professional_title"
                    {...register("professional_title", {
                      required: {
                        value: true,
                        message: "Title is required",
                      },
                    })}
                    placeholder="Enter your title"
                    className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                  />
                  {errors.professional_title && (
                    <p className="text-red-500 text-sm">
                      {errors.professional_title}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-base">Overview</h3>
                  <input
                    type="text"
                    name="overview"
                    {...register("overview", {
                      required: {
                        value: true,
                        message: "Overview is required",
                      },
                    })}
                    placeholder="Explain yourself in brief"
                    className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                  />
                  {errors.overview && (
                    <p className="text-red-500 text-sm">{errors.overview}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-base">
                    Update your hourly rate
                  </h3>
                  <input
                    type="text"
                    name="hourly_rate"
                    {...register("hourly_rate", {
                      required: {
                        value: true,
                        message: "Hourly Rate is required",
                      },
                    })}
                    placeholder="$0.00"
                    className="w-full py-3 px-3 text-sm lg:text-base border border-lightborder focus:border-primary rounded-md focus:outline-none"
                  />
                  {errors.hourly_rate && (
                    <p className="text-red-500 text-sm">{errors.hourly_rate}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <Button
                  type="button"
                  className="px-4 py-2 shadow text-paragraph font-semibold"
                  onClick={() => setshowTitleModal(false)}
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

export default TitleEditModal;
