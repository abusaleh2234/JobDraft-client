import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Component/date";

const PrivateRoute = ({children}) => {

    const {user, Looding} = useContext(AuthContext)
    const location = useLocation()

    if(Looding) {
        return <Spinner></Spinner>;
    }

    if(user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;