import Jobs from "../jobs/Jobs";
import ActiveContracts from "../ActiveContracts/ActiveContracts";

export default function JobContent({ showData }) {
    return (
        <div className="mt-10">
            {showData ? <Jobs /> : <ActiveContracts />}
        </div>
    );
}
