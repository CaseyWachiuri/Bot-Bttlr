import { useState, useEffect } from 'react'
import Header from "./components/Header";
import BotCollection from "./components/BotCollection";

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
  },[])

  // Add bot to personal army
  function handleAddToArmy({bot}) {
    setMyArmy(
      ...myArmy,
      {bot}
    )
  }

  // Remove from Army
  function handleRemoveFromArmy({botId}){
    setMyArmy(
      myArmy.filter(item => item.id !== botId)
    );
  }

  // Delete a Bot from the database
  function deleteBot({bot}) {
    console.log(bot);
  }

  return (
    <>
      <Header />
      <BotCollection bots={bots} />
    </>
  )
}

export default App
