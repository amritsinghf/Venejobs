"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";


import userApiStore from "@/app/store/userStore";
import toastStore from "@/app/store/toastStore";
import LoginModalWrapper from "../login/LoginModalWrapper";
import LoginHeader from "../login/LoginHeader";
import LoginFormFields from "../login/LoginFormFields";
import LoginActions from "../login/LoginActions";

export default function Loginform({ setActiveModal }) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((v) => !v);

  const login = userApiStore((s) => s.login);
  const showSuccess = toastStore.getState().showSuccess;
  const showError = toastStore.getState().showError;

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const handleLogin = async (data) => {
    try {
      const res = await login(data);
      const token = res.data.token;

      if (res.success) {
        showSuccess(res.message, "success");

        await axios.post("/api/set-token", { token });
        localStorage.setItem("token", token);

        if (res.data.user.role_id === 1) router.push("/freelancer");
        else if (res.data.user.role_id === 2) router.push("/client");
        else router.push("/admin");
      } else {
        showError(res.message, "error");
      }
    } catch (error) {
      showError(error?.response?.data?.message || "Login failed", "error");
    }
  };

  return (
    <LoginModalWrapper setActiveModal={setActiveModal}>
      <LoginHeader setActiveModal={setActiveModal} />

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-4 py-10 px-2 md:px-6 md:py-15"
      >
        <LoginFormFields
          register={register}
          errors={errors}
          isVisible={isVisible}
          toggleVisibility={toggleVisibility}
        />

        <LoginActions
          setActiveModal={setActiveModal}
          isSubmitting={isSubmitting}
        />
      </form>
    </LoginModalWrapper>

  );
}
