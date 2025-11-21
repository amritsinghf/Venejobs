import { create } from 'zustand';
import { get_jobByUser } from '../lib/jobs';


const jobApiStore = create((set) => ({
  data: [],          // stores API data
  loading: false,    // loading state
  error: null,       // error state
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const res = await get_jobByUser();
      set({ data: res.jobs, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  
}));

export default jobApiStore;