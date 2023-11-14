
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../../Shared/JobCard/JobCard';
import axios from 'axios';
import useLoaderAll from '../../Utility/LoaderAll';

const JobsTab = () => {

    const [jobs] = useLoaderAll()
    const categorys = ["On Site Job", "Remote Job", "Hybrid", "Part Time"]
    const [ctgJobs, setCtgJobs] = useState([])

    const hendelCtgJobs = (category) => {
        axios.get(`https://job-draft-assignment-11-server.vercel.app/jobs/${category}`)
            .then(res => setCtgJobs(res.data))
    }
    // console.log(ctgJobs);
    return (
        <Tabs>
            <TabList>
                <Tab>All Jobs</Tab>
                {
                    categorys.map(category => <Tab key={category} onClick={() => hendelCtgJobs(category)}>{category}</Tab>)
                }
                {/* <Tab>Title 1</Tab>
                <Tab>Title 2</Tab> */}
            </TabList>

            <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        ctgJobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                    }
                </div>

            </TabPanel>
            <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        ctgJobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        ctgJobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        ctgJobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                    }
                </div>
            </TabPanel>
        </Tabs>
    )
}



export default JobsTab;