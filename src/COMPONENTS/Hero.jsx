const Hero = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full md:h-[600px]">
        <img
          src="https://res.cloudinary.com/daxjoqam6/image/upload/v1739286878/banner-2_npre7l.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full md:h-[600px]">
        <img
          src="https://res.cloudinary.com/daxjoqam6/image/upload/v1739286877/banner-3_k6smry.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full md:h-[600px]">
        <img
          src="https://res.cloudinary.com/daxjoqam6/image/upload/v1739286877/banner-1_nkzox6.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
