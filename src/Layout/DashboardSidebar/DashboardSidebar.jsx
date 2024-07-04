import { useState } from "react";
import { Outlet } from "react-router-dom";
import useRole from "../../hooks/useRole";
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import UserSidebar from "./UserSidebar/UserSidebar";

const DashboardSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userRole] = useRole();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex">
      <aside
        className={`fixed z-30 inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out bg-gray-800 text-white w-64 md:relative md:translate-x-0`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        {userRole === "admin" ? <AdminSidebar /> : <UserSidebar />}
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-green-800 text-white p-4 shadow md:hidden flex justify-between items-center">
          <h1 className="text-2xl">Dashboard</h1>
          <button className="focus:outline-none" onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </header>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
