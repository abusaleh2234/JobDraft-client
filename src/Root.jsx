import { Outlet } from "react-router-dom";
import Navigetionbar from "./Shared/Navbar/Navigetionbar";



const Root = () => {
    return (
        <div className=" container mx-auto">
            <Navigetionbar></Navigetionbar>
            {/* <Component></Component> */}
            <Outlet></Outlet>

        </div>
    );
};

export default Root;