import { create } from 'zustand';
import { get_client_profile } from '../lib/auth/auth.api';


const userApiStore = create((set) => ({
  data: { user: { id: null, name: "", email: "" } },          // stores API data
  loading: false,    // loading state
  error: null,       // error state
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const res = await get_client_profile();
      set({ data: res.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  
}));

export default userApiStore;