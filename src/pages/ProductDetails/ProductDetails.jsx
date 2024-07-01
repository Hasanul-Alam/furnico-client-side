import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  // console.log(id)
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  const handleAddToCart = () => {
    axios
      .post("http://localhost:3000/cart", {
        image: product.image,
        name: product.name,
        price: product.price,
        email: user.email,
      })
      .then((res) => {
        console.log(res.data)
        if (res.data.insertedId) {
          Swal.fire({
            title: "Your product is added successfully",
            icon: "success",
            confirmButtonText: "Ok",
            showCloseButton: true,
          });
        }
      });
  };

  return (
    <div className="bg-white text-black py-16">
      <div className="w-8/12 mx-auto max-md:w-11/12 text-black">
        <div className="flex justify-around max-md:block">
          <div className="w-3/5 max-md:w-full">
            <img src={product.image} alt="product-image" />
          </div>
          <div className="w-3/5 max-md:w-full">
            <h2 className="text-3xl font-semibold text-gray-700">
              {product.name}
            </h2>
            <p className="mt-5 mb-3">{product.description}</p>
            <p className="font-semibold">Made in {product.made}</p>
            <p className="text-green-600 font-semibold my-0.5">
              Available: {product.available}
            </p>
            <p className="font-semibold">Price: ${product.price}</p>
            <button
              onClick={handleAddToCart}
              className="btn btn-outline btn-primary mt-5"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
