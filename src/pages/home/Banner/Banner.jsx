import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-green-900 py-16">
      <div className="w-8/12 mx-auto max-md:w-11/12">
        <div className="flex justify-between items-center max-md:block">
          <div className="w-8/12 max-md:w-full ">
            <h2 className="text-5xl text-white font-bold max-md:text-3xl">
              Modern Interior Design Studio
            </h2>
            <p className="text-gray my-5">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <Link to={'/all-products'}>
              <button className="btn btn-warning rounded-full text-black px-5 text-lg">
                Shop Now
              </button>
            </Link>
            <Link to={"/all-products"}>
              <button className="btn border-2 border-gray-400 bg-green-900 text-white text-lg px-5 rounded-full ms-2 my-5 hover:bg-green-900 hover:border-white">
                Explore
              </button>
            </Link>
          </div>
          <div className="ms-16 max-md:m-0">
            <img src="https://i.ibb.co/Qk5HZgD/couch.png" alt="Sofa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
