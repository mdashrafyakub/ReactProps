import { useState } from "react";

function InputPlayers(props) {
  const [playerDetails, setPlayerDetails] = useState({
    name: "",
    yearsPro: "",
    position: "",
  });
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setPlayerDetails((prevPlayer) => {
      return { ...prevPlayer, [name]: value };
    });
  }

  const handleClick = (event) => {
    props.onAddPlayer(playerDetails);
    setPlayerDetails({
      name: "",
      yearsPro: "",
      position: "",
    });
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleClick}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={playerDetails.name}
          onChange={handleChange}
        />
        <label>Experience</label>
        <input
          type="number"
          name="yearsPro"
          value={playerDetails.yearsPro}
          onChange={handleChange}
        />
        <label>Position</label>
        {/* <select
          name="position"
          value={playerDetails.position}
          onChange={handleChange}
        >
          <option value="Center">Center</option>
          <option value="Guard">Guard</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Audi">Audi</option>
        </select> */}
        <input
          type="text"
          name="position"
          value={playerDetails.position}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default InputPlayers;
