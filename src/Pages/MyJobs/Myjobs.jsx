import { useContext } from "react";
import useLoaderAll from "../../Utility/LoaderAll";
import { AuthContext } from "../../Provider/AuthProvider";
import MyJobsCard from "../../Component/MyJobsCard";
import MyJobsTableRow from "../../Component/MyJobsCard";

const Myjobs = () => {

    const { user } = useContext(AuthContext)
    const { jobs } = useLoaderAll()

    const myJobs = jobs.filter(job => job.creator_email === user.email)
    // console.log(myJobs);

    // const { _id, job_title, post_creator_name, job_posting_date, application_deadline, salary_range, job_applicants_number } = job


    return (
        <div className="w-10/12 mx-auto">
            {/* {
                myJobs.map(job => <MyJobsCard key={job._id} job={job}></MyJobsCard>)
            } */}

            <div className="">

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Job title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Post & Deadline Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Update & Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myJobs.map(job => <MyJobsTableRow key={job._id} job={job}></MyJobsTableRow>)
                            }
                            
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Myjobs;