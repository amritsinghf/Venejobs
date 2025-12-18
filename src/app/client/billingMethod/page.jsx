import BillingWrapper from "@/app/components/BillingMethod/BillingWrapper";
import LeftPanel from "@/app/components/BillingMethod/LeftPanel";
import RightPanel from "@/app/components/BillingMethod/RightPanel";
import ClientLayout from "@/app/layout/ClientLayout";

export default function page() {
  return (
    <>
      <ClientLayout>
        <BillingWrapper>
          <LeftPanel />

          <RightPanel />
        </BillingWrapper>
      </ClientLayout>
    </>
  );
}
