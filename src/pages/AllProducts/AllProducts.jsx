import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/all-products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="bg-white py-10">
      {/* <h2 className="text-xl text-center text-black">Total products: {products.length}</h2> */}
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-slate-100 w-3/12 shadow-xl max-md:w-full mt-10 text-black"
          >
            <figure className="w-3/4 mx-auto max-md:w-full">
              <img src={product.image} alt="Chairs" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description.slice(0, 150)}</p>
              <p className="font-semibold">Price: ${product.price}</p>
              <div className="card-actions justify-end">
                <Link to={`${user ? `/product-details/${product.id}` : '/login'}`}>
                  <button className="btn  bg-green-900 text-white hover:bg-green-800 border-0">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
