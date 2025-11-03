import { useState, useEffect } from 'react';
import BotCard from "./BotCard";

function BotCollection({bots}) {

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
