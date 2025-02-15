import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
const Review = () => {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);
  // console.log(allReviews.length);
  return (
    <div>
      <div className="my-4 md:my-14 animate__animated animate__fadeInRight --animate-delay: 0.5s">
        <p className="text-center uppercase text-sm font-medium text-purple-500">
          Testimonial
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Visitors Say
          </h2>
        </h2>
      </div>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          720: { slidesPerView: 2 },
          800: { slidesPerView: 3 },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {allReviews.map((review, idx) => (
          <SwiperSlide
            key={idx}
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-6"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-24 h-24 rounded-full object-cover p-2 block m-auto md:m-0 mb-4 border-4 border-gray-200 shadow-md"
            />
            <p className="text-gray-700 italic mb-4">{`"${review.review}"`}</p>
            <h4 className="text-lg font-semibold text-gray-700">
              - {review.name}
            </h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
