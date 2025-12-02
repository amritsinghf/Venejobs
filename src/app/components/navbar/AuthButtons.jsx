import Button from "../button/Button";
import SvgIcon from "../SvgIcon";

export default function AuthButtons({ setActiveModal, setMenuOpen }) {
  return (
    <div className="flex items-center gap-6 md:gap-10">

      {/* LOGIN BUTTON (mobile + tablet + desktop) */}

      <div className="text-gray-600 lg:!text-white font-medium cursor-pointer tracking-wide" onClick={() => setActiveModal("signin")}>
        Login

      </div>

      {/* SIGNUP BUTTON (only on desktop) */}

      <button className="hidden xl:block bg-white font-medium rounded-full px-6 py-2.5 tracking-wide" onClick={() => setActiveModal("signup")}>
        Sign Up
      </button>

      {/* HAMBURGER (mobile + tablet only) */}
      <button
        className="block lg:hidden text-gray-600 md:text-white"
        onClick={() => setMenuOpen(true)}
      >
        <SvgIcon name="ToggleMenu" />
      </button>
    </div>
  );
}
