import BotCard from "./BotCard";

// uses state to hold the value of my army
function MyBotArmy({ bot, onRelease }) {

  function handleClick(bot) {
    onRelease(bot);
  }

  const botList = bot.map((item) => <BotCard key={item.id} handleClick={() => handleClick(item)} bot={item} />);

  if (!botList) return <div>Loading BotList...</div>

  return (
    <>
      <div className="flex flex-wrap justify-between ">
        { botList }
      </div>
    </>
  );
}

export default MyBotArmy;
