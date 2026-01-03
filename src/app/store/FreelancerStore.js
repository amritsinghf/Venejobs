import { create } from "zustand";
import {
  SaveFreelanceDetails,
  getFreelanceDetails,
  updateFreelanceBasicprofile,
  updateFreelanceSkills,
  updateFreelanceExperience,
  updateFreelancePortfolio
} from "../lib/freelancer";

const freelanceApiStore = create((set) => ({
  FreelanceDetails: null,
  loading: false,
  error: null,
  fetched: false,
  SavePersonalDetails: async (data) => {
    set({ loading: true, error: null });

    try {
      const res = await SaveFreelanceDetails(data);

      set({
        FreelanceDetails: res.data,
        loading: false,
      });

      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message ||
          err.message ||
          "Save personal data failed",
        loading: false,
      });
      throw err;
    }
  },
  getPersonalDetails: async () => {
    set({ loadingData: true, error: null });
    try {
      const res = await getFreelanceDetails();
      set({
        FreelanceDetails: res.data,
        loadingData: false,
        fetched: true,
      });
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message ||
          err.message ||
          "Fetch personal data failed",
        loading: false,
      });
      throw err;
    }
  },
  updatePersonalDetails: async (data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await updateFreelanceBasicprofile(data);
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message ||
          err.message ||
          "Update personal data failed",
        loading: false,
      });
      throw err;
    }
  },
  updateSkills: async (data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await updateFreelanceSkills(data);
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message || err.message || "Update skills failed",
        loading: false,
      });
      throw err;
    }
  },
  updateExperience: async (data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await updateFreelanceExperience(data);
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message ||
          err.message ||
          "Update experiences failed",
        loading: false,
      });
      throw err;
    }
  },
  updatePortfolio: async (data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await updateFreelancePortfolio(data);
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message ||
          err.message ||
          "Update portfolio failed",
        loading: false,
      });
      throw err;
    }
  },
}));

export default freelanceApiStore;
