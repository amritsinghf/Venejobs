import { create } from "zustand";
import { toast, Slide } from "react-toastify";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";

const ToastIcon = ({ type }) => {
  const base = "w-5 h-5 shrink-0";

  if (type === "success")
    return <CheckCircleIcon className={`${base} text-green-600`} />;
  if (type === "error")
    return <ErrorIcon className={`${base} text-red-600`} />;

  return <InfoIcon className={`${base} text-blue-600`} />;
};

const toastStore = create(() => ({
  showToast: (message, type = "info") => {
    toast(
      <div className="flex items-center gap-3">
        <ToastIcon type={type} />

        <p className="text-sm sm:text-[15px] font-medium text-gray-800 leading-snug">
          {message}
        </p>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
        closeButton: false,
        hideProgressBar: true,
        pauseOnHover: true,
        closeOnClick: true,
        draggable: false,
        transition: Slide,

        className: `
          bg-white
          border border-gray-200
          rounded-lg
          shadow-sm
          px-4 py-3
          flex items-center
          w-[92%] max-w-[300px]
          mx-auto sm:mx-0
        `,
      }
    );
  },
}));

export default toastStore;
