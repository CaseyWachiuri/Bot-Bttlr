// Personal botarmy

// uses state to hold the value of my army
function MyBotArmy({ bot }) {

  // Destructuring bot data
  const {id, name, health, damage, armor, bot_class, catchphrase, avatar_url} = bot;

  function handleClick() {
    console.log("You lemme go from your army: ", id);
  }

  // return ();
}

export default MyBotArmy;
