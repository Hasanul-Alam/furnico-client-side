import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useContext } from "react";
import axios from "axios";

const Registration = () => {
  const { createUserWithEmailPassword, setUser, setError, updateUserProfile } =
    useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const submitRegistration = (data) => {
    const { email, password, confirmPassword, name, photoUrl } = data;
    if (password === confirmPassword) {
      createUserWithEmailPassword(email, password)
        .then((result) => {
          if (result.user.uid) {
            setUser(result.user);
            updateUserProfile(name, photoUrl).then(() => {
              const userInfo = {
                name: name,
                email: email,
                photoUrl: photoUrl,
              };
              axios.post("http://localhost:3000/all-users", userInfo).then((res) => {
                if (res.data.insertedId) {
                  console.log(res.data)
                  reset();
                  Swal.fire({
                    title: "Success",
                    text: "You have successfully registered.",
                    icon: "success",
                  });
                }
              });
            });
          }
        })
        .catch((error) => setError(error.message));
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen max-md:bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md max-md:shadow-none">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Register
        </h2>
        <form onSubmit={handleSubmit(submitRegistration)}>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="fullName"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Photo Url
            </label>
            <input
              {...register("photoUrl", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="photo"
              type="text"
              placeholder="Enter your photo link here."
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to={"/login"}
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
