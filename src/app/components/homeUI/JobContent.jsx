import Active_Contracts from "@/app/components/Home_Data/Active_Contracts";
import Jobs from "../jobs/Jobs";

export default function JobContent({ showData }) {
    return (
        <div className="mt-10">
            {showData ? <Jobs /> : <Active_Contracts />}
        </div>
    );
}
