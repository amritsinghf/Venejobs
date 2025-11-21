import {create} from 'zustand';
import { toast, Slide } from 'react-toastify';

const toastStore = create((set) => ({
  showToast: (message, type = 'info') => {
    const options = {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    };

    switch (type) {
      case 'success':
        toast.success(message, options); 
        break;
      case 'error':
        toast.error(message, options);  
        break;
      case 'info':
      default:
        toast.info(message, options);   
        break;
    }
  },
}));

export default toastStore;
