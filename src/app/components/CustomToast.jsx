import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function CustomToast({ title, message }) {
  return (
    <div
      className="
        w-[360px]
        flex items-center gap-4
        p-4
        bg-white
        border border-gray-200
        rounded-xl
        shadow-[0_8px_20px_rgba(0,0,0,0.06)]
      "
    >
      {/* Icon */}
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
        <CheckCircleIcon className="text-green-600 !w-[20px] !h-[20px]" />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <p className="text-sm text-gray-800 font-medium">{title}</p>
        <p className="text-xs text-gray-500 mt-[2px]">{message}</p>
      </div>
    </div>
  );
}
