import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    axios
      .get("https://furnico-server.onrender.com/all-users")
      .then((res) => setUsers(res.data));
  }, [refetch]);

  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Do you want to make this user an admin?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it.",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`https://furnico-server.onrender.com/all-users/${id}`, { role: "admin" })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              setRefetch(!refetch);
              Swal.fire({
                title: "Successfull!",
                text: "You have successfully made this user an admin",
                icon: "success",
              });
            }
          });
      }
    });

    // console.log(id)
  };

  const handleAlreadyAdmin = () => {
    Swal.fire({
      title: "This user is already an admin.",
      icon: "info",
      html: `
        You can use <b>change role</b>,
        from 
        <a href="#" autofocus>database</a>,
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonAriaLabel: "Okk",
      cancelButtonAriaLabel: "Cancle",
    });
  };

  const handleDeleteUser = (id) => {
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
        axios.delete(`https://furnico-server.onrender.com/user/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setRefetch(!refetch);
            Swal.fire({
              title: "Deleted!",
              text: "The user has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });

    // console.log(id);
  };

  return (
    <div className="overflow-x-auto bg-white text-black min-h-screen py-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-center text-3xl font-semibold py-10">
          Manage All Users
        </h2>
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 px-4 py-2">Name</th>
              <th className="w-1/4 px-4 py-2">Email</th>
              <th className="w-1/4 px-4 py-2">Image</th>
              <th className="w-1/4 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="bg-gray-100 text-black text-center">
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2 text-center">
                  <img
                    className="block mx-auto rounded"
                    src={user.photo}
                    alt="image"
                    width={70}
                    height={"auto"}
                  />
                </td>

                <td className="border pb-4 px-4 py-4 mx-auto flex gap-2 justify-center">
                  <button
                    onClick={
                      user.role === "admin"
                        ? () => handleAlreadyAdmin()
                        : () => handleMakeAdmin(user._id)
                    }
                    className={`${
                      user.role === "admin"
                        ? "bg-slate-400 rounded cursor-pointer p-4"
                        : "btn btn-outline btn-success text-2xl font-bold py-2 px-4 rounded block"
                    }`}
                  >
                    <FaUserShield />
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className={`${
                      user.role === "admin"
                        ? "btn-disabled border border-black p-4 rounded"
                        : "btn btn-outline btn-error font-bold text-xl py-2 px-4 rounded block"
                    }`}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllUsers;
