import { useEffect, useState } from "react";
import AdventureCard from "./AdventureCard";

const Adventures = () => {
  const [adventures, setAdventures] = useState([]);
  useEffect(() => {
    fetch("/adventures.json")
      .then((res) => res.json())
      .then((data) => setAdventures(data));
  }, []);

  return (
    <div className="">
      <div className="my-4 md:my-14">
        <p className="text-center uppercase text-sm font-medium text-purple-500">Experience</p>
        <h2 className="text-4xl font-bold text-center">
          Explore Adventures Experience
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {adventures.map((adventure) => (
          <AdventureCard
            key={adventure.id}
            adventure={adventure}
          ></AdventureCard>
        ))}
      </div>
    </div>
  );
};

export default Adventures;
