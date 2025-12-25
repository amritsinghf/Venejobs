import api from "../api";

export async function SaveFreelanceDetails(data) {
  return api.post("api/freelancer/profile", data);
}

export async function getFreelanceDetails() {
  return api.get("api/freelancer/profile");
}

export async function updateFreelanceDetails(data) {
  return api.patch("api/freelancer/profile",data);
}