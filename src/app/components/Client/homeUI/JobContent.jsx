
import Jobs from "../../jobs/client/Jobs";
import ActiveContracts from "../ActiveContracts/ActiveContracts";

export default function JobContent({ showData }) {
  return (
    <div className="mt-10">
      {showData === 0 && <Jobs />}
      {showData === 1 && <ActiveContracts />}
    </div>
  );
}