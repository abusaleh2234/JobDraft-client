import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";
import JobDetails from "../Component/JobDetails";
import Addjob from "../Pages/AddJob/Addjob";
import Login from "../Login/Login";
import Register from "../Login/Register";
import PrivateRoute from "./PrivateRoute";
import Myjobs from "../Pages/MyJobs/Myjobs";
import UpdateJobs from "../Pages/UpdateJobs/UpdateJobs";
import Appliedjobs from "../Pages/Appliedjobs/Appliedjobs";
import Blogs from "../Pages/Blogs/Blogs";
import NotFound from "../Component/NotFound";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
            path:"/",
            element: <Home></Home>,
          loader: () => fetch("https://job-draft-assignment-11-server.vercel.app/jobs")
        },
        {
          path: "/alljobs",
          element: <AllJobs></AllJobs>
        },
        {
          path: "/jobdetails/:id",
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`https://job-draft-assignment-11-server.vercel.app/jobsdetails/${params.id}`)
        },
        {
          path: "/addjob",
          element: <PrivateRoute><Addjob></Addjob></PrivateRoute>
        },
        {
          path: "/myjobs",
          element: <PrivateRoute><Myjobs></Myjobs></PrivateRoute>
        },
        {
          path: "/updatejob/:id",
          element: <UpdateJobs></UpdateJobs>,
          loader: ({ params }) => fetch(`https://job-draft-assignment-11-server.vercel.app/jobsdetails/${params.id}`)
        },
        {
          path: "/appliedjobs",
          element: <PrivateRoute><Appliedjobs></Appliedjobs></PrivateRoute>
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>
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