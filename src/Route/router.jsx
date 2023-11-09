import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";
import JobDetails from "../Component/JobDetails";
import Addjob from "../Pages/AddJob/Addjob";
import Login from "../Login/Login";
import Register from "../Login/Register";
import PrivateRoure from "./PrivateRoute";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    //   errorElement: <></>,
      children: [
        {
            path:"/",
            element: <Home></Home>,
            loader: () => fetch("http://localhost:5000/jobs")
        },
        {
          path: "/alljobs",
          element: <AllJobs></AllJobs>
        },
        {
          path: "/jobdetails/:id",
          element: <JobDetails></JobDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/jobsdetails/${params.id}`)
        },
        {
          path: "/addjob",
          element: <PrivateRoute><Addjob></Addjob></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
  ]);

export default router;