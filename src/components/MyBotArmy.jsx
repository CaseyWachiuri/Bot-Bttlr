import BotCard from "./BotCard";
import Header from "./Header";

// uses state to hold the value of my army
function MyBotArmy({ bot, onRelease }) {

  function handleClick(bot) {
    onRelease(bot);
  }

  const botList = bot.map((item) => <BotCard key={item.id} handleClick={() => handleClick(item)} bot={item} />);

  if (!botList) return <div>Loading BotList...</div>

  return (
    <>
      <Header text={"My Bot Army"} />
      <div className="flex flex-wrap justify-between ">
        { botList }
      </div>
    </>
  );
}

export default MyBotArmy;
