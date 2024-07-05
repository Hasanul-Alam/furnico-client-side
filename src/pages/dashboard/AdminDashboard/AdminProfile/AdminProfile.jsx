const AdminProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg p-6 lg:p-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-end lg:justify-between">
          <img
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg lg:mr-6"
            src={"https://i.ibb.co/HPz0q7P/IMG20240223151814.jpg"}
            alt="Profile"
          />
          <div className="mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900">Hasanul Alam</h2>
            <p className="text-xl text-gray-600">MERN Stack Developer</p>
            <div className="mt-4 flex justify-center lg:justify-start">
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
                Twitter
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
                LinkedIn
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-900">About Me</h3>
          <p className="mt-4 text-gray-700">
            A highly motivated MERN stack developer with a strong
            foundation in MongoDB, Express.js, React, and Node.js. Passionate
            about creating dynamic, user-friendly web applications. Adept at
            problem-solving and eager to leverage skills in a collaborative
            environment to contribute to innovative projects and continuous
            learning.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-900">Skills</h3>
          <div className="mt-4 flex flex-wrap">
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded mb-2">
              JavaScript
            </span>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded mb-2">
              React
            </span>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded mb-2">
              Node.js
            </span>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded mb-2">
              Express.js
            </span>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded mb-2">
              MongoDB
            </span>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded mb-2">
              CSS
            </span>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded mb-2">
              CSS Frameworks
            </span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-900">
            Contact Information
          </h3>
          <div className="mt-4">
            <p className="text-gray-700">Email: hasanulalam0000@gmail.com</p>
            <p className="text-gray-700">Phone: +8801797888924</p>
            <p className="text-gray-700">Location: Rajshahi, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
