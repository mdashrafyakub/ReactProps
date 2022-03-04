import React from "react";
import Filter from "./Filter";

// Destructuring props in the function arguments.
// const Player = ({ allPlayers, name, yearsPro, position, removePlayer }) => {
const Player = (props) => {
  // const filterPlayer = (pos) => {
  //   const filteredPlayers = players.filter((player) => player.position !== pos);
  //   console.log(filteredPlayers);
  // };
  // const handleRemove = () => {
  //   const filteredPlayers = allPlayers.filter((player) => player.name !== name);
  //   removePlayer(filteredPlayers);
  // };

  return (
    <div>
      {props.info.name} ({props.info.position}) | Years pro:{" "}
      {props.info.yearsPro}
    </div>
  );
  // console.log(typeof props.info);

  // return <div>{props.info[1].name}</div>;
};

export default Player;
