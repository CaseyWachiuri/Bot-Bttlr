
function BotCard({ bot, handleClick, children }) {

  // Destructuring the bot data
  const { name, health, damage, armor, bot_class, catchphrase, avatar_url} = bot;


  return (
    <>
      {/* Styling for card */}
      <div className="relative ml-2 mr-2 mt-2 max-w-3xs rounded overflow-hidden shadow-lg" onClick={() => {handleClick({ bot })} }> {/* Add onClick handler */}
        { children }
        <img className="w-full" src={avatar_url} alt="Example botcard. Image goes here" />
        <div className="px-6 py-4 ">
          <div className="font-bold text-sm mb-2 ">{ name }</div>
          <p className="text-gray-700 text-xs">{ catchphrase }</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2">{ health }</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2">{ damage }</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2">{ armor }</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2">{ bot_class }</span>
        </div>
      </div>
    </>
  );
}

export default BotCard;
