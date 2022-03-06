import { useState } from "react";
import Filter from "./components/Filter";
import Home from "./components/Home";

import InputPlayers from "./components/InputPlayers";
import Player from "./components/Player";
function App() {
  const data = [
    {
      name: "LaMarcus Aldridge",
      yearsPro: 14,
      position: "Center",
    },
    {
      name: "Marco Belinelli",
      yearsPro: 13,
      position: "Guard",
    },
    {
      name: "DeMar DeRozan",
      yearsPro: 11,
      position: "Forward",
    },
  ];
  const [players, setPlayers] = useState(data);
  const [playerPosition, setPosition] = useState('');
  const [flag, setFlag] = useState('false');
  
  const addPlayer = (newPlayer) => {
    setPlayers((prevplayers) => {
      return [...prevplayers, newPlayer];
    });
  };
  
  function filterPlayer(posi) {
    setPosition(posi);
    posi === "All" ? setFlag('false') : setFlag('true');
  }

  //const dup = players.filter((player) => player.position === playerPosition);

  return (
    <div>
      <InputPlayers onAddPlayer={addPlayer} />
      <Home info={players} />
      <Filter onSelectDD={filterPlayer} />
      {/* <Player info={players} /> */}

     
       {
            flag ==='true' ? 
            <p>{ players.map((playerData) => (playerData.position === playerPosition 
              ? (<Player info={playerData}/>) : ''))}</p> 
              : <p>{ players.map((playerData, index) => { return <Player info={playerData} />;})} </p>
        }
        
    </div>
  );
}
export default App;
