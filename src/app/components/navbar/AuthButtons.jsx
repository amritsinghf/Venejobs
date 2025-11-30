import Button from "../button/Button";
import SvgIcon from "../SvgIcon";

export default function AuthButtons({ setActiveModal, setMenuOpen }) {
  return (
    <div className="flex items-center gap-6">

      {/* LOGIN BUTTON (mobile + tablet + desktop) */}
      <Button
        className="text-gray-600 lg:!text-white font-medium cursor-pointer"
        onClick={() => setActiveModal("signin")}
      >
        Login
      </Button>

      {/* SIGNUP BUTTON (only on desktop) */}
      <Button
        onClick={() => setActiveModal("signup")}
        className="hidden xl:block bg-white font-medium rounded-full px-6 py-2.5"
      >
        Sign Up
      </Button>

      {/* HAMBURGER (mobile + tablet only) */}
      <Button
        className="block lg:hidden text-gray-600 md:text-white"
        onClick={() => setMenuOpen(true)}
      >
        <SvgIcon name="ToggleMenu" />
      </Button>
    </div>
  );
}
