import { MdOutlineDelete } from "react-icons/md";
import BotCard from "./BotCard";

function BotCollection({bots, onEnlist, onRelease}) {
  function handleDelete(e, id) {
    // Stop propogation since button is in div
    e.stopPropagation();
    onRelease(id);
  }

  function handleEnlist(bot) {
    onEnlist(bot);
  }
  console.log("issue here");

  // Iteration through the array to create each bot card element
  const botList = bots.map((item) => {
    return (
      <BotCard key={item.id} handleClick={() => {handleEnlist(item)}} bot={item} >
        <MdOutlineDelete className="text-gray-300 hover:text-red-600 absolute top-0 right-0 size-6" onClick={(e) => handleDelete(e, item.id ) } />
      </ BotCard>
  )})

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
