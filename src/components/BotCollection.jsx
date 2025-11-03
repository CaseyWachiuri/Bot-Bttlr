import { useState, useEffect } from 'react';
import BotCard from "./BotCard";

function BotCollection() {
  const [bots, setBots] = useState([]);

  // Initial fetch on page render
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8001/bots");
      const data = await res.json();
      setBots(data);
    };

    fetchData();
  },[])

  // Iteration through the array to create each bot card element
  const botList = bots.map((item) => <BotCard bot={item} />);

  if (!botList) return <div>Loading BotList...</div>

  return (
    <>
      <div className="flex flex-wrap justify-between ">
        { botList }
      </div>
    </>
  );
}

export default BotCollection;
