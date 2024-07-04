import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";

const UserOrders = () => {
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);

  const { user } = useContext(AuthContext);
  //   console.log(user.email);

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      const res = await axios.get(
        `http://localhost:3000/orders?email=${user.email}`
      );
      setOrders(res.data);
      if (res.data) {
        setLoading(false);
      }
    };
    loadData();
  }, [refetch]);

  const handleCancleOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "We have plenty of other options, check them out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancle it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/orders/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setRefetch(!refetch);
            Swal.fire({
              title: "Deleted!",
              text: "Your order has been cancled.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      {loading ? (
        <div className="bg-white text-center">
          <span className="loading loading-spinner loading-lg text-black mt-10"></span>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white text-black min-h-screen py-10">
          <div className="w-11/12 mx-auto">
            <table className="w-full divide-y divide-gray-200 overscroll-y-contain">
              <thead className="bg-gray-800 text-white">
                <tr className="">
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="">
                          <div className="text-sm font-medium text-gray-900">
                            {user.displayName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {order.address}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{order.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        ${order.price}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleCancleOrder(order._id)}
                        className="btn btn-outline btn-error"
                      >
                        <RiDeleteBinLine />
                      </button>
                    </td>
                  </tr>
                ))}
                {/* More rows... */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default UserOrders;
