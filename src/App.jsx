import { useState, useEffect } from 'react'
import Header from "./components/Header";
import BotCollection from "./components/BotCollection";
import MyBotArmy from "./components/MyBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [myArmy, setMyArmy] = useState([]);

  // Initial fetch on page render
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8001/bots");
      const data = await res.json();
      setBots(data);
    };

    fetchData();
  },[]) //Check to see if it re-renders when the army value is deleted

  // Add bot to personal army
  function handleEnlist(bot) {
    const isPresent = myArmy.find(item => item.id === bot.id);
    if (!isPresent) {
      setMyArmy(myArmy => [...myArmy, bot]);
    }
  }

  // Remove from Army
  function handleHonDischarge(bot){
    setMyArmy(
      myArmy.filter(item => item.id !== bot.id)
    );
  }

  // Delete a Bot from the database
  function handleDishonDischarge(botId) {
    console.log("Delete permanent: ", botId);
    //setMyArmy(
  }

  return (
    <>
      <Header />
      {myArmy && <MyBotArmy bot={ myArmy }  onRelease={handleHonDischarge} /> }
      <BotCollection bots={bots} onEnlist={handleEnlist} onRelease={handleDishonDischarge} />
    </>
  )
}

export default App
