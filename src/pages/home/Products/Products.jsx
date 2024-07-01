import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="bg-white py-16">
      <div className="w-8/12 mx-auto max-md:w-11/12 text-black">
        <h2 className="text-center text-5xl">
          Crafted with excellent material.
        </h2>
        <p className="text-center text-gray mt-3">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate <br /> velit imperdiet dolor tempor tristique.
        </p>

        {/* Products */}
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="card bg-slate-100 w-3/12 shadow-xl max-md:w-full mt-10">
            <figure className="w-3/4 mx-auto max-md:w-full">
              <img src="https://i.ibb.co/nkQPSWf/product-1.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Nordic Chair</h2>
              <p>
                The chair, crafted from oak, features a cushioned seat,
                ergonomic design, and elegant curves, blending comfort with
                style.
              </p>
              <p className="font-semibold">Price: $350</p>
              <div className="card-actions justify-end">
                <button className="btn  bg-green-900 text-white hover:bg-green-800 border-0">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-slate-100 w-3/12 shadow-xl max-md:w-full mt-10">
            <figure className="w-3/4 mx-auto max-md:w-full">
              <img src="https://i.ibb.co/nkQPSWf/product-1.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Nordic Chair</h2>
              <p>
                The chair, crafted from oak, features a cushioned seat,
                ergonomic design, and elegant curves, blending comfort with
                style.
              </p>
              <p className="font-semibold">Price: $350</p>
              <div className="card-actions justify-end">
                <button className="btn  bg-green-900 text-white hover:bg-green-800 border-0">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-slate-100 w-3/12 shadow-xl max-md:w-full mt-10">
            <figure className="w-3/4 mx-auto max-md:w-full">
              <img src="https://i.ibb.co/nkQPSWf/product-1.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Nordic Chair</h2>
              <p>
                The chair, crafted from oak, features a cushioned seat,
                ergonomic design, and elegant curves, blending comfort with
                style.
              </p>
              <p className="font-semibold">Price: $350</p>
              <div className="card-actions justify-end">
                <button className="btn  bg-green-900 text-white hover:bg-green-800 border-0">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-slate-100 w-3/12 shadow-xl max-md:w-full mt-10">
            <figure className="w-3/4 mx-auto max-md:w-full">
              <img src="https://i.ibb.co/nkQPSWf/product-1.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Nordic Chair</h2>
              <p>
                The chair, crafted from oak, features a cushioned seat,
                ergonomic design, and elegant curves, blending comfort with
                style.
              </p>
              <p className="font-semibold">Price: $350</p>
              <div className="card-actions justify-end">
                <button className="btn  bg-green-900 text-white hover:bg-green-800 border-0">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-slate-100 w-3/12 shadow-xl max-md:w-full mt-10">
            <figure className="w-3/4 mx-auto max-md:w-full">
              <img src="https://i.ibb.co/nkQPSWf/product-1.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Nordic Chair</h2>
              <p>
                The chair, crafted from oak, features a cushioned seat,
                ergonomic design, and elegant curves, blending comfort with
                style.
              </p>
              <p className="font-semibold">Price: $350</p>
              <div className="card-actions justify-end">
                <button className="btn  bg-green-900 text-white hover:bg-green-800 border-0">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-slate-100 w-3/12 shadow-xl max-md:w-full mt-10">
            <figure className="w-3/4 mx-auto max-md:w-full">
              <img src="https://i.ibb.co/nkQPSWf/product-1.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Nordic Chair</h2>
              <p>
                The chair, crafted from oak, features a cushioned seat,
                ergonomic design, and elegant curves, blending comfort with
                style.
              </p>
              <p className="font-semibold">Price: $350</p>
              <div className="card-actions justify-end">
                <button className="btn  bg-green-900 text-white hover:bg-green-800 border-0">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <Link to={"/all-products"}>
          <button className="btn rounded-full mx-auto block mt-10 bg-slate-900 text-white text-lg font-semibold hover:bg-slate-800">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
