import { Link } from "react-router-dom";

const AdventureCard = (props) => {
    const {adventure} = props || {};
    return (
        <div className="card rounded-none bg-gray-900 hover:shadow shadow-gray-700 transition-transform duration-700 hover:scale-105">
      <figure className="h-full ">
        <img className="h-[200px] md:h-[300px] w-full" src={adventure.image} alt="" />
      </figure>
      <div className="card-body  transition duration-500">
        <h2 className="card-title text-xl">{adventure.title}</h2>
        <ul className="text-gray-200">
            {
                adventure.ecoFriendlyFeatures.map((feature,idx) => <li key={idx}>{feature}</li>)
            }
        </ul>
        <div className="card-actions mt-4">
          <Link
            to={`/adventure/details/${adventure.id}`}
            className="px-4 md:px-8 py-1 md:py-3 font-medium cursor-pointer  bg-white text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
    );
};

export default AdventureCard;