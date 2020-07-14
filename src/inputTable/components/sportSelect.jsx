import React, { useState } from "react";
import { useSports } from "../../common/react/useSports";

const NO_SPORT_VALUE = "";

const SportSelect = ({ column }) => {
  const [sports] = useSports();
  const [selectedSport, setSelectedSport] = useState(
    column.sport ? column.sport._id : NO_SPORT_VALUE
  );

  let displayedSport = NO_SPORT_VALUE;
  if (selectedSport)
    if (sports.some((sport) => sport._id === selectedSport))
      displayedSport = selectedSport;

  return (
    <div contentEditable={false}>
      <select
        className="custom-select"
        id="inputGroupSelect01"
        value={displayedSport}
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

        <option key={"NoSport_" + column._id} value={NO_SPORT_VALUE}>
          No sport
        </option>
      </select>
    </div>
  );
};

export default SportSelect;
