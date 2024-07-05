import { useForm } from "react-hook-form";
import "./Purchase.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useParams } from "react-router-dom";
const Purchase = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  let { price } = useParams();

  // Get Current Date
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;


  const handlePayment = (data) => {

    // Pushing date and status in the data
    const currentDate = formattedDate;
    const orderInfo = {...data, date:currentDate, status: 'pending'};

    if (price <= 0) {
      Swal.fire({
        icon: "error",
        title: "You do't have anything in your cart.",
        text: "Get something first",
      });
    } else {
      axios.post("https://furnico-server.onrender.com/orders", orderInfo).then((res) => {
        if (res.data.insertedId) {
          // Remove data from cart
          axios
            .delete(`https://furnico-server.onrender.com/cart?email=${user.email}`)
            .then((res) => {
              if (res.data.deletedCount > 0) {
                Swal.fire("Your payment is successfull");
                price = 0;
                reset();
              }
            });
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center max-md:bg-white">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md max-md:shadow-none">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Order Information
        </h2>
        <form onSubmit={handleSubmit(handlePayment)} id="purchase-form">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              {...register("name")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={user.displayName ? user.displayName : ""}
              id="name"
              type="text"
              placeholder="Enter your name"
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
              {...register("email")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={user.email ? user.email : ""}
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              {...register("address")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              id="address"
              type="text"
              placeholder="Enter your address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Phone
            </label>
            <input
              {...register("phone")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              id="phone"
              type="text"
              placeholder="Enter your active phone number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              {...register("price")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              value={price ? parseFloat(price) : 0}
              id="price"
              type="text"
              placeholder="Price"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="product"
            >
              Select Payment Method
            </label>
            <select
              {...register("paymentMethod")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              id="product"
            >
              <option value="Bkash">Bkash</option>
              <option value="Rocket">Rocket</option>
              <option value="MasterCard">Master Card</option>
              <option value="VisaCard">Visa Card</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Proceed to pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
