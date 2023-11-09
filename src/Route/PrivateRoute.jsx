import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Spinner from "../Component/date";

const PrivateRoute = ({children}) => {

    const {user, Looding} = useContext(AuthContext)

    if(Looding) {
        return <Spinner></Spinner>;
    }

    if(user.email) {
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;