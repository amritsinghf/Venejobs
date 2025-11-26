import { create } from 'zustand';
import { get_all_jobs, get_jobByClient } from '../lib/jobs';


const jobApiStore = create((set) => ({
  jobs: [],   
  pagenum:0,
  totalpagenum: 1,      // stores API data
  loading: false,    // loading state
  error: null,       // error state
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const res = await get_jobByClient();
      set({ jobs: res.jobs, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  fetchAllJob:async(page,limit)=>{
     set({ loading: true, error: null });
    try {
      const res = await get_all_jobs(page,limit);
      console.log(res.page)
      set({ jobs: res.jobs,pagenum:res.page + 1, totalpagenum:res.totalPages,loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  }
  
}));

export default jobApiStore;