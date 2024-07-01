import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="bg-white text-center"><span className="loading loading-spinner loading-lg text-black mt-10"></span></div>
    }
    if(user){
        return children;
    }
    else{
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
};

export default PrivateRoute;