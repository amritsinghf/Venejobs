"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Project_Options from "./Project_Options";
import Budget_Options from "./Budget_Options";
import DescriptionPage from "./DescriptionPage";
import ReviewJob from "./ReviewJob";
import SuccessJobCreate from "./SuccessJobCreate";
import toastStore from "@/app/store/toastStore";
import jobApiStore from "@/app/store/jobStore";
import TitlePage from "./TitlePage/TitlePage";
import Category_Skills_Page from "./CategorySkillsPage/Category_Skills_Page";

const MultiStepForm = () => {
  const [showConfirmMessage, setshowConfirmMessage] = useState(false);
  const showError = toastStore.getState().showError;

  const methods = useForm({
    mode: "onSubmit",
    shouldUnregister: false,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const { create_job, loading } = jobApiStore();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      data.skills.forEach((skill) => {
        formData.append("skills[]", skill);
      });
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("project_size", data.project_size);
      formData.append("duration", data.duration);
      formData.append("experience_level", data.experience_level);
      formData.append("budget_type", data.budget_type);
      formData.append("budget_amount", data.budget_amount);
      formData.append("attachment", data.attachment[0]);

      const res = await create_job(formData);
      if (res.success) {
        setshowConfirmMessage(true);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        // showError(error.response.data.message);
      } else {
        // showError(error);
      }
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <TitlePage nextStep={nextStep} currstep={step} />;
      case 2:
        return (
          <Category_Skills_Page
            nextStep={nextStep}
            prevStep={prevStep}
            currstep={step}
          />
        );
      case 3:
        return (
          <Project_Options
            nextStep={nextStep}
            prevStep={prevStep}
            currstep={step}
          />
        );
      case 4:
        return (
          <Budget_Options
            nextStep={nextStep}
            prevStep={prevStep}
            currstep={step}
          />
        );
      case 5:
        return (
          <DescriptionPage
            nextStep={nextStep}
            prevStep={prevStep}
            currstep={step}
          />
        );
      case 6:
        return <ReviewJob prevStep={prevStep} setStep={setStep} />;
      default:
        return <TitlePage nextStep={nextStep} prevStep={prevStep} />;
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1240px] 2xl:max-w-[1400px] mx-auto my-10 lg:my-20">
            {renderStep()}
          </div>
        </form>
      </FormProvider>

      {showConfirmMessage && <SuccessJobCreate />}
    </>
  );
};

export default MultiStepForm;
