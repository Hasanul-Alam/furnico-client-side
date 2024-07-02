import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user){
        return <Navigate to='/'></Navigate>
    }
    else{
        return children;
    }
};

export default ProtectedRoute;