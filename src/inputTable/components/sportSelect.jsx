import React, { useState } from "react";
import { useSports } from "../../common/react/useSports";

const SportSelect = ({ column }) => {
  const [sports] = useSports();
  const [selectedSport, setSelectedSport] = useState(column.sport);

  console.log(sports);

  return (
    <div contentEditable={false}>
      <select
        className="custom-select"
        id="inputGroupSelect01"
        value={selectedSport ? selectedSport._id : ""}
        onChange={(event) => {
          setSelectedSport(event.target.value);
        }}
        onInput={(event) => {
          event.stopPropagation();
          const targetElement = event.target.parentElement.parentElement;
          targetElement.dispatchEvent(new Event("input", { bubbles: true }));
        }}
      >
        {sports.map((sport) => (
          <option key={column._id + sport._id} value={sport._id}>
            {sport.name}
          </option>
        ))}
        <option key={"NoSport_" + column._id} value={""}>
          No sport
        </option>
      </select>
    </div>
  );
};

export default SportSelect;
