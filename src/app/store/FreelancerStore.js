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
    set({ loadingData: true, error: null });
    try {
      const res = await addFreelanceSkills(data);
      await getFreelancerSkills().then((r) => set({ freelanceSkills: r.data }));
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
  updateSkills: async (id, data) => {
    set({ loadingData: true, error: null });
    try {
      const res = await updateFreelanceSkills(id, data);
      await getFreelancerSkills().then((r) => set({ freelanceSkills: r.data }));
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
  deleteSkill: async (id) => {
    set({ loadingData: true, error: null });
    try {
      const res = await deleteFreelanceSkill(id);
      await getFreelancerSkills().then((r) => set({ freelanceSkills: r.data }));
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
      await getFreelancerExperience().then((r) =>
        set({ freelanceExperience: r.data })
      );
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
      await getFreelancerExperience().then((r) =>
        set({ freelanceExperience: r.data })
      );
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
      await getFreelancerExperience().then((r) =>
        set({ freelanceExperience: r.data })
      );
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
      await getFreelancerPortfolio().then((r) =>
        set({ freelancePortfolio: r.data })
      );
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
      await getFreelancerPortfolio().then((r) =>
        set({ freelancePortfolio: r.data })
      );
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
      await getFreelancerPortfolio().then((r) =>
        set({ freelancePortfolio: r.data })
      );
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
      // console.log("res language", res);
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
      await getFreelancerLanguage().then((r) =>
        set({ freelanceLanguage: r.data })
      );
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
      await getFreelancerLanguage().then((r) =>
        set({ freelanceLanguage: r.data })
      );
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
      await getFreelancerLanguage().then((r) =>
        set({ freelanceLanguage: r.data })
      );
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
      await getFreelancerEducation().then((r) =>
        set({ freelanceEducation: r.data })
      );
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
      await getFreelancerEducation().then((r) =>
        set({ freelanceEducation: r.data })
      );
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
      await getFreelancerEducation().then((r) =>
        set({ freelanceEducation: r.data })
      );
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
}));

export default freelanceApiStore;
