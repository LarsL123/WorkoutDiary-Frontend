import React, { useContext } from "react";
import { WorkoutDataContext } from "../../common/react/workoutDataContext";

const DropRight = ({ col }) => {
  const { createWorkout, deleteWorkout } = useContext(WorkoutDataContext);

  const onNew = () => {
    createWorkout(new Date(col.date).toISOString());
  };

  const onDelete = () => {
    deleteWorkout(col._id);
  };

  return (
    <div className="dropright" contentEditable={false}>
      <button
        className="btn btn-info dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{
          width: "40px",
          height: "40px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      ></button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div className="dropdown-item" onClick={onNew}>
          Insert New
        </div>
        <div className="dropdown-divider"></div>
        <div className="dropdown-item" onClick={onDelete}>
          Delete: &nbsp;&nbsp;&nbsp; <i className="far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default DropRight;
