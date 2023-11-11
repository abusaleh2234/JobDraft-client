import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ApplyedJobcard from '../../Component/ApplyedJobcard';
import { ready } from 'localforage';

const Appliedjobs = () => {

    const { user } = useContext(AuthContext)

    const { isPending, isError, data: appliedJobs, error } = useQuery({
        queryKey: ['appliedjobs'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appliedjobs?email=${user.email}`)
            return res.json()


            // axios.get(`http://localhost:5000/appliedjobs?email=${user.email}`)
            // .then(res => {
            //     return res.data;
            // })
        }
    })

    const [Appliedjobs, setAppliedjob] = useState(appliedJobs)

    console.log(Appliedjobs);

    const hendelFilter = (e) => {
        console.log(e.target.value);
        const appliedCategory = e.target.value

        if(appliedCategory === "All"){
            setAppliedjob(appliedJobs)
            return ;
        }

        const OnecategoryJob =  appliedJobs?.filter(job => job.category === appliedCategory)
        setAppliedjob(OnecategoryJob);
    }

    return (
        <div>

            <div className="py-10 text-center">
                <select onChange={hendelFilter} name="job_category" className="select select-success w-full max-w-xs border-blue-500">
                    <option disabled selected>Select Job Category </option>
                    <option value="All">All</option>
                    <option value="On Site Job">On Site Job</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote Job">Remote Job</option>
                </select>
            </div>

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
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Appliedjobs?.map(job => <ApplyedJobcard key={job._id} job={job}></ApplyedJobcard>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default Appliedjobs;