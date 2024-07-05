import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const StarRating = ({ rating, onRatingChange }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-8 h-8 cursor-pointer ${
            star <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => onRatingChange(star)}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.27 3.918a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.27 3.918c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.176 0l-3.368 2.448c-.785.57-1.838-.197-1.54-1.118l1.27-3.918a1 1 0 00-.364-1.118L2.336 9.345c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.27-3.918z" />
        </svg>
      ))}
    </div>
  );
};

const Review = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = useState(0);
  console.log(user.photoURL)

  const handleRatingChange = (rating) => {
    setRating((prevData) => ({
      ...prevData,
      rating,
    }));
  };

  const submit = (data) => {
    // Handle form submission here
    const finalData = { ...data, rating: rating.rating, image: user.photoURL };
    axios.post("https://furnico-server.onrender.com/review", finalData).then((res) => {
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your review has been submitted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md max-md:shadow-none max-md:bg-transparent max-md:px-2">
        <h2 className="text-2xl font-bold mb-6 text-black text-center">
          Submit a Review
        </h2>
        <form onSubmit={handleSubmit(submit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black"
            >
              Name
            </label>
            <input
              {...register("name")}
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black sm:text-sm"
              value={user.displayName}
              //   onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black sm:text-sm"
              value={user.email}
              //   onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Rating
            </label>
            <StarRating
              rating={rating.rating}
              onRatingChange={handleRatingChange}
            />
          </div>

          <div>
            <label
              htmlFor="comments"
              className="block text-sm font-medium text-black"
            >
              Comments
            </label>
            <textarea
              {...register("comments")}
              id="comments"
              name="comments"
              rows="4"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black sm:text-sm"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
