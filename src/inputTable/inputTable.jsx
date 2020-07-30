//React and jsx
import React, { useState, useEffect } from "react";
import Table from "./table/table";
import columns, { widths } from "./table/tableColumns";
//Data
import getWorkouts from "./data/getWorkouts.js";
import createWorkout from "./data/createWorkout";
import deleteWorkout from "./data/deleteWorkout";
import { WorkoutDataContext } from "../common/react/workoutDataContext";

const InputTable = ({ user }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setData(await getWorkouts());
    }
    fetchData();
  }, []);

  const create = (date) => {
    createWorkout(data, setData, date);
  };

  const del = (_id) => {
    deleteWorkout(data, setData, _id);
  };

  if (!user) return <h4>You have to be logged in to se your input data</h4>;

  return (
    <WorkoutDataContext.Provider
      value={{ data, setData, createWorkout: create, deleteWorkout: del }}
    >
      <Table columns={columns} data={data} widths={widths} />
    </WorkoutDataContext.Provider>
  );
};

export default InputTable;
