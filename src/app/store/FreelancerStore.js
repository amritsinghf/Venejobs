import { create } from "zustand";
import {
  SaveFreelanceDetails,
  getFreelanceDetails,
  updateFreelanceBasicprofile,
  updateFreelanceSkills,
  updateFreelanceExperience,
  updateFreelancePortfolio,
  updateFreelanceLanguage,
  updateFreelanceEducation,
  deleteFreelanceLanguage,
  deleteFreelanceEducation,
  deleteFreelanceExperience,
  deleteFreelancePortfolio,
  addFreelanceLanguage,
  addFreelanceEducation,
  addFreelanceExperience,
  addFreelancePortfolio,
  getAllSkills,
  addFreelanceSkills,
  deleteFreelanceSkill,
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
  addSkill: async (data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await addFreelanceSkills(data);
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message || err.message || "Add skill failed",
        loadingData: false,
      });
      throw err;
    }
  },
  deleteSkill: async (id) => {
    set({ loadingData: true, error: null });
    try {
      const res = await deleteFreelanceSkill(id);
      console.log(res);
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message || err.message || "Delete Skill failed",
        loadingData: false,
      });
      throw err;
    }
  },
  addExperience: async (data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await addFreelanceExperience(data);
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message ||
          err.message ||
          "Add experience failed",
        loadingData: false,
      });
      throw err;
    }
  },
  updateExperience: async (id, data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await updateFreelanceExperience(id, data);
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
  deleteExperience: async (id) => {
    set({ loadingData: true, error: null });
    try {
      const res = await deleteFreelanceExperience(id);
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message ||
          err.message ||
          "Delete Experience failed",
        loadingData: false,
      });
      throw err;
    }
  },
  addPortfolio: async (data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await addFreelancePortfolio(data);
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message || err.message || "Add portfolio failed",
        loadingData: false,
      });
      throw err;
    }
  },
  updatePortfolio: async (id, data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await updateFreelancePortfolio(id, data);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      set({
        error:
          err?.response?.id?.message ||
          err.message ||
          "Update portfolio failed",
        loading: false,
      });
      throw err;
    }
  },
  deletePortfolio: async (id) => {
    set({ loadingData: true, error: null });
    try {
      const res = await deleteFreelancePortfolio(id);
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message ||
          err.message ||
          "Delete portfolio failed",
        loadingData: false,
      });
      throw err;
    }
  },
  addLanguage: async (data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await addFreelanceLanguage(data);
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message || err.message || "Add language failed",
        loadingData: false,
      });
      throw err;
    }
  },
  updateLanguage: async (id, data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await updateFreelanceLanguage(id, data);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      set({
        error:
          err?.response?.id?.message || err.message || "Update language failed",
        loading: false,
      });
      throw err;
    }
  },
  deleteLanguage: async (id) => {
    set({ loadingData: true, error: null });
    try {
      const res = await deleteFreelanceLanguage(id);
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message ||
          err.message ||
          "Delete language failed",
        loadingData: false,
      });
      throw err;
    }
  },
  addEducation: async (data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await addFreelanceEducation(data);
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message || err.message || "Add education failed",
        loadingData: false,
      });
      throw err;
    }
  },
  updateEducation: async (id, data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await updateFreelanceEducation(id, data);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      set({
        error:
          err?.response?.id?.message ||
          err.message ||
          "Update education failed",
        loading: false,
      });
      throw err;
    }
  },
  deleteEducation: async (id) => {
    set({ loadingData: true, error: null });
    try {
      const res = await deleteFreelanceEducation(id);
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message ||
          err.message ||
          "Delete education failed",
        loadingData: false,
      });
      throw err;
    }
  },
  getSkills: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getAllSkills();
      set({
        skills: res.data,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default freelanceApiStore;
