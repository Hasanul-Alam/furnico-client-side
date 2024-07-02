import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useContext(AuthContext);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        `http://localhost:3000/cart?email=${user.email}`
      );
      setCartItems(res.data);
    };
    loadData();
  }, [refetch]);

  const subTotal = cartItems.reduce((acc, item) => acc + item.price * 1, 0);
  const tax = subTotal * 0.1;
  const total = subTotal + tax;

  const handleRemoveItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This is a limited edition product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/cart-item/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setRefetch(!refetch);

            Swal.fire({
              icon: "success",
              title: "Item deleted successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row shadow-lg bg-white rounded-lg overflow-hidden py-5">
            <div className="w-full lg:w-3/4 p-6">
              <h2 className="text-2xl font-bold mb-4 text-center text-black mb-3">
                Your Cart
              </h2>
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item._id}
                    className="flex items-center justify-between border-b py-4"
                  >
                    <div>
                      <img
                        src={item.image}
                        alt="Chair"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg text-black">{item.name}</h3>
                      <p className="text-gray-600 text-black font-semibold mt-2">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="mx-4 text-black">
                        ${item.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleRemoveItem(item._id)}
                        className="btn btn-outline btn-error"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/4 bg-gray-50 p-6 text-black">
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4 font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Link to={`/purchase/${total.toFixed(2)}`}>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
