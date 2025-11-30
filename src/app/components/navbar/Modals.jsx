import Loginform from "@/app/components/auth/Loginform";
import OtpForm from "@/app/components/auth/OtpForm";
import Newpassword from "@/app/components/auth/Newpassword";
import CheckMailScreen from "@/app/components/auth/CheckMailScreen";
import SuccessPassScreen from "@/app/components/auth/SuccessPassScreen";
import SignupForm from "../auth/signup/SignupForm";
import ForgetPasswordWrapper from "../auth/forget-password/ForgetPasswordWrapper";

export default function Modals({
  activeModal,
  setActiveModal,
  userEmail,
  setUserEmail,
  verifyCode,
  setverifyCode
}) {
  switch (activeModal) {
    case "signin":
      return <Loginform setActiveModal={setActiveModal} />;

    case "signup":
      return (
        <SignupForm
          setActiveModal={setActiveModal}
          setUserEmail={setUserEmail}
          setverifyCode={setverifyCode}
        />
      );

    case "forget_password":
      return <ForgetPasswordWrapper setActiveModal={setActiveModal} setUserEmail={setUserEmail} />;

    case "otp_verify":
      return (
        <OtpForm
          setActiveModal={setActiveModal}
          email={userEmail}
          setverifyCode={verifyCode}
        />
      );

    case "new_password":
      return <Newpassword setActiveModal={setActiveModal} email={userEmail} />;

    case "check_mail_screen":
      return <CheckMailScreen setActiveModal={setActiveModal} />;

    case "success_pass_reset":
      return <SuccessPassScreen setActiveModal={setActiveModal} />;
  }

  return null;
}
