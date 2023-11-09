import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import { Example } from "../../Component/date";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Addjob = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [deadline, setDeadline] = useState(new Date());

    const { user } = useContext(AuthContext)
    // {
    //     "post_creator_name": "Abusaleh",
    //         "job_title": "Video Editor",
    //             "category": "On Site Job",
    //                 "job_posting_date": "11/08/2023",
    //                     "application_deadline": "12/12/2023",
    //                         "salary_range": "1500",
    //                             "job_applicants_number": "1",
    //                                 "job_banner_img" : "https://i.ibb.co/qsJMNqw/video-editor.png",
    //                                     "job_description": {
    //         "skill_reqierment": "The applicants should have experience in the following area(s): Adobe illustrator, Graphics Design, motion graphics, Photography, Professional Video Editing Attention to detail and accuracy to ensure high-quality video output Ability to adapt to different styles, formats, and genres of video content."
    //     },
    //     "creator_email": "abusalehmd2266@gmail.com"
    // }


    const hendelAddJob = (e) => {
        e.preventDefault()

        const form = e.target
        const job_title = form.job_title.value
        const category = form.job_category.value
        const salary_range = form.salary_range.value
        const job_applicants_number = form.applicants_number.value
        const job_description = form.job_description.value
        const job_banner_img = form.job_banner_url.value
        const creator_email = user.email
        const post_creator_name = user.displayName
        const job_posting_date = startDate
        const application_deadline = deadline

        const newJob = {
            job_title,
            category,
            salary_range,
            job_applicants_number,
            job_description,
            job_banner_img,
            creator_email,
            post_creator_name,
            job_posting_date,
            application_deadline
        }
        console.log(newJob);
    }

    return (
        <div>
            <div className="">
                <h2 className="text-5xl font-bold text-center py-8">Add a Job</h2>
                <form onSubmit={hendelAddJob}>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="job_title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Title</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="job_category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Category</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="salary_range" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Salary Range</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="applicants_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Applicants Number</label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="job_description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Description</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="job_banner_url" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Banner URL</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="user_email" defaultValue={user.email} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Email</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="user_name" defaultValue={user.displayName} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-10 w-full mb-6 group flex items-center justify-between">
                            <label className="block mb-2 text-sm  text-gray-500 dark:text-gray-400 ">Job Posting Date: </label>
                            <span className="rounded-lg"><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></span>
                        </div>
                        <div className="relative z-10 w-full mb-6 group flex items-center justify-between">
                            <label className="block mb-2 text-sm  text-gray-500 dark:text-gray-400 ">Application Deadline: </label>
                            <span className="rounded-lg"><DatePicker selected={deadline} onChange={(date) => setDeadline(date)} /></span>
                        </div>

                    </div>
                    <div className="w-full">
                        <button type="submit" className="btn w-full text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addjob;