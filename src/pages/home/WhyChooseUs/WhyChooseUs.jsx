import { FiTruck } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineMessage } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-10">
      <div className="w-8/12 mx-auto max-md:w-11/12 text-black">
        <div className="flex gap-10 max-md:block max-md:text-center">
          <div>
            <h2 className="text-3xl font-semibold">Why Choose Us</h2>
            <p className="text-gray my-3">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate <br /> velit imperdiet dolor tempor
              tristique.
            </p>
            <div className="flex gap-5 flex-wrap mt-14 items-center text-start">
                <div className="w-[47%] max-md:w-[45%]">
                    <FiTruck className="text-[1.75rem]"/>
                    <h4 className="font-semibold my-2">Fast and free shipping</h4>
                    <p className="text-sm">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate</p>
                </div>
                <div className="w-[47%] max-md:w-[45%]">
                    <HiOutlineShoppingBag className="text-[1.75rem]"/>
                    <h4 className="font-semibold my-2">Easy to shop</h4>
                    <p className="text-sm">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate</p>
                </div>
                <div className="w-[47%] mt-5 max-md:w-[45%]">
                    <MdOutlineMessage className="text-[1.75rem]"/>
                    <h4 className="font-semibold mt-3">24/7 Support</h4>
                    <p className="text-sm">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate</p>
                </div>
                <div className="w-[47%] mt-5 max-md:w-[45%]">
                    <FaArrowRightArrowLeft className="text-[1.75rem]"/>
                    <h4 className="font-semibold mt-3">Hassle Free Returns</h4>
                    <p className="text-sm">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate</p>
                </div>
            </div>
          </div>
          <div className="w-[100%] max-md:mt-10">
            <img className="rounded-lg" src="https://i.ibb.co/q97LMWG/why-choose-us-img.jpg" alt="Choose-Us-Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
