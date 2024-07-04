import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import Swal from "sweetalert2";

const ManageAllOrders = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/all-orders").then((res) => {
      setOrders(res.data);
      setLoading(false);
    });
  }, [refetch]);

  const handleApproveCancle = (id, status) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`http://localhost:3000/order/${id}`, { status: status })
          .then((res) => {
            if (res.data.modifiedCount > 0 && status === "approved") {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "The order has been approved.",
                showConfirmButton: false,
                timer: 1500,
              });
            } else if (res.data.modifiedCount > 0 && status === "cancled") {
              Swal.fire({
                icon: "success",
                title: "Order Cancled Successfully",
                text: "The order has been cancled.",
              });
            }
            setRefetch(!refetch)
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
            <h2 className="text-center font-semibold text-3xl mb-10">All Orders</h2>
            <table className="w-full divide-y divide-gray-200 max-md:table-xs">
              <thead className="bg-gray-800 text-white">
                <tr className="max-md:text-xs">
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider max-md:text-center"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider max-md:text-center"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider max-md:text-center"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider max-md:text-center"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider max-md:text-center"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium uppercase tracking-wider max-md:text-center"
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
                            {order.name}
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
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.status === "cancled"
                            ? "bg-red-100 text-red-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                      <button
                        onClick={() =>
                          handleApproveCancle(order._id, "approved")
                        }
                        className={` ${
                          order.status
                            ? "btn-disabled p-4 border rounded-lg border-slate-400 text-gray-500"
                            : "btn btn-outline btn-success"
                        }`}
                      >
                        <FaCheck />
                      </button>
                      <button
                        onClick={() =>
                          handleApproveCancle(order._id, "cancled")
                        }
                        className={` ${
                          order.status
                            ? "btn-disabled p-4 border rounded-lg border-slate-400 text-gray-500"
                            : "btn btn-outline btn-error"
                        }`}
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

export default ManageAllOrders;
