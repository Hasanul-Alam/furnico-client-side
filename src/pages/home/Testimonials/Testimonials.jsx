import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ReactStars from "react-rating-stars-component";

const Testimonials = () => {
    const review = "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames acturpis egestas. Integer convallis volutpat dui quis scelerisque."
  return (
    <div className="bg-white text-black py-10">
      <div className="w-8/12 mx-auto max-md:w-11/12 text-black">
        <h2 className="text-center text-4xl font-semibold my-5">
          Testimonials
        </h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper my-20 text-center"
        >
          <SwiperSlide>
            <p className="mx-16">
              {review}
            </p>
            <img
              src="https://i.ibb.co/H2q4DDb/person-1.jpg"
              alt="person-1"
              className="max-w-[80px] block mx-auto rounded-full mt-5"
            />
            <div className="flex justify-center mt-2">
              <ReactStars
                count={5}
                value={4}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
            </div>
            <p className="mt-2">Maria Jones</p>
            <p>CEO Co-Founder, XYZ Inc.</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="mx-16">
              {review}
            </p>
            <img
              src="https://i.ibb.co/H2q4DDb/person-1.jpg"
              alt="person-1"
              className="max-w-[80px] block mx-auto rounded-full mt-5"
            />
            <div className="flex justify-center mt-2">
              <ReactStars
                count={5}
                value={4}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
            </div>
            <p className="mt-2">Maria Jones</p>
            <p>CEO Co-Founder, XYZ Inc.</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
