import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleAddProduct = (data) => {
    const imageFile = { image: data.image[0] };
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=a034eb9194a3961792dc743224e30bd2",
        imageFile,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then(async (res) => {
        const imageLink = res.data.data.display_url;
        const productData = {
          name: data.name,
          price: data.price,
          available: data.available,
          made: data.made,
          description: data.description,
          image: imageLink,
        };
        const response = await axios.post(
          `https://furnico-server.onrender.com/products`,
          productData
        );
        if (response.data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product has been added successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">
          Add New Product
        </h1>
        <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Product Name</label>
            <input
              {...register("name")}
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-black"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Product Price</label>
            <input
              {...register("price")}
              type="number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-black"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Available</label>
            <input
              {...register("available")}
              type="number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-black"
              required
            ></input>
          </div>
          <div>
            <label className="block text-gray-700">Made</label>
            <input
              {...register("made")}
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-black"
              required
            ></input>
          </div>
          <div>
            <label className="block text-gray-700">Product Description</label>
            <textarea
              {...register("description")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-black"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Product Image</label>
            <input
              {...register("image")}
              type="file"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
