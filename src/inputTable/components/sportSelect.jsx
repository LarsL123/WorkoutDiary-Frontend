import React, { useState, useEffect } from "react";
import sportsService from "../../common/services/sportsService";

const SportSelect = ({ column }) => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    async function fetch() {
      setSports(await sportsService.getSports());
    }
    fetch();
  });

  console.log(sports);

  return (
    <div contentEditable={false}>
      <select className="custom-select" id="inputGroupSelect01" value={column.sport._id}>
        {sports.map((sport) => (
          <option key={column._id + sport._id} value={sport._id}>{sport.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SportSelect;
