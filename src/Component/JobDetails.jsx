import { useLoaderData } from "react-router-dom";
// import ModalFullscreenExample from "./Modale";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import axios from "axios";
import toast from "react-hot-toast";




const JobDetails = () => {

    const { user } = useContext(AuthContext)
    const job = useLoaderData()
    // console.log(job);
    const { _id, job_title, job_banner_img, post_creator_name, job_description, skill_reqierment, job_posting_date, application_deadline, salary_range, job_applicants_number,creator_email } = job;


    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    const applyControl = () => {
        if(user.email === creator_email){
            toast.error(" You Creat the Job.",
            {
                duration: 6000,
              }
            )
            return ;

        }
        return setOpenModal(true);
    }


    const hendelApplySubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const resume = form.resumelink.value

        const applysubmit = {
            name,
            email,
            resume
        }
        console.log(applysubmit);

        axios.post("http://localhost:5000/applyedjobs",applysubmit)
        .then(res => console.log(res.data))
    }



    return (
        <div className="space-y-5 pb-10">
            <div className="hero h-[85vh]" style={{ backgroundImage: `url(${job_banner_img})` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-7xl font-bold">We Are Hired <span className="text-[#1967d2]">{job_title}</span></h1>
                        {/* <p className="mb-5">{job_description}</p> */}
                    </div>
                </div>
            </div>
            <div className="space-y-3">
                <h2 className="text-4xl font-semibold text-black border-l-4 pl-4 border-l-blue-700">{job_title}</h2>
                <p className="text-xl font-semibold text-sky-600">Job Poster Name: {post_creator_name}</p>
                <p>{job_description}</p>
                <div className="flex justify-between items-center">
                    <p><span className="text-base font-bold">Salary Range:</span> $ {salary_range}</p>
                    <p>Job Applicants Number: {job_applicants_number}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Job Posting Date: {job_posting_date}</p>
                    <p>Application Deadline: <span className="font-bold">{application_deadline}</span></p>
                </div>
                <div>

                    <Button onClick={() => {
                        applyControl()
                    }} className="btn w-full text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply</Button>
                    <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="font-bold text-xl">Apply</h3>
                                <form onSubmit={hendelApplySubmit}>
                                    <div className="flex gap-6">
                                        <div className="w-full">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input type="email" defaultValue={user?.email} name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your email" />
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                            <input type="name" defaultValue={user.displayName} name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your  Resume Link</label>
                                        <input type="text" name="resumelink" placeholder="Resume link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                    </div>
                                    <div className=" flex justify-end  mx-auto modal-action">
                                        <button type="submit" className=" w-1/6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>


            </div>
        </div>
    );
};
export default JobDetails;