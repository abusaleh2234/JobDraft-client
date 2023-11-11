import { Outlet } from "react-router-dom";
import Navigetionbar from "./Shared/Navbar/Navigetionbar";
import { Toaster } from "react-hot-toast";



const Root = () => {
    return (
        <div className=" container mx-auto">
            <Navigetionbar></Navigetionbar>
            {/* <Component></Component> */}
            <Outlet></Outlet>
            <div><Toaster/></div>
        </div>
    );
};

export default Root;