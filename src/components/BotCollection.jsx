import { useState, useEffect } from 'react';

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

  return (
    <>
      {/* Styling for card */}
      <div className="ml-2 mt-2 max-w-3xs rounded overflow-hidden shadow-lg" > {/* Add onClick handler */}
        <img className="w-full" src="null" alt="Example botcard. Image goes here" />
        <div className="px-6 py-4 ">
          <div className="font-bold text-sm mb-2 ">BotName</div>
          <p className="text-gray-700 text-xs">Bot Catch Phrase</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2">Health</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2">Damage</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2">Armor</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2">Bot Class</span>
        </div>
      </div>
    </>
  );
}

export default BotCollection;
