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

export default function Loginform({ setActiveModal, setUserEmail }) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((v) => !v);

  const login = userApiStore((s) => s.login);
  const sendOtp = userApiStore((s) => s.resendOtp);
  const showSuccess = toastStore.getState().showSuccess;
  const showError = toastStore.getState().showError;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const res = await login(data);

      if (!res?.data?.success) {
        showError(res?.data?.message || "Login failed", "error");
        return;
      }

      const { token, user } = res.data;

      showSuccess(res.data.message, "success");

      await axios.post("/api/set-token", { token });
      localStorage.setItem("token", token);

      switch (user?.role_name) {
        case "freelancer":
          router.push("/freelancer");
          break;
        case "client":
          router.push("/client");
          break;
        case "admin":
          router.push("/admin");
          break;
        default:
          router.push("/");
      }
    } catch (error) {
      const message = error?.response?.data?.message;

      if (error?.response?.data?.code === "EMAIL_NOT_VERIFIED") {
        setUserEmail(data.email);
        setActiveModal("otp_verify");
        sendOtp({ email: data.email });
      }

      showError(message || "Login error", "error");
    }
  };

  return (
    <LoginModalWrapper setActiveModal={setActiveModal}>
      <LoginHeader setActiveModal={setActiveModal} />

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-4 py-10 px-2 md:px-4 md:py-15"
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
