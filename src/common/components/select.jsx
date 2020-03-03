import React from "react";

const Selector = ({ listOption,setSelected}) => {

  const handleChange = e => {
     setSelected(listOption[e.target.value].obj );
  };

  return (
    <select onChange={handleChange} className="custom-select">
      {listOption.map((option, index) => (
        <option key={index} value={index}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Selector;
