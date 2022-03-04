import React from "react";

const Filter = (props) => {
  const handleDropDown = (event) => {
    props.onSelectDD(event.target.value);
  };
  return (
    <div className="position-filter">
      <div className="position-filter__control">
        <label>Filter Position</label>
        <select onChange={handleDropDown}>
          <option value="Center">Center</option>
          <option value="Guard">Guard</option>
          <option value="Forward">Forward</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
