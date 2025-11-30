import Image from "next/image";

export default function LoginHeader({ setActiveModal }) {
    return (
        <>
            <div className="flex items-center justify-center gap-3 mb-5">
                <Image src="/logo.png" alt="logo" width={40} height={40} />
                <h1 className="font-semibold text-xl">Venejobs</h1>
            </div>

            <h2 className="text-3xl lg:text-4xl text-heading font-extrabold leading-tight text-center mb-3">
                Sign In
            </h2>

            <div className="text-sm text-center text-gray-500">
                Do you have an account yet?{" "}
                <button
                    onClick={() => setActiveModal("signup")}
                    className="font-semibold text-heading"
                >
                    Sign Up
                </button>
            </div>
        </>
    );
}
