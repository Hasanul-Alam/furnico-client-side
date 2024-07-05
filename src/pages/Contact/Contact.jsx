import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-200 text-black min-h-screen py-10 flex items-center justify-center">
      <div className="w-2/4 mx-auto max-md:w-11/12">
        {/* Location, Message, Phone Number */}
        <div className="grid grid-cols-3 gap-5 justify-items-center max-md:grid-cols-1 max-md:justify-items-start my-10">
          <div className="flex gap-4 items-center">
            <div className="bg-green-800 p-5 rounded text-white text-xl">
              <FaLocationDot />
            </div>
            <p>
              Ramchandrapur, Bashar Road
              <br />
              Rajshahi, Bangladesh
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-green-800 p-5 rounded text-white text-xl">
              <FaEnvelope />
            </div>
            <p>hasanulalam0000@gmail.com</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-green-800 p-5 rounded text-white text-xl">
              <FaPhoneAlt />
            </div>
            <p>+88 017 97888924</p>
          </div>
          <div></div>
          <div></div>
        </div>
        {/* Message Form */}
        <div className=" flex items-center gap-4 max-md:block max-md:mx-auto justify-center">
          {/* Message Form */}
          <label className="form-control w-1/2 max-md:w-full">
            <div className="label">
              <span className="text-gray-600">First Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-1/2 bg-white"
            />
          </label>
          <label className="form-control w-1/2 max-md:w-full">
            <div className="label">
              <span className="text-gray-600">Last Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full bg-white"
            />
          </label>
        </div>
        <label className="form-control w-full my-3">
          <div className="label">
            <span className="text-gray-600">Email Address</span>
          </div>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-1/2 bg-white"
          />
        </label>
        <div className="label">
          <span className="text-gray-600">Message</span>
        </div>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black sm:text-sm"
        ></textarea>
        <button
          className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-full shadow-md hover:bg-slate-800 transition duration-300 mt-5"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
