import React, { useState, useEffect } from "react";
import sportsService from "../../common/services/sportsService";

const SportSelect = ({ column }) => {
  const [sports, setSports] = useState([]);
  const [selectedSport, setSelectedSport] = useState(column.sport);

  useEffect(() => { //Change to custom hook.
    async function fetch() {
      setSports(await sportsService.getSports());
    }
    fetch();
  });

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
        <option key={"NoSport_"  + column._id} value={""}>
          No sport
        </option>
      </select>
    </div>
  );
};

export default SportSelect;
