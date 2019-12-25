//Need new name!
import React, { useContext } from "react";
import { WorkoutDataContext } from "../../common/react/workoutDataContext";
import pluss from "../../icons/add.png";

const NewWorkout = () => {
  const { createWorkout } = useContext(WorkoutDataContext);

  const onClick = () => {
    createWorkout(new Date().toISOString());
  };

  return (
    <button
      className="btn btn-info"
      type="button"
      style={{ width: "40px", height: "40px", padding: "0" }}
      onClick={onClick}
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
