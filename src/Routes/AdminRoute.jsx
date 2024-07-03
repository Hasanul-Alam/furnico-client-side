import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";


const AdminRoute = ({children}) => {
    const { loading} = useContext(AuthContext);
    const [userRole] = useRole();
    if(loading){
        return <div className="bg-white text-center"><span className="loading loading-spinner loading-lg text-black mt-10"></span></div>
    }
    if(userRole === 'admin'){
        return children;
    }
    else{
        return <Navigate to = '/'></Navigate>
    }
};

export default AdminRoute;