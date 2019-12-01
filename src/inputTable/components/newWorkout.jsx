//Need new name!
import React, { useContext } from "react";
import { AddContext } from "../../common/react/addContext";
import pluss from "../../icons/add.png";

const NewWorkout = () => {
  const createWorkout = useContext(AddContext);

  return (
    <button
      className="btn btn-info"
      type="button"
      style={{ width: "40px", height: "40px", padding: "0" }}
      onClick={createWorkout}
    >
      <img
        src={pluss}
        style={{ width: "38px", height: "38px", verticalAlign: "top" }}
        alt="Add"
      ></img>
    </button>
  );
};

export default NewWorkout;
