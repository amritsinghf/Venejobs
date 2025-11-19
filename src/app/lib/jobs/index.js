import api from '@/app/lib/api.js'

export async function create_job_post(data) {
  return api.post("api/jobs/create", data);
}

export async function get_categories() {
  return api.get("api/lookup/categories");
}

export async function getskills_by_category(data) {
  return api.get(`api/lookup/skills?category=${data}`)
}

export async function get_project_size() {
    return api.get("api/lookup/project-options/project-sizes");
}

export async function get_project_duration() {
    return api.get("api/lookup/project-options/durations");
}

export async function get_project_experienceLevel() {
    return api.get("api/lookup/project-options/experience-levels");
}

export async function get_budget_data() {
    return api.get("api/lookup/budget-types");
}

export async function get_jobByUser() {
    return api.get("api/jobs/my-jobs");
}