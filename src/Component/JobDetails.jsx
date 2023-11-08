import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {

    const job = useLoaderData()
    console.log(job);
    const { _id, job_title, job_banner_img, post_creator_name,job_description,skill_reqierment,job_posting_date, application_deadline, salary_range, job_applicants_number } = job

    return (
        <div className="space-y-5 pb-10">
            <div className="hero h-[85vh]" style={{ backgroundImage: `url(${job_banner_img})` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-7xl font-bold">We Are Hired <span className="text-[#1967d2]">{job_title}</span></h1>
                        {/* <p className="mb-5">{}</p> */}
                    </div>
                </div>
            </div>
            <div className="space-y-3">
                <h2 className="text-4xl font-semibold text-black border-l-4 pl-4 border-l-blue-700">{job_title}</h2>
                <p className="text-xl font-semibold text-sky-600">Job Poster Name: {post_creator_name}</p>
                <p>{job_description.skill_reqierment}</p>
                <div className="flex justify-between items-center">
                    <p><span className="text-base font-bold">Salary Range:</span> $ {salary_range}</p>
                    <p>Job Applicants Number: {job_applicants_number}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Job Posting Date: {job_posting_date}</p>
                    <p>Application Deadline: <span className="font-bold">{application_deadline}</span></p>
                </div>
                <button className="btn w-full text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={`/jobdetails/${_id}`}>Apply</Link></button>
            </div>
        </div>
    );
};

export default JobDetails;