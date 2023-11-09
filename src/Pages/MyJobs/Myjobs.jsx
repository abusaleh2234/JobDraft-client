import { useContext } from "react";
import useLoaderAll from "../../Utility/LoaderAll";
import { AuthContext } from "../../Provider/AuthProvider";
import MyJobsCard from "../../Component/MyJobsCard";

const Myjobs = () => {

    const { user } = useContext(AuthContext)
    const { jobs } = useLoaderAll()

    const myJobs = jobs.filter(job => job.creator_email === user.email)
    // console.log(myJobs);

    // const { _id, job_title, post_creator_name, job_posting_date, application_deadline, salary_range, job_applicants_number } = job


    return (
        <div className="w-10/12 mx-auto">
            {
                myJobs.map(job => <MyJobsCard key={job._id} job={job}></MyJobsCard>)
            }
        </div>
    );
};

export default Myjobs;