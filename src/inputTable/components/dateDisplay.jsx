import React, { useContext } from "react";
import updateWorkout from "../data/saveWorkout";
import { InputDataContext } from "../../common/react/inputDataContext";

const DateDisplay = ({ col }) => {
  const { date } = col;
  const { data, updateData } = useContext(InputDataContext);

  const onChange = event => {
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
      ></input>
    </div>
  );
};

export default DateDisplay;

function formatDate(date) {
  return date.substring(0, 10);
}
