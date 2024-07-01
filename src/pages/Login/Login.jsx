import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import Swal from "sweetalert2";

const Login = () => {
  // const { user } = AuthProvider();
  const { loginWithEmailPassword, setUser, setError, error } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const submitLogin = (data) => {
    const {email, password} = data;
    loginWithEmailPassword(email, password)
    .then(result => {
      setUser(result.user);
      Swal.fire({
        title: "Login Successfull",
        text: "You have successfully loggedin.",
        icon: "success"
      });
      navigate(from)
      reset();
    })
    .catch(error => setError(error.message))
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen max-md:bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md max-md:shadow-none">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Login
        </h2>
        <form onSubmit={handleSubmit(submitLogin)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="username"
              type="text"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="password"
              type="password"
              placeholder="********"
              required
            />
          </div>
          <p className="text-red-600">{error}</p>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to={"/registration"}
            >
              {"Don't have an account?"}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
