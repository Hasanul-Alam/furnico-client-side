import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    axios
      .get("https://furnico-server.onrender.com/all-products")
      .then((res) => setProducts(res.data));
  }, [refetch]);

  const handleUpdate = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You can't update it now.",
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://furnico-server.onrender.com/products/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setRefetch(!refetch);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto bg-white text-black min-h-screen py-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-center font-semibold text-3xl mb-10">
          All Products
        </h2>
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
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left font-medium uppercase tracking-wider max-md:text-center"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left font-medium uppercase tracking-wider max-md:text-center"
              >
                Available
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
            {products.map((product) => (
              <tr key={product._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="">
                      <div className="text-sm font-medium text-gray-900">
                        {product.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${product.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    width={50}
                    height={50}
                    src={product.image}
                    alt="Chair Image"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {product.available} Pieces
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <button
                    onClick={() => handleUpdate()}
                    className={` ${
                      product.status
                        ? "btn-disabled p-4 bproduct rounded-lg bproduct-slate-400 text-gray-500"
                        : "btn btn-outline btn-success"
                    }`}
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className={` ${
                      product.status
                        ? "btn-disabled p-4 bproduct rounded-lg bproduct-slate-400 text-gray-500"
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
  );
};

export default ManageProduct;
