import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const [userRole, setUserRole] = useState("admin");
  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        `https://furnico-server.onrender.com//users?email=${user.email}`
      );
      setUserRole(res.data.role);
    };
    loadData();
  }, [user]);
  return [userRole]
};

export default useRole;
