import axios from "axios";

const BASE_URL = "http://localhost:3000/";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    // "Content-Type": "", //axios will automatically take content type
    // Authorization: `Bearer ${token}`,
  },
});

api.interceptors.request.use(
  async (config) => {
    let token = "";
    if (typeof window === "undefined") {
      try {
        const { cookies } = await import("next/headers");
        const cookieStore = await cookies();
        token = cookieStore.get("token")?.value || "";
      } catch (e) {
        // cookies() may fail in some contexts
      }
    } else {
      token = localStorage.getItem("token");
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API error:", error.response?.status);
    return Promise.reject(error);
  }
);

export default api;
