"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import toastStore from "@/app/store/toastStore";
import TitlePage from "./TitlePage/TitlePage";
import ExperiencePage from "./AddExperience/ExperiencePage";
import EducationPage from "./AddEducation/EducationPage";
import LanguagePage from "./AddLanguage/LanguagePage";
import HourlyRatePage from "./AddHourlyRate/HourlyRatePage";
import PersonalDetailsPage from "./AddPersonalDetails/PersonalDetailsPage";
import PortfolioPage from "./AddPortfolio/PortfolioPage";
import SuccessProfileCreate from "./SuccessProfileCreate";
import freelanceApiStore from "@/app/store/FreelancerStore";
import CategorySkillsPage from "./CategorySkillsPage/CategorySkillsPage";

const MultiStepForm = () => {
  const [showConfirmMessage, setshowConfirmMessage] = useState(false);
  const showError = toastStore.getState().showError;

  const methods = useForm({ mode: "onBlur" });
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
  const { SavePersonalDetails } = freelanceApiStore();

  const onSubmit = async (data) => {
    try {
      const res = await SavePersonalDetails(data);
      if (res.success) {
        setshowConfirmMessage(true);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
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
          <CategorySkillsPage
            nextStep={nextStep}
            prevStep={prevStep}
            currstep={step}
          />
        );
      case 3:
        return (
          <ExperiencePage
            nextStep={nextStep}
            prevStep={prevStep}
            currstep={step}
          />
        );

      case 4:
        return (
          <EducationPage
            nextStep={nextStep}
            prevStep={prevStep}
            currstep={step}
          />
        );

      case 5:
        return (
          <PortfolioPage
            nextStep={nextStep}
            prevStep={prevStep}
            currstep={step}
          />
        );
      case 6:
        return (
          <LanguagePage
            nextStep={nextStep}
            prevStep={prevStep}
            currstep={step}
          />
        );
      case 7:
        return (
          <HourlyRatePage
            nextStep={nextStep}
            prevStep={prevStep}
            currstep={step}
          />
        );
      case 8:
        return (
          <PersonalDetailsPage
            nextStep={nextStep}
            prevStep={prevStep}
            currstep={step}
          />
        );
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

      {showConfirmMessage && <SuccessProfileCreate />}
    </>
  );
};

export default MultiStepForm;
