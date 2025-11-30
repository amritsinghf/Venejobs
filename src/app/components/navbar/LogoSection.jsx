import Image from "next/image";
import Button from "../ui/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function LogoSection() {
  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <h3 className="text-gray-600 lg:!text-white text-lg lg:text-xl font-extrabold cursor-pointer">
          Venejobs
        </h3>
      </div>

      <Button className="hidden lg:flex items-center bg-white/5 rounded-full px-6 py-2.5 text-white">
        Categories
        <ArrowDropDownIcon className="ml-1 text-white" fontSize="small" />
      </Button>
    </div>
  );
}
