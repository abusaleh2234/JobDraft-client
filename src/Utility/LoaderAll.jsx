import axios from "axios";
import { useEffect, useState } from "react";

const useLoaderAll = () => {
    const [jobs, setJobs] = useState([])
    
    useEffect( () => {
        axios.get("http://localhost:5000/jobs")
        .then(res => setJobs(res.data))
    },[])
    
    return [jobs];
};



export default useLoaderAll;