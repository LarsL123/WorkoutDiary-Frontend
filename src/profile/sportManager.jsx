import React, { useState, useEffect } from "react";
import sportService from "../common/services/sportsService";

const SportManager = () => {
  const [sports, setSports] = useState([]);
  const [newSportName, setSportName] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (newSportName.length === 0) return;

    const originalSports = sports;

    setSports([...sports, { name: newSportName, _id: `Temp for: ${newSportName}` }]);

    try {
      await sportService.addSport(newSportName);
    } catch (ex) {
      setSports(originalSports);
    }
  };

  const onDelete = async (event) => {
    const idToDelete = event.target.getAttribute("sport");
    const originalSports = sports;

    setSports(
      sports.filter((sport) => {
        return sport._id !== idToDelete;
      })
    );

    try {
      await sportService.deleteSport(idToDelete);
    } catch (ex) {
      setSports(originalSports);
    }
  };

  const onChange = (event) => {
    setSportName(event.target.value);
  };

  useEffect(() => {
      console.log(sports);
    (async () => {
      const sportsFromServer = (await sportService.getSports()) || [];
      console.log(sportsFromServer)
      setSports(sportsFromServer);
    })();
  }, [sports]);

  console.log("sports = " + sports);

  if (!sports) return <h4>Loading sports...</h4>;

  return (
    <ul className="list-group">
      {sports.map((sport) => (
        <li className="list-group-item" key={sport._id}>
          <div>
            {sport.name}
            <button
              type="button"
              className="btn-sm btn-danger float-right"
              onClick={onDelete}
              sport={sport._id}
            >
              Delete
            </button>
          </div>
        </li>
      ))}

      <li className="list-group-item" key="Add item">
        <form onSubmit={onSubmit}>
          <input type="text" value={newSportName} onChange={onChange} />
          <button type="submit" className="btn-sm btn-success float-right">
            Add
          </button>
        </form>
      </li>
    </ul>
  );
};

export default SportManager;
