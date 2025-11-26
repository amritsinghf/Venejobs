import { create } from "zustand";
import { get_client_profile } from "../lib/auth/auth.api";

const userApiStore = create((set) => ({
  user: { id: null, name: "", email: "" },
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      console.log("fetch");
      const res = await get_client_profile();
      set({ user: res.data.user, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default userApiStore;
