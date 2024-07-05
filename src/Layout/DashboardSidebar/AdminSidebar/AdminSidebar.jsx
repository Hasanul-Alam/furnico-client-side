import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const AdminSidebar = () => {
  const {logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

    return (
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-4">
              <Link to={'/'} className="hover:bg-gray-700 p-2 rounded block">
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link to={'/dashboard/admin-dashboard'} className="hover:bg-gray-700 p-2 rounded block">
                Dashboard Home
              </Link>
            </li>
            <li className="mb-4">
              <Link to={'/dashboard/admin-profile'} className="hover:bg-gray-700 p-2 rounded block">
                Profile
              </Link>
            </li>
            <li className="mb-4">
              <Link to={'/dashboard/manage-all-orders'} className="hover:bg-gray-700 p-2 rounded block">
                Manage All Orders
              </Link>
            </li>
            <li className="mb-4">
              <Link to={'/dashboard/add-product'} className="hover:bg-gray-700 p-2 rounded block">
                Add Product
              </Link>
            </li>
            <li className="mb-4">
              <Link to={'/dashboard/all-users'} className="hover:bg-gray-700 p-2 rounded block">
                All Users
              </Link>
            </li>
            <li className="mb-4">
              <Link to={'/dashboard/manage-products'} className="hover:bg-gray-700 p-2 rounded block">
                Manage Products
              </Link>
            </li>
            <li className="mb-4">
                <button onClick={handleLogOut} className="hover:bg-gray-700 p-2 rounded block w-full text-start">
                    Logout
                </button>
            </li>
          </ul>
        </nav>
    );
};

export default AdminSidebar;