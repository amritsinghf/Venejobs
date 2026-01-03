import api from "../api";

export async function SaveFreelanceDetails(data) {
  return api.post("api/freelancer/profile", data);
}

export async function getFreelanceDetails() {
  return api.get("api/freelancer/profile");
}

export async function updateFreelanceBasicprofile(data) {
  return api.patch("api/freelancer/profile/basic",data);
}

export async function updateFreelanceSkills(data) {
  return api.put("api/freelancer/profile/skills",data);
}

export async function updateFreelanceExperience(data) {
  return api.put("api/freelancer/profile/experiences",data);
}

export async function updateFreelancePortfolio(data) {
  return api.put("api/freelancer/profile/portfolios",data);
}