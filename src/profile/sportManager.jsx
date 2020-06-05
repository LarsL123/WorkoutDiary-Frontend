import React, { useState } from "react";

const SportManager = () => {
  const [sportName, setSportName] = useState("");

  const onSubmit = () => {
      //Call from sportService(sportName)
  };

  const onChange = (event) => {
    setSportName(event.target.value);
  };
  return (
    <ul class="list-group">
      <li class="list-group-item">
        <div>
          Cras justo odio{" "}
          <button type="button" className="btn-sm btn-danger float-right">
            Delete
          </button>
        </div>
      </li>
      <li class="list-group-item">
        <form>
          <input type="text" value={sportName} onChange={onChange} />
          <button type="submit" className="btn-sm btn-success float-right">
            Add
          </button>
        </form>
      </li>
    </ul>
  );
};

export default SportManager;
