import InviteWrapper from "@/app/components/InviteTalent/InviteWrapper";
import LeftPanel from "@/app/components/InviteTalent/LeftPanel";
import RightPanel from "@/app/components/InviteTalent/RightPanel";
import ClientLayout from "@/app/layout/ClientLayout";

export default function page() {
  
  return (
    <ClientLayout>
      <InviteWrapper>
       <LeftPanel/>

        <RightPanel/>
      </InviteWrapper>
    </ClientLayout>
  );
}
