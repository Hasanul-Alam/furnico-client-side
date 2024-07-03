import { Link } from "react-router-dom";


const UserSidebar = () => {
    return (
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-4">
              <Link to={'/'} className="hover:bg-gray-700 p-2 rounded block">
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link to={'/dashboard/profile'} className="hover:bg-gray-700 p-2 rounded block">
                Profile
              </Link>
            </li>
            <li className="mb-4">
              <Link to={'/dashboard/my-orders'} className="hover:bg-gray-700 p-2 rounded block">
                My Orders
              </Link>
            </li>
            <li className="mb-4">
              <Link to={'/dashboard/review'} className="hover:bg-gray-700 p-2 rounded block">
                Review
              </Link>
            </li>
          </ul>
        </nav>
    );
};

export default UserSidebar;