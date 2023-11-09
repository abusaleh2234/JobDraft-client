import { Link } from "react-router-dom";

const MyJobsCard = ({ job }) => {

    const { _id, job_title, job_banner_img, post_creator_name, job_description, skill_reqierment, job_posting_date, application_deadline, salary_range, job_applicants_number } = job

    return (
        <div className="p-4 flex justify-between items-center border-b">
            <div className="space-y-1">
                <h2 className="text-xl font-semibold text-[#1967d2]">{job_title}</h2>
                <p>Job Poster Name: {post_creator_name}</p>
                <p>Salary Range: $ {salary_range}</p>
            </div>
            <div className="space-y-1">
                <p>Job Posting Date: {job_posting_date}</p>
                <p>Application Deadline: {application_deadline}</p>
            </div>
            <div className="flex flex-col space-y-1">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={`/updatejob${_id}`}>Update</Link></button>
                <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><Link to={`/updatejob${_id}`}>Delete</Link></button>
            </div>
        </div>
    );
};

export default MyJobsCard;