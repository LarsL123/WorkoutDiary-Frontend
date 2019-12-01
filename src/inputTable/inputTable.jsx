import React, { useState, useEffect } from "react";
import Table from "./table";
import DropRight from "./components/dropRight";
import NewWorkout from "./components/newWorkout";
import getRows from "./data/getWorkouts.js";
import deleteWorkout from "./data/deleteWorkout";
import createWorkout from "./data/createWorkout";
import { DeleteContext } from "../common/react/deleteContext";
import { AddContext } from "../common/react/addContext";
import { InputDataContext } from "../common/react/inputDataContext";
import DateDisplay from "./components/dateDisplay";

const InputTable = () => {
  const [columns, setColumns] = useState(null);
  const [data, updateData] = useState([]);

  const onDelete = _id => {
    if (!data) return;

    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element._id === _id) {
        data.splice(i, 1);
        break;
      }
    }

    updateData([...data]);
    console.log(data);
    deleteWorkout(_id);
  };

  const addNew = async () => {
    const _id = await createWorkout();
    data.unshift({
      _id,
      date: "I dag",
      description: " ",
      type: " ",
      zones: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      }
    });

    updateData([...data]);
  };

  useEffect(() => {
    let cols = [
      {
        key: "delete",
        content: columnData => <DropRight col={columnData}></DropRight>,
        headerContent: column => <NewWorkout></NewWorkout>
      },
      {
        key: "date",
        content: column => <DateDisplay col={column}></DateDisplay>,
        label: "date"
      },
      { path: "description", label: "Description" },
      { path: "type", label: "Activity" },
      { path: "zones.1", label: "1" },
      { path: "zones.2", label: "2" },
      { path: "zones.3", label: "3" },
      { path: "zones.4", label: "4" },
      { path: "zones.5", label: "5" }
    ];

    setColumns(cols);
  }, []);

  useEffect(() => {
    async function fetchData() {
      updateData(await getRows());
    }
    fetchData();
    console.log("Fetched data: ");
  }, []);

  return (
    //Please refactor this in next dev-session
    <InputDataContext.Provider value={{ data, updateData }}>
      <DeleteContext.Provider value={onDelete}>
        <AddContext.Provider value={addNew}>
          <Table
            columns={columns}
            data={data}
            widths={["5%", "10%", "40%", "20%", "5%", "5%", "5%", "5%", "5%"]}
          />
        </AddContext.Provider>
      </DeleteContext.Provider>
    </InputDataContext.Provider>
  );
};

export default InputTable;
