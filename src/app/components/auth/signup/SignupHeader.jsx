import Image from "next/image";
import Button from "../../button/Button";

export default function SignupHeader() {
  return (
    <>
      <div className="flex items-center justify-center gap-3 mt-5 mb-5">
        <Image src="/logo.png" width={40} height={40} alt="logo" />
        <h1 className="font-semibold text-xl">Venejobs</h1>
      </div>

      <h2 className="text-3xl lg:text-4xl text-heading font-extrabold leading-tight text-center mb-3">Sign Up</h2>

      <p className="text-sm text-center text-gray-500">
        Already have an account?{" "}
        <Button
          type="button"
          onClick={() => setActiveModal("signin")}
          className="text-black font-semibold"
        >
          Sign In
        </Button>
      </p>
    </>
  );
}
