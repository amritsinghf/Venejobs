import { create } from "zustand";
import { toast, Slide } from "react-toastify";
import CustomToast from "../components/CustomToast";

const toastStore = create(() => ({
  showSuccess: (
    title = "Success toast message",
    msg = "Success toast message appear here"
  ) => {
    toast(<CustomToast title={title} message={msg} />, {
      position: "top-right",
      autoClose: 2500,
      closeButton: false,
      hideProgressBar: true,
      pauseOnHover: true,
      closeOnClick: true,
      draggable: false,
      transition: Slide,

      // IMPORTANT OVERRIDES
      className: "!bg-transparent !shadow-none !p-0 !m-0 !w-auto",
      bodyClassName: "!p-0 !m-0 !w-auto flex",
      progressStyle: { display: "none" },
    });
  },
}));

export default toastStore;
