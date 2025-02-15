import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
const Hero = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            {/* <video className="w-full" autoPlay src={video1} loop muted></video> */}
            <img
              src="https://res.cloudinary.com/daxjoqam6/image/upload/v1739286878/banner-2_npre7l.webp"
              className="w-full"
            />
            <div className="absolute flex items-center justify-center inset-0 bg-black/20">
              <h1 className="text-2xl md:text-6xl font-bold text-center">
                Experience Nature’s Hidden Pathways
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            {/* <video className="w-full" autoPlay src={video2} loop muted></video> */}
            <img
              src="https://res.cloudinary.com/daxjoqam6/image/upload/v1739286877/banner-3_k6smry.webp"
              className="w-full"
            />
            <div className="absolute flex items-center justify-center inset-0 bg-black/20">
              <h1 className="text-2xl md:text-6xl font-bold text-center">
              Discover Uncharted River Wonders
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            {/* <video className="w-full" autoPlay src={video3} loop muted></video> */}
            <img
              src="https://res.cloudinary.com/daxjoqam6/image/upload/v1739286877/banner-1_nkzox6.webp"
              className="w-full"
            />
            <h1 className="text-2xl md:text-6xl font-bold text-center">
            Adventure Awaits on Every Current
              </h1>
            <p></p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
