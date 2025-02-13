import { useEffect, useState } from "react";

const News = () => {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);
  return (
    <div>
      <div className="my-4 md:my-14">
        <p className="text-center uppercase text-sm font-medium text-purple-500">
          Our Blogs
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Latest News And Articles
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Stay updated through our latest news and articles, from travel tips to
          promos, we keep you informed about <br /> trends and all things
          related to River Adventure that could inspire your next travel.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allNews.map((news) => (
          <div
            key={news}
            // animate__animated animate__slideInUp --animate-delay: 0.5s transition-transform duration-700 hover:scale-105 bg-gray-900 hover:shadow shadow-gray-700
            className="card rounded-none"
          >
            <figure>
              <img
                className="w-full hover:scale-110 duration-300 hover:opacity-90"
                src={news.image}
                alt=""
              />
            </figure>
            <div className="card-body  transition duration-500 p-0 mt-4">
              <h2 className="card-title text-xl text-[#11bfbc] hover:underline transition">
                {news.title}
              </h2>
              <p className="text-gray-300 text-base italic">
                Travel Blog by {news.author}
              </p>
              <p className="text-base text-blue-100">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="px-4 mt-16 block m-auto md:px-8 py-1 md:py-3 font-medium cursor-pointer  hover:bg-white hover:text-purple-500 bg-purple-500 text-white transition duration-300">
        Read More
      </button>
    </div>
  );
};

export default News;
