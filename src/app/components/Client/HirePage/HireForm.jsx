"use client";

import { useForm, FormProvider } from "react-hook-form";
import ContractTerms from "./ContractTerms";
import { useRouter } from "next/navigation";

export default function HireForm() {
  const methods = useForm({
    defaultValues: {
      message: "",
    },
  });

  const router = useRouter();

  const nextStep = async () => {
    router.push("/client/HirePayment");
  };

  return (
    <FormProvider {...methods}>
      <form>
        <ContractTerms onNext={nextStep} />
      </form>
    </FormProvider>
  );
}
