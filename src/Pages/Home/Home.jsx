import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import JobsTab from "./JobsTab";
import ChooseWhy from "./ChooseWhy";
import Explore from "./Explore";

const Home = () => {

    const jobs = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="py-10">
                <JobsTab jobs={jobs}></JobsTab>
            </div>
            <div className="bg-blue-50">
                <ChooseWhy></ChooseWhy>
            </div>
            <div className="bg-gray-100">
                <Explore></Explore>
            </div>
        </div>
    );
};

export default Home;