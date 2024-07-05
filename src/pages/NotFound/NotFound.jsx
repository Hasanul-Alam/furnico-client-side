import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="">
          <img
            src="https://i.ibb.co/nRRQKW8/404-error-dribbble-800x600.gif"
            alt="Not Found"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
        <p className="text-2xl text-gray-600 mt-4">Oops! Page not found.</p>
        <p className="text-gray-600 mt-2">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
