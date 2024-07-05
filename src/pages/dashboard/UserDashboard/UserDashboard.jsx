import "./UserDashboard.css";
const UserDashboard = () => {
  return (
    <div className="min-h-screen flex text-black">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="bg-white shadow-md py-4 px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-black">Your Activities</div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 bg-gray-100 space-y-6">
          {/* Overview Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <p>
              Welcome to your dashboard! Here you can find an overview of your
              recent activities and statistics.
            </p>
          </div>

          {/* Recent Activities Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
            <ul className="space-y-2">
              <li className="border-b pb-2">Logged in at 10:23 AM</li>
              <li className="border-b pb-2">Updated profile at 9:15 AM</li>
              <li className="border-b pb-2">Changed password at 8:45 AM</li>
            </ul>
          </div>

          {/* Statistics Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <h3 className="text-blue-800 text-lg font-semibold">
                  Total Logins
                </h3>
                <p className="text-blue-800 text-2xl font-bold">123</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <h3 className="text-green-800 text-lg font-semibold">
                  Profile Updates
                </h3>
                <p className="text-green-800 text-2xl font-bold">45</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h3 className="text-yellow-800 text-lg font-semibold">
                  Password Changes
                </h3>
                <p className="text-yellow-800 text-2xl font-bold">12</p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg">
                <h3 className="text-red-800 text-lg font-semibold">
                  Logout Count
                </h3>
                <p className="text-red-800 text-2xl font-bold">67</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
