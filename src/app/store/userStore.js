import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  forget_password,
  get_client_profile,
  login,
  resend_verification_code,
  reset_password,
  signupapi,
  verify_account,
  verify_reset_code,
} from "../lib/auth/auth.api";

const userApiStore = create(
  persist(
    (set, get) => ({
      user: null,
      loading: false,
      error: null,
      fetched: false,
      login: async (credentials) => {
        set({ loading: true, error: null });

        try {
          const res = await login(credentials);

          const { user, token } = res.data;

          set({
            user,
            token,
            loading: false,
          });

          return res;
        } catch (err) {
          set({
            error:
              err?.response?.data?.message || err.message || "Login failed",
            loading: false,
          });
          throw err; // allow component to handle errors too
        }
      },
      signup: async (formData) => {
        set({ loading: true, error: null });
        try {
          const res = await signupapi(formData);
          const { user, token } = res.data;

          set({ user, loading: false, fetched: true });
          if (typeof window !== "undefined")
            localStorage.setItem("token", token);

          return res;
        } catch (err) {
          set({
            error:
              err?.response?.data?.message || err.message || "Signup failed",
            loading: false,
          });
          throw err;
        }
      },
      logout: () => {
        set({
          user: { id: null, name: "", email: "" },
          token: null,
          loading: false,
          error: null,
        });
        if (typeof window !== "undefined") localStorage.removeItem("token");
      },
      fetchProfile: async () => {
        set({ loading: true });

        try {
          const res = await get_client_profile();
          set({
            user: res.data.user,
            loading: false,
            fetched: true,
          });
          return res;
        } catch (err) {
          
          set({
            user: null,
            token: null,
            loading: false,
            fetched: true,
          });
        }
      },
      verifyOtpAndSetToken: async (otpData) => {
        set({ loading: true, error: null });
        try {
          const res = await verify_account(otpData);
          const { token } = res.data;

          set({ token, loading: false, fetched: true });
          if (typeof window !== "undefined")
            localStorage.setItem("token", token);

          return res;
        } catch (err) {
          set({
            error:
              err?.response?.data?.message ||
              err.message ||
              "OTP verification failed",
            loading: false,
          });
          throw err;
        }
      },
      resendOtp: async (otpData) => {
        set({ loading: true, error: null });
        try {
          const res = await resend_verification_code(otpData);
          
          set({  loading: false, fetched: true });

          return res;
        } catch (err) {
          set({
            error:
              err?.response?.data?.message ||
              err.message ||
              "Resned OTP failed",
            loading: false,
          });
          throw err;
        }
      },
      forgetPassword: async (data) => {
        set({ loading: true, error: null });
        try {
          const res = await forget_password(data);
          
          set({  loading: false, fetched: true });

          return res;
        } catch (err) {
          set({
            error:
              err?.response?.data?.message ||
              err.message ||
              "Forget password failed",
            loading: false,
          });
          throw err;
        }
      },
      resetPassword: async (data) => {
        set({ loading: true, error: null });
        try {
          const res = await reset_password(data);
          
          set({  loading: false, fetched: true });

          return res;
        } catch (err) {
          set({
            error:
              err?.response?.data?.message ||
              err.message ||
              "Reset password failed",
            loading: false,
          });
          throw err;
        }
      },
      verify_resetCode: async (data) => {
        set({ loading: true, error: null });
        try {
          const res = await verify_reset_code(data);
          
          set({  loading: false, fetched: true });

          return res;
        } catch (err) {
          set({
            error:
              err?.response?.data?.message ||
              err.message ||
              "Verification of reset code failed",
            loading: false,
          });
          throw err;
        }
      },
    }),
    {
      name: "user-store",
    }
  )
);

export default userApiStore;
