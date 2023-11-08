import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import JobsTab from "./JobsTab";

const Home = () => {

    const jobs = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="py-10">
                <JobsTab jobs={jobs}></JobsTab>
            </div>
        </div>
    );
};

export default Home;