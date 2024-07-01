import { IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-white text-black py-16">
      <div className="w-8/12 mx-auto max-md:w-11/12 text-black">
        {/* Footer Top */}
        <div className="flex gap-4 justify-between items-center max-md:block">
          <div className="w-4/5 flex items-center gap-4 max-md:block max-md:mx-auto ">
            {/* Message Form */}
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered input-primary w-full max-w-xs bg-white text-black"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered input-primary w-full max-w-xs bg-white text-black max-md:my-3"
            />
            <button className="btn btn-primary px-7 max-md:block max-md:mx-auto">
              <IoIosSend className="text-xl" />
            </button>
          </div>

          {/* Footer Image */}
          <div className="w-1/5 text-right max-md:w-full">
            <img src="https://i.ibb.co/NSBJgB2/sofa.png" alt="Footer Image" />
          </div>
        </div>

        {/* Main Footer */}
        <h2 className="text-3xl font-semibold text-gray-700 max-md:text-center">
          Furnico
        </h2>
        <div className="flex gap-4 justify-between mt-10 items-start max-md:block">
          <div className="w-[30%] max-md:w-full">
            <div>
              <p className="">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant
              </p>
            </div>
            <div className="flex gap-4 mt-5 max-md:justify-center">
              <button className="btn btn-circle bg-gray-300 text-slate-600 border-0 hover:bg-green-900 hover:text-white">
                <FaFacebookF />
              </button>
              <button className="btn btn-circle bg-gray-300 text-slate-600 border-0 hover:bg-green-900 hover:text-white">
                <FaTwitter />
              </button>
              <button className="btn btn-circle bg-gray-300 text-slate-600 border-0 hover:bg-green-900 hover:text-white">
                <FaInstagram />
              </button>
              <button className="btn btn-circle bg-gray-300 text-slate-600 border-0 hover:bg-green-900 hover:text-white">
                <IoLogoLinkedin />
              </button>
            </div>
          </div>
            <div className="max-md:flex max-md:gap-4 max-md:items-center max-md:mt-5 max-md:justify-center">
              <p className="max-md:mt-2">About Us</p>
              <p className="mt-2">About Us</p>
              <p className="mt-2">About Us</p>
              <p className="mt-2">About Us</p>
            </div>
            <div className="max-md:flex max-md:gap-4 max-md:items-center max-md:justify-center">
              <p className="max-md:mt-2">About Us</p>
              <p className="mt-2">About Us</p>
              <p className="mt-2">About Us</p>
            </div>
            <div className="max-md:flex max-md:gap-4 max-md:items-center max-md:justify-center">
              <p className="max-md:mt-2">About Us</p>
              <p className="mt-2">About Us</p>
              <p className="mt-2">About Us</p>
              <p className="mt-2">About Us</p>
            </div>
            <div className="max-md:flex max-md:gap-4 max-md:items-center max-md:justify-center">
              <p className="max-md:mt-2">About Us</p>
              <p className="mt-2">About Us</p>
              <p className="mt-2">About Us</p>
            </div>
        </div>

        {/* Footer Bottom */}
        <hr className="mt-10" />
        <p className="text-center mt-5 text-gray-500">
          Copyright ©2024. All Rights Reserved. — Designed with love by
          Untree.co Developed By Hasanul Alam
        </p>
      </div>
    </div>
  );
};

export default Footer;
