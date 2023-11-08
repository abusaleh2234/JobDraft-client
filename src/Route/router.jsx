import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    //   errorElement: <></>,
      children: [
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path: "/alljobs",
          element: <AllJobs></AllJobs>
        }
      ]
    },
  ]);

export default router;