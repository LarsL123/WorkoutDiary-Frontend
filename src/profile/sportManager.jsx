import React, { useState } from "react";
import {useSports} from "../common/react/useSports";

const SportManager = () => {
  const [sports, addSport, deleteSport] = useSports();
  const [newSportName, setSportName] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (newSportName.length === 0) return;
    await addSport(newSportName);
  };

  const onDelete = async (event) => {
    const idToDelete = event.target.getAttribute("sport");
    await deleteSport(idToDelete);
  };

  const onChange = (event) => {
    setSportName(event.target.value);
  };

  return (
    <React.Fragment>
      <h6>Edit your sports here: </h6>
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
    </React.Fragment>
  );
};

export default SportManager;
