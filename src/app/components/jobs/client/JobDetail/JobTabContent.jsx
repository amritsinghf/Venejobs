import JobContent from "./JobContent";
import ReviewProposal from "./ReviewProposal";
import InviteFreelancer from "./InviteFreelancer";

export default function JobTabContent({ showData }) {
  const contentMap = {
    all: <JobContent />,
    review: <ReviewProposal />,
    invite: <InviteFreelancer />,
    hire: <div>Hire Content</div>,
  };

  return contentMap[showData];
}
