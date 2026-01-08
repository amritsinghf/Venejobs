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
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className=" bg-white
          w-full h-full
          rounded-none
          overflow-y-auto

          md:h-auto
          md:max-h-[90vh]
          md:max-w-[1000px]
          md:rounded-2xl relative">
        <div className="px-4 py-6 md:px-6 md:py-8 flex flex-col gap-6">
          <div>
            <h2 className="text-lg lg:text-2xl font-bold leading-snug text-heading">
              Edit
            </h2>

            <button
              type="button"
              onClick={() => setshowTitleModal(false)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              <SvgIcon name="CrossButton" size={18} />
            </button>
          </div>


          <div className="flex flex-col justify-between h-120">
            <form
              onSubmit={handleSubmit(handleSave)}
              className="flex flex-col h-full"
            >
              {/* FORM CONTENT (Scrollable) */}
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <InputField
                    label="Professional Title"
                    name="professional_title"
                    placeholder="Enter your title"
                    value={watch("professional_title") || ""}
                    error={errors.professional_title?.message}
                    onChange={(e) =>
                      reset({ ...watch(), professional_title: e.target.value })
                    }
                  />

                  <InputField
                    label="Update your hourly rate"
                    name="hourly_rate"
                    placeholder="$0.00"
                    value={watch("hourly_rate") || ""}
                    error={errors.hourly_rate?.message}
                    onChange={(e) =>
                      reset({ ...watch(), hourly_rate: e.target.value })
                    }
                  />

                  {/* Overview - Full Width */}
                  <div className="md:col-span-2">
                    <InputField
                      label="Overview"
                      name="overview"
                      as="textarea"
                      rows={5}
                      placeholder="Explain yourself in brief"
                      value={watch("overview") || ""}
                      error={errors.overview?.message}
                      onChange={(e) =>
                        reset({ ...watch(), overview: e.target.value })
                      }
                    />
                  </div>

                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4 mt-6 bg-white">
                <Button
                  type="button"
                  onClick={() => setshowTitleModal(false)}
                  style={{
                    boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-secondary text-white flex items-center justify-center gap-2 min-w-[120px]"
                >
                  {loading ? (
                    <>
                      <Loader size={18} border={3} color="white" />
                    </>
                  ) : (
                    "Update"
                  )}
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


const InputField = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  disabled = false,
  type = "text",
  as = "input",
  rows = 4,
}) => (
  <div className="flex flex-col gap-2">
    <label className="font-medium lg:text-base tracking-wide">
      {label}
    </label>

    {as === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
        placeholder={placeholder}
        className={`
          w-full py-3.5 px-3 text-sm lg:text-base rounded-md
          tracking-wide placeholder:text-sm resize-none
          border transition-all duration-200 focus:outline-none
          ${disabled
            ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
            : "bg-white text-black border-[#D0D5DD] focus:border-secondary"
          }
        `}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        inputMode={type === "number" ? "numeric" : undefined}
        pattern={type === "number" ? "[0-9]*" : undefined}
        className={`
          w-full py-3.5 px-3 text-sm lg:text-base rounded-md
          tracking-wide placeholder:text-sm
          border transition-all duration-200 focus:outline-none
          ${disabled
            ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
            : "bg-white text-black border-[#D0D5DD] focus:border-secondary"
          }
        `}
      />
    )}

    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);
