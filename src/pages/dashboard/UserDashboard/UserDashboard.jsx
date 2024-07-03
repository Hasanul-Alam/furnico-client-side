import "./UserDashboard.css";
const UserDashboard = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-xl font-bold">Card 1</h2>
              <p>Content goes here...</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-xl font-bold">Card 2</h2>
              <p>Content goes here...</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-xl font-bold">Card 3</h2>
              <p>Content goes here...</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-xl font-bold">Card 4</h2>
              <p>Content goes here...</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
