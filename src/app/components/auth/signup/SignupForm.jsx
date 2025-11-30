"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import userApiStore from "@/app/store/userStore";
import toastStore from "@/app/store/toastStore";

import SignupModalWrapper from "./SignupModalWrapper";
import SignupHeader from "./SignupHeader";
import SignupFormFields from "./SignupFormFields";
import SignupActions from "./SignupActions";

export default function SignupForm({ setActiveModal, setUserEmail, setverifyCode }) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((v) => !v);

  const signup = userApiStore((s) => s.signup);
  const showToast = toastStore.getState().showToast;

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await signup(data);

      if (res.success) {
        showToast(res.message, "success");

        setUserEmail(data.email);
        setActiveModal("otp_verify");
        setverifyCode("signup-code");
      } else {
        showToast(res.message, "error");
      }
    } catch (error) {
      showToast(error.response?.data?.message || "Signup failed", "error");
    }
  };

  return (
    <SignupModalWrapper setActiveModal={setActiveModal}>
      <SignupHeader />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 p-4 md:p-6">
        <SignupFormFields
          register={register}
          errors={errors}
          isVisible={isVisible}
          toggleVisibility={toggleVisibility}
        />

        <SignupActions isSubmitting={isSubmitting} setActiveModal={setActiveModal} />
      </form>
    </SignupModalWrapper>
  );
}
