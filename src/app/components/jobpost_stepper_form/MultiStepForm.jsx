"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import TitlePage from "./TitlePage";
import Category_Skills_Page from "./Category_Skills_Page";
import Project_Options from "./Project_Options";
import Budget_Options from "./Budget_Options";
import DescriptionPage from "./DescriptionPage";
import ReviewJob from "./ReviewJob";
import SuccessJobCreate from "./SuccessJobCreate";
import toastStore from "@/app/store/toastStore";
import jobApiStore from "@/app/store/jobStore";

const MultiStepForm = () => {
  const [showConfirmMessage, setshowConfirmMessage] = useState(false);
  const showToast = toastStore.getState().showToast;

  const methods = useForm({ mode: "onBlur" });
  const { handleSubmit } = methods;

  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const {create_job,loading} = jobApiStore();

  const onSubmit = async (data) => {
    try {
      const skillsArray = data.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const formData = new FormData();
      skillsArray.forEach((skill) => {
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
      if (error.response) {
        showToast(error.response.data.message, "error");
        
      } else {
        
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
        <form onSubmit={handleSubmit(onSubmit)}>{renderStep()}</form>
      </FormProvider>

      {showConfirmMessage && <SuccessJobCreate />}
    </>
  );
};

export default MultiStepForm;
