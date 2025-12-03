import JobCard from "./JobCard";

export default function JobsList({ jobs }) {
    return (
        <>
            {jobs?.map((item) => (
                <JobCard key={item.id} item={item} />
            ))}
        </>
    );
}
