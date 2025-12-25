import { create } from "zustand";
import {
  createJobPost,
  getAllJobs,
  getBudgetData,
  getCategories,
  getJobByClient,
  getProjectDuration,
  getProjectExperienceLevel,
  getProjectSize,
  getSkillsByCategory,
  getJobById,
} from "../lib/jobs";

const jobApiStore = create((set) => ({
  jobs: [],
  job: [],
  budget_data: [],
  category_data: [],
  skills_data: [],
  projectSizes: [],
  projectDuration: [],
  experienceLevels: [],
  pagenum: 0,
  totalpagenum: 1,
  loading: false,
  error: null,
  create_job: async (formdata) => {
    set({ loading: true, error: null });
    try {
      const res = await createJobPost(formdata);
      return res;
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  fetchJobsByUser: async (page, limit) => {
    set({ loading: true, error: null });
    try {
      const res = await getJobByClient(page, limit);
      set({
        jobs: res.jobs,
        pagenum: res.page + 1,
        totalpagenum: res.totalPages,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  fetchAllJob: async (page, limit) => {
    set({ loading: true, error: null });
    try {
      const res = await getAllJobs(page, limit);
      set({
        jobs: res.jobs,
        pagenum: res.page + 1,
        totalpagenum: res.totalPages,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  getBudgetData: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getBudgetData();
      set({
        budget_data: res.budgetTypes,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  getCategories: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getCategories();
      set({
        category_data: res.data,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  getSkillsByCategory: async (selectedCategory) => {
    set({ loading: true, error: null });
    try {
      const res = await getSkillsByCategory(selectedCategory);

      set({
        skills_data: res.data,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  getProjectSize: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getProjectSize();
      set({
        projectSizes: res.projectSizes,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  getProjectDuration: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getProjectDuration();
      set({
        projectDuration: res.durations,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  getExperienceLevels: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getProjectExperienceLevel();
      set({
        experienceLevels: res.experienceLevels,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  getJobById: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await getJobById(id);
      set({ job: res.job, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default jobApiStore;
