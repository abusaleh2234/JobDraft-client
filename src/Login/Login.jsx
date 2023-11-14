import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import GoogleLogin from "./GoogleLogin";
import HelmetTitle from "../Component/HelmetTitle";

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()


    const hendelLogin = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        // const capitalLetter = /[A-Z]/;
        const specialCharacter = /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/;

        if(password.length < 6) {
            toast.error("password at least  6 characters")
            return;
        }
        else if(!specialCharacter.test(password)){
            toast.error("password at least a special character")
            return;
        }


        loginUser(email, password)
            .then(res => {
                console.log(res.user)
                toast.success('Your Login Successfully!')
                navigate(location?.state ? location?.state : "/")

            })
            .catch(err => {
                if(err) {
                    toast.error("Your Password and email invalid")
                }
            })
    }
    return (
        <div className="">
            <HelmetTitle title={"Login"}></HelmetTitle>
            <div className="bg-blue-50 h-full">
                <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
                    <div className="card flex-shrink-0 md:w-8/12 lg:w-6/12 bg-base-100">
                        <div className=" lg:text-left py-10 mx-8 border-b">
                            <h1 className="text-center text-4xl font-bold">Login</h1>
                        </div>
                        <form onSubmit={hendelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email address" className=" px-2 py-3 border outline-0 bg-blue-50 focus:outline-1" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Password</span>
                                </label>
                                <input type="text" name="password" required placeholder="Enter your password" className="px-2 py-3 border outline-0	bg-blue-50 focus:outline-1" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Login</button>
                            </div>
                            <GoogleLogin></GoogleLogin>
                            <div className="text-center pt-4">
                                <p>Do not Have An Account ? <Link to="/register" className="text-red-600 font-bold">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;