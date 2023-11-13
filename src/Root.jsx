import { Outlet } from "react-router-dom";
import Navigetionbar from "./Shared/Navbar/Navigetionbar";
import { Toaster } from "react-hot-toast";
import Footer from "./Shared/Footer/Footer";



const Root = () => {
    return (
        <div className=" container mx-auto">
            <Navigetionbar></Navigetionbar>
            {/* <Component></Component> */}
            <Outlet></Outlet>
            <Footer></Footer>
            <div><Toaster/></div>
        </div>
    );
};

export default Root;