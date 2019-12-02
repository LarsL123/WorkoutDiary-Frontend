import React, { useContext } from "react";
import updateWorkout from "../data/saveWorkout";
import { WorkoutDataContext } from "../../common/react/workoutDataContext";

const DateDisplay = ({ col }) => {
  const { date } = col;
  const { data, updateData } = useContext(WorkoutDataContext);

  const onChange = event => {
    console.log("date: ", event.target.value);
    data.forEach(element => {
      if (element._id === col._id) {
        element.date = new Date(event.target.value).toISOString();
      }
    });

    updateData([...data]);
    updateWorkout(event.target.closest("tr"));
  };

  return (
    <div contentEditable={false}>
      <input
        style={{ border: "none" }}
        type="date"
        onInput={event => {
          event.stopPropagation(); //Prevent parents onInput beeing called
        }}
        onChange={onChange}
        value={formatDate(date)}
        required="required"
      ></input>
    </div>
  );
};

export default DateDisplay;

function formatDate(date) {
  return date.substring(0, 10);
}
