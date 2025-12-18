import { create } from "zustand";
import {
  create_job_post,
  get_all_jobs,
  get_job_by_id,
  get_budget_data,
  get_categories,
  get_jobByClient,
  get_project_duration,
  get_project_experienceLevel,
  get_project_size,
  getskills_by_category,
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
      const res = await create_job_post(formdata);
      return res;
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  fetchJobsByUser: async (page, limit) => {
    set({ loading: true, error: null });
    try {
      const res = await get_jobByClient(page, limit);
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
      const res = await get_all_jobs(page, limit);
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
      const res = await get_budget_data();
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
      const res = await get_categories();
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
      const res = await getskills_by_category(selectedCategory);

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
      const res = await get_project_size();
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
      const res = await get_project_duration();
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
      const res = await get_project_experienceLevel();
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
      const res = await get_job_by_id(id);
      set({ job: res.job, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default jobApiStore;
