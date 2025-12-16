import api from "../api";

export async function signupapi(data) {
  return api.post("api/auth/signup", data);
}

export async function login(data) {
  return api.post("api/auth/login", data);
}

export async function verify_account(data) {
  return api.post("api/auth/verify-email", data);
}

export async function resend_verification_code(data) {
  return api.post("api/auth/resend-verification", data);
}

export async function forget_password(data) {
  return api.post("api/auth/forgot-password", data);
}

export async function verify_reset_code(data) {
  return api.post("api/auth/verify-reset-code", data);
}

export async function reset_password(data) {
  return api.post("api/auth/reset-password", data);
}

export async function get_client_profile() {
  return api.get("api/auth/profile");
}

export async function profile_update() {
  return api.put("api/auth/profile");
}