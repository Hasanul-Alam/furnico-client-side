import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ReactStars from "react-rating-stars-component";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        `https://furnico-server.onrender.com/review`
      );
      setReviews(res.data);
    };
    loadData();
  }, [user]);
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
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <p className="mx-16">{review.comments}</p>
              <img
                src={review.image}
                alt="person-1"
                className="max-w-[80px] block mx-auto rounded-full mt-5"
              />
              <div className="flex justify-center mt-2">
                <ReactStars
                  count={5}
                  value={review.rating}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
              </div>
              <p className="mt-2">{review.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
