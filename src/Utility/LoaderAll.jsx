import axios from "axios";
import { useEffect, useState } from "react";

const useLoaderAll = () => {
    const [jobs, setJobs] = useState([])
    
    useEffect( () => {
        axios.get("https://job-draft-assignment-11-server.vercel.app/jobs")
        .then(res => setJobs(res.data))
    },[])
    
    return [jobs];
};



export default useLoaderAll;