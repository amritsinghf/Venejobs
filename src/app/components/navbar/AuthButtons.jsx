import Button from "../ui/Button";
import SvgIcon from "../SvgIcon";

export default function AuthButtons({ setActiveModal, setMenuOpen }) {
  return (
    <div className="flex items-center gap-6">
      <Button
        className="text-gray-600 lg:!text-white font-medium cursor-pointer"
        onClick={() => setActiveModal("signin")}
      >
        Login
      </Button>

      <Button
        onClick={() => setActiveModal("signup")}
        className="hidden lg:block bg-white font-medium rounded-full px-6 py-2.5"
      >
        Sign Up
      </Button>

      <Button
        className="lg:hidden text-white"
        onClick={() => setMenuOpen(true)}
      >
        <SvgIcon name="ToggleMenu" />
      </Button>
    </div>
  );
}
