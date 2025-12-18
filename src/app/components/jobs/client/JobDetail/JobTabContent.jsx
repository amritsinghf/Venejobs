import JobContent from "./JobContent";

export default function JobTabContent({ showData, job }) {
  const contentMap = {
    all: <JobContent />,
    review: <div>Review Proposals Content</div>,
    invite: <div>Invite Freelancers Content</div>,
    hire: <div>Hire Content</div>,
  };

  return contentMap[showData];
}
