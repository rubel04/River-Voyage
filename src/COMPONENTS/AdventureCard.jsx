import { Link } from "react-router-dom";
import banner from "../assets/banner-1.jpg";

const AdventureCard = (props) => {
    const {adventure} = props || {};
    return (
        <div className="card rounded-none">
      <figure className="h-full">
        <img className="h-full w-full" src={banner} alt="" />
      </figure>
      <div className="card-body hover:shadow-lg shadow transition duration-500">
        <h2 className="card-title text-xl">{adventure.title}</h2>
        <ul className="text-gray-500">
            {
                adventure.ecoFriendlyFeatures.map((feature,idx) => <li key={idx}>{feature}</li>)
            }
        </ul>
        <div className="card-actions">
          <Link
            to={`/adventure/details/${adventure.id}`}
            className="px-4 md:px-8 py-1 md:py-3 cursor-pointer border border-[#203F3F] text-white bg-[#203F3F] font-medium hover:bg-white hover:text-[#203F3F] transition"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
    );
};

export default AdventureCard;