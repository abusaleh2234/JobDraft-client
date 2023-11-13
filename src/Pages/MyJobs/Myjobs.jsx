import { useContext, useEffect, useState } from "react";
import useLoaderAll from "../../Utility/LoaderAll";
import { AuthContext } from "../../Provider/AuthProvider";
import MyJobsTableRow from "../../Component/MyJobsCard";
import Swal from 'sweetalert2'
import axios from "axios";
import HelmetTitle from "../../Component/HelmetTitle";


const Myjobs = () => {

    const { user } = useContext(AuthContext)
    // const { jobs } = useLoaderAll()
    const [myPostedJobs, setMyPostedJobs] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/usersjobs?email=${user.email}`, { withCredentials: true })
            .then(res => setMyPostedJobs(res.data))
    }, [])

    console.log(user.email);



    // console.log(myPostedJobs,myJobs);

    // const { _id, job_title, post_creator_name, job_posting_date, application_deadline, salary_range, job_applicants_number } = job

    const hendelDeleteMyjob = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/myjobdelete/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your job post has been deleted.",
                                icon: "success"
                            });

                            const remainingJobs = myPostedJobs.filter(job => job._id !== id)
                            setMyPostedJobs(remainingJobs)
                        }
                    })
            }
        });
    }


    return (
        <div className="w-10/12 mx-auto">
            <HelmetTitle title={"My Jobs"}></HelmetTitle>
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
                                myPostedJobs.map(job => <MyJobsTableRow key={job._id} job={job} hendelDeleteMyjob={hendelDeleteMyjob}></MyJobsTableRow>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Myjobs;