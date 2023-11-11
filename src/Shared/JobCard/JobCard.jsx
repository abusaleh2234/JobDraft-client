import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const JobCard = ({job}) => {

    const {user} = useContext(AuthContext)
    // console.log(job);
    const {_id , job_title,post_creator_name,job_posting_date,application_deadline,salary_range, job_applicants_number} =  job


    const hendelDetails = () => {
        if(!user?.email){
            toast.error( "You have to log in first to view details.",
            {
              duration: 6000,
            })
        }
    }

    return (
        <div className="p-5 border space-y-3">
            <h2 className="text-xl font-semibold text-[#1967d2]">{job_title}</h2>
            <p>Job Poster Name: {post_creator_name}</p>
            <div className="flex justify-between items-center">
                <p>Salary Range: $ {salary_range}</p>
                <p>Job Applicants Number: {job_applicants_number}</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Job Posting Date: {job_posting_date}</p>
                <p>Application Deadline: {application_deadline}</p>
            </div>
            <button onClick={hendelDetails} className="btn w-full text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={`/jobdetails/${_id}`}>Details</Link></button>
        </div>
    );
};

export default JobCard;