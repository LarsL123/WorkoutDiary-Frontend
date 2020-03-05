import React from "react";

const Selector = ({ listOption,selectedSetter}) => {

  const handleSelect = e => {
    selectedSetter(listOption[e.target.value].obj );
  };

  return (
    <select onChange={handleSelect} className="custom-select">
      {listOption.map((option, index) => (
        <option key={index} value={index}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Selector;
