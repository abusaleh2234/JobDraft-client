
import { Link } from 'react-router-dom';
import GoogleLogin from './GoogleLogin';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {

    const {creatUser} = useContext(AuthContext)
    const [error, setError] = useState(null)
    // console.log(error);

    const hendelRegister = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.Photourl.value
        const password = form.password.value
        console.log(name,email,photo,password);

        const capitalLetter = /[A-Z]/;
        const specialCharacter = /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/;


        if(password.length < 6) {
            setError("password at least  6 characters")
            return;
        }
        else if(!specialCharacter.test(password)){
            setError("password at least a special character")
            return;
        }
        else if(!capitalLetter.test(password)){
            setError("password at least a capital letter")
            return;
        }
        else{
            setError(null)
        }

        creatUser(email,password)
        .then(res => {
            console.log(res.user)
            // setUser(res?.user)
            toast.success('Your Login Successfully!')
        })
        .catch(err => console.log(err))

    }
    return (
        <div className=" h-full bg-blue-50">
        <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
            <div className="card flex-shrink-0 w-full lg:w-10/12 bg-base-100">
                <div className=" lg:text-left py-10 mx-8 border-b">
                    <h1 className="text-center text-4xl font-bold text-blue-600">Register</h1>
                </div>
                <form onSubmit={hendelRegister} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className=" px-2 py-3 border outline-0 bg-blue-50 focus:outline-1" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className=" px-2 py-3 border outline-0 bg-blue-50 focus:outline-1" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Photo Url</span>
                        </label>
                        <input type="text" name="Photourl" placeholder="Enter Photo url" className=" px-2 py-3 border outline-0 bg-blue-50 focus:outline-1" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Password</span>
                        </label>
                        <input type="text" name="password" placeholder="Enter your password" className="px-2 py-3 border outline-0	bg-blue-50 focus:outline-1" required />
                    </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Register</button>
                    </div>
                    {/* {
                        error && <p className="text-sm text-center text-red-600">{error}</p>
                    } */}
                    <GoogleLogin></GoogleLogin>
                    <div className="text-center pt-4">
                        <p className="text-lg">Alredy have an account please? <Link to="/login" className="text-red-600 font-bold">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;