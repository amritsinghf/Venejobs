// const BASE_URL = "http://localhost:3000/";
// export async function apiFetch(endpoint, options = {}) {
//     const res = await fetch(`${BASE_URL}${endpoint}`, {
//         method: options.method || "GET",
//         headers: {
//             "Content-Type": "application/json",
//             ...(options.headers || {}),
//         },
//         body: options.body,
//     });
//     if (!res.ok) {
//         throw new Error(`API error: ${res.status}`);
//     }
//     return res.json();
// }

// lib/api.js
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
        const cookieStore = await cookies(); // 👈 await here
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
    return Promise.reject(error.response?.statusText);
  }
);

export default api;
