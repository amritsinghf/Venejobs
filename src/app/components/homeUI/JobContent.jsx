import Jobs from "@/app/components/Home_Data/Jobs";
import Active_Contracts from "@/app/components/Home_Data/Active_Contracts";

export default function JobContent({ showData }) {
    return (
        <div className="mt-10">
            {showData ? <Jobs /> : <Active_Contracts />}
        </div>
    );
}
