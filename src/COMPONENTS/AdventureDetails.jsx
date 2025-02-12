import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AdventureDetails = () => {
  const adventure = useLoaderData();
  const {
    title,
    image,
    category,
    shortDescription,
    adventureCost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = adventure;

  return (
    <div className="mt-10">
      <div className="flex space-x-4 items-center">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-lg font-semibold">
          Adventure Cost:{" "}
          <span className="text-gray-400 text-base">${adventureCost}</span>
        </p>
      </div>
      <div>
        <img
          className="w-full md:h-[500px] object-cover my-4"
          src={image}
          alt={`${title} img`}
        />
      </div>
      <p className="text-lg font-semibold mt-4 mb-2">
        Description:{" "}
        <span className="text-gray-400 text-base">{shortDescription}</span>
      </p>
      <div className="space-y-4">
        <div>
          <p className="text-lg font-semibold">
            Category:{" "}
            <span className="text-gray-400 text-base">{category}</span>
          </p>
          <p className="text-lg font-semibold">
            Location:{" "}
            <span className="text-gray-400 text-base">{location}</span>
          </p>
          <p className="text-lg font-semibold">
            Duration:{" "}
            <span className="text-gray-400 text-base">{duration}</span>
          </p>
          <p className="text-lg font-semibold">
            Adventure Level:{" "}
            <span className="text-gray-400 text-base">{adventureLevel}</span>
          </p>
          <p className="text-lg font-semibold">
            Max Group Size:{" "}
            <span className="text-gray-400 text-base">{maxGroupSize}</span>
          </p>
          <p className="text-lg font-semibold">
            Booking Availabillty:{" "}
            <span className="text-gray-400 text-base">
              {bookingAvailability}
            </span>
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Include Items:</h4>
          <ul>
            {includedItems.map((item, idx) => (
              <li className="text-gray-400 text-base font-semibold" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Eco-friendly Feature:</h4>
          <ul>
            {ecoFriendlyFeatures.map((feature, idx) => (
              <li className="text-gray-400 text-base font-semibold" key={idx}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Special Instruction:</h4>
          <ul>
            {specialInstructions.map((instruction, idx) => (
              <li className="text-gray-400 text-base font-semibold" key={idx}>
                {instruction}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={() => {
          const currentHour = new Date().getHours()

          if (currentHour >= 10 && currentHour < 20) {
            window.open("https://meet.google.com/", "_blank");
          } else {
            Swal.fire({
              text: "Experts are available from 10:00 AM to 8:00 PM.",
              icon: "warning",
            });
          }
        }}
        className="px-4 block m-auto mt-8 md:px-8 py-1 md:py-3 font-medium cursor-pointer  hover:bg-white hover:text-purple-500 bg-purple-500 text-white transition duration-300"
      >
        Talk With Expert
      </button>
    </div>
  );
};

export default AdventureDetails;
