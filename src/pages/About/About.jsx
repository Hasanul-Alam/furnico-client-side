import Testimonials from "../home/Testimonials/Testimonials";
import WhyChooseUs from "../home/WhyChooseUs/WhyChooseUs";

const About = () => {
  const data = [
    {
      name: "Lawson Arnold",
      image: "https://i.ibb.co/xDdL49C/person-1.jpg",
    },
    {
      name: "Kathryn Ryan",
      image: "https://i.ibb.co/sF5CBgq/person-4.jpg",
    },
    {
      name: "Patrik White",
      image: "https://i.ibb.co/bXv7F8G/person-2.jpg",
    },
    {
      name: "Jeremy Walker",
      image: "https://i.ibb.co/brPY8H0/person-3.jpg",
    },
  ];
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="w-full mx-auto py-10">
        {/* Why choose use section */}
        <WhyChooseUs></WhyChooseUs>
      </div>
      {/* Our Team */}
      <h2 className="text-center font-semibold text-3xl">Our Team</h2>
      <div className="w-8/12 mx-auto py-10 max-md:w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.image}
            className="card w-full border-0 rounded-none max-md:w-full"
          >
            <figure>
              <img
                src={item.image}
                alt="Team Member"
              />
            </figure>
            <div className="card-body bg-white text-black p-0 pt-10 px-2">
              <span>
                <a
                  href="#"
                  className="text-3xl underline hover:no-underline cursor-pointer inline"
                >
                  {item.name}
                </a>
              </span>
              <p>CEO, Founder, Atty.</p>
              <p className="py-3">
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <div className=" justify-start">
                <button className="btn btn-outline btn-primary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <Testimonials></Testimonials>
    </div>
  );
};

export default About;
