//React and jsx
import React, { useState, useEffect } from "react";
import Table from "./table/table";
import DropRight from "./components/dropRight";
import NewWorkout from "./components/newWorkout";
import DateDisplay from "./components/dateDisplay";
//Data
import getWorkouts from "./data/getWorkouts.js";
import createWorkout from "./data/createWorkout";
import deleteWorkout from "./data/deleteWorkout";
import { WorkoutDataContext } from "../common/react/workoutDataContext";

const InputTable = ({ user }) => {
  const [columns, setColumns] = useState(null);
  const [data, setData] = useState([]);

  const create = (date) => {
    createWorkout(data, setData, date);
  };

  const del = (_id) => {
    deleteWorkout(data, setData, _id);
  };

  useEffect(() => {
    async function fetchData() {
      setData(await getWorkouts());
    }
    fetchData();
  }, []);

  useEffect(() => {
    let cols = [
      {
        key: "delete",
        content: (columnData) => <DropRight col={columnData}></DropRight>,
        headerContent: () => <NewWorkout></NewWorkout>,
      },
      {
        key: "date",
        content: (column) => <DateDisplay col={column}></DateDisplay>,
        label: "Date",
      },
      { path: "description", label: "Description" },
      { path: "type", label: "Activity" },
      { path: "zones.1", label: "1" },
      { path: "zones.2", label: "2" },
      { path: "zones.3", label: "3" },
      { path: "zones.4", label: "4" },
      { path: "zones.5", label: "5" },
    ];

    setColumns(cols);
  }, []);

  if (!user) return <h4>You have to be logged in to se your input data</h4>;
  return (
    <WorkoutDataContext.Provider
      value={{ data, setData, createWorkout: create, deleteWorkout: del }}
    >
      <Table
        columns={columns}
        data={data}
        widths={["5%", "10%", "40%", "20%", "5%", "5%", "5%", "5%", "5%"]}
      />
    </WorkoutDataContext.Provider>
  );
};

export default InputTable;
