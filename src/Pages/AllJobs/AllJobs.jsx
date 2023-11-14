import { useEffect, useState } from "react";
import JobCard from "../../Shared/JobCard/JobCard";
import useLoaderAll from "../../Utility/LoaderAll";
import { useQuery } from "@tanstack/react-query";
import HelmetTitle from "../../Component/HelmetTitle";

const AllJobs = () => {


    const [jobs] = useLoaderAll();
    const [AllJobs, setAllJobs] = useState([]);
    // const [title, setTitle] = useState(null)

    // console.log(AllJobs);

    // const { isPending, isError, data, error } = useQuery({
    //     queryKey: ['searchjobs'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://job-draft-assignment-11-server.vercel.app/jobssearch/${title}`)
    //         return res.json()
    //     }
    // })


    // useEffect(() => {
    //     setAllJobs(data)
    // }, [data])


    useEffect(() => {
        // Assuming jobs is an array
        setAllJobs([...jobs]);
        // setAllJobs(data)
    }, [jobs]);



    console.log(AllJobs);

    const hendelSearch = (e) => {
        e.preventDefault()
        const titlename = e.target.title.value
        const searchjobs = jobs?.filter(job => job.job_title.toLowerCase() == titlename.toLowerCase())
        setAllJobs(searchjobs)
    }
    // console.log(title);
    return (
        <div className="">
            <HelmetTitle title={"AllJobs"}></HelmetTitle>
            <div className="flex justify-center">
                <div className="form-control">
                    <form onSubmit={hendelSearch} className="input-group">
                        <input type="text" name="title" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
                {
                    AllJobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>

    );
};

export default AllJobs;