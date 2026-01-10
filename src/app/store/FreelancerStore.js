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
  addFreelancerEducation,
  addFreelanceExperience,
  addFreelancePortfolio,
  getAllSkills,
  addFreelanceSkills,
  deleteFreelanceSkill,
  getFreelancerSkills,
  getFreelancerPortfolio,
  getFreelancerLanguage,
  getFreelancerExperience,
  getFreelancerEducation,
  getFreelanceBasicprofile,
} from "../lib/freelancer";

const freelanceApiStore = create((set) => ({
  FreelanceDetails: null,
  freelanceSkills: [],
  freelanceExperience: [],
  freelanceBasicprofile: {},
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
  getBasicprofile: async () => {
    set({ loadingData: true, error: null });
    try {
      const res = await getFreelanceBasicprofile();
      set({
        freelanceBasicprofile: res.data,
        loadingData: false,
        fetched: true,
      });
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message ||
          err.message ||
          "Fetch Freelance Basic profile failed",
        loading: false,
      });
      throw err;
    }
  },
  updatePersonalDetails: async (data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await updateFreelanceBasicprofile(data);
      set({
        freelanceBasicprofile: res.data,
        loadingData: false,
      });
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

  getSkills: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getFreelancerSkills();
      set({
        freelanceSkills: res.data,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  addSkill: async (data) => {
    set({ loading: true, error: null });
    try {
      const res = await addFreelanceSkills(data);
      set((state) => ({
        freelanceSkills: [...state.freelanceSkills, res.data],
        loading: false,
      }));
      return res;
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  updateSkills: async (id, data) => {
    set({ loadingData: true, error: null });

    try {
      const res = await updateFreelanceSkills(id, data);
      const updatedSkill = res.data;
      set((state) => ({
        freelanceSkills: state.freelanceSkills.map((skill) =>
          skill.id === id ? updatedSkill : skill
        ),
        loadingData: false,
      }));
      return res;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message || err.message || "Update skills failed",
        loadingData: false,
      });
      throw err;
    }
  },
  deleteSkill: async (id) => {
    set({ loadingData: true, error: null });

    try {
      const res = await deleteFreelanceSkill(id);
      set((state) => ({
        freelanceSkills: state.freelanceSkills.filter(
          (skill) => skill.id !== id
        ),
        loadingData: false,
      }));
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
  allSkills: async () => {
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
  getExperience: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getFreelancerExperience();
      set({
        freelanceExperience: res.data,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  addExperience: async (data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await addFreelanceExperience(data);
      set((state) => ({
        freelanceExperience: [...state.freelanceExperience, res.data],
        loading: false,
      }));
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
      const updatedExperience = res.data;
      set((state) => ({
        freelanceExperience: state.freelanceExperience.map((experience) =>
          experience.id === id ? updatedExperience : experience
        ),
        loadingData: false,
      }));
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
      set((state) => ({
        freelanceExperience: state.freelanceExperience.filter(
          (experience) => experience.id !== id
        ),
        loadingData: false,
      }));
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

  getPortfolio: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getFreelancerPortfolio();
      set({
        freelancePortfolio: res.data,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  addPortfolio: async (data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await addFreelancePortfolio(data);
      set((state) => ({
        freelancePortfolio: [...state.freelancePortfolio, res.data],
        loading: false,
      }));
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
      const updatedPortfolio = res.data;
      set((state) => ({
        freelancePortfolio: state.freelancePortfolio.map((portfolio) =>
          portfolio.id === id ? updatedPortfolio : portfolio
        ),
        loadingData: false,
      }));
      return res;
    } catch (err) {
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
      set((state) => ({
        freelancePortfolio: state.freelancePortfolio.filter(
          (portfolio) => portfolio.id !== id
        ),
        loadingData: false,
      }));
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

  getLanguage: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getFreelancerLanguage();
      set({
        freelanceLanguage: res.data,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  addLanguage: async (data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await addFreelanceLanguage(data);
      set((state) => ({
        freelanceLanguage: [...state.freelanceLanguage, res.data],
        loading: false,
      }));
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
      const updatedLanguage = res.data;
      set((state) => ({
        freelanceLanguage: state.freelanceLanguage.map((language) =>
          language.id === id ? updatedLanguage : language
        ),
        loadingData: false,
      }));
      return res;
    } catch (err) {
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
      set((state) => ({
        freelanceLanguage: state.freelanceLanguage.filter(
          (language) => language.id !== id
        ),
        loadingData: false,
      }));
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

  getEducation: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getFreelancerEducation();
      set({
        freelanceEducation: res.data,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  addEducation: async (data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await addFreelancerEducation(data);
      set((state) => ({
        freelanceEducation: [...state.freelanceEducation, res.data],
        loading: false,
      }));
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
      const updatedEducation = res.data;
      set((state) => ({
        freelanceEducation: state.freelanceEducation.map((education) =>
          education.id === id ? updatedEducation : education
        ),
        loadingData: false,
      }));
      return res;
    } catch (err) {
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
      set((state) => ({
        freelanceEducation: state.freelanceEducation.filter(
          (education) => education.id !== id
        ),
        loadingData: false,
      }));
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
}));

export default freelanceApiStore;
