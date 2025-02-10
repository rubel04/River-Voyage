import { useEffect, useState } from "react";
import AdventureCard from "./AdventureCard";

const Adventures = () => {
    const [adventures,setAdventures] = useState([]);
    useEffect(()=>{
        fetch('/adventures.json')
        .then(res => res.json())
        .then(data => setAdventures(data))
    },[])

  return (
   <div className="">
    <h2 className="text-4xl font-bold text-center my-4 md:my-14">Adventures Experience</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adventures.map(adventure => <AdventureCard key={adventure.id} adventure={adventure}></AdventureCard>)
        }
    </div>
   </div>
  );
};

export default Adventures;
