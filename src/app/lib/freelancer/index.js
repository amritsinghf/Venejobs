import { data } from "autoprefixer";
import api from "../api";

export async function SaveFreelanceDetails(data) {
  return api.post("api/freelancer/profile", data);
}
export async function getFreelanceDetails() {
  return api.get("api/freelancer/profile");
}
export async function updateFreelanceBasicprofile(data) {
  return api.post("api/freelancer/profile/basic", data);
}

export async function getFreelancerSkills() {
  return api.get("api/freelancer/skills");
}
export async function addFreelanceSkills(data) {
  return api.post("api/freelancer/skill", data);
}
export async function updateFreelanceSkills(id, data) {
  return api.put(`api/freelancer/skill/${id}`, data);
}
export async function deleteFreelanceSkill(id) {
  return api.delete(`api/freelancer/skill/${id}`);
}

export async function getFreelancerExperience() {
  return api.get("api/freelancer/profile/experiences");
}
export async function addFreelanceExperience(data) {
  return api.post("api/freelancer/profile/experience", data);
}
export async function updateFreelanceExperience(id, data) {
  return api.put(`api/freelancer/profile/experiences/${id}`, data);
}
export async function deleteFreelanceExperience(id) {
  return api.delete(`api/freelancer/profile/experience/${id}`);
}

export async function getFreelancerPortfolio() {
  return api.get("api/freelancer/profile/portfolios");
}
export async function addFreelancePortfolio(data) {
  return api.post("api/freelancer/profile/portfolio", data);
}
export async function updateFreelancePortfolio(id, data) {
  return api.put(`api/freelancer/profile/portfolio/${id}`, data);
}
export async function deleteFreelancePortfolio(id) {
  return api.delete(`api/freelancer/profile/portfolio/${id}`);
}

export async function getFreelancerLanguage() {
  return api.get("api/freelancer/profile/languages");
}
export async function addFreelanceLanguage(data) {
  return api.post("api/freelancer/profile/language", data);
}
export async function updateFreelanceLanguage(id, data) {
  return api.put(`api/freelancer/profile/language/${id}`, data);
}
export async function deleteFreelanceLanguage(id) {
  return api.delete(`api/freelancer/profile/language/${id}`);
}

export async function getFreelancerEducation() {
  return api.get("api/freelancer/profile/educations");
}
export async function addFreelancerEducation(data) {
  return api.post("api/freelancer/profile/education", data);
}
export async function updateFreelanceEducation(id, data) {
  return api.put(`api/freelancer/profile/education/${id}`, data);
}
export async function deleteFreelanceEducation(id) {
  return api.delete(`api/freelancer/profile/education/${id}`);
}

export async function getAllSkills() {
  return api.get("api/skills");
}
