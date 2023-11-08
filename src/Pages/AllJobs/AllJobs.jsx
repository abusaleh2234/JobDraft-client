import JobCard from "../../Shared/JobCard/JobCard";
import useLoaderAll from "../../Utility/LoaderAll";

const AllJobs = () => {
    const {jobs} = useLoaderAll()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            {
                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
    );
};

export default AllJobs;