import React, { useState, useEffect } from "react";
import Table from "./table";

const InputTable = props => {
  const [columns, setColumns] = useState(null);

  //Create columns:
  useEffect(() => {
    let newColumns = [
      { path: "date", label: "Date" },
      { path: "day", label: "Day" },
      { path: "description", label: "Description" },
      { path: "activity", label: "Activity" },
      { path: "zone1", label: "1" },
      { path: "zone2", label: "2" },
      { path: "zone3", label: "3" },
      { path: "zone4", label: "4" },
      { path: "zone5", label: "5" }
    ];

    // const deleteColumn = {
    //   key: "delete",
    //   content: movie => (
    //     <button
    //       onClick={() => props.onDelete(movie)}
    //       className="btn btn-danger btn-sm"
    //     >
    //       Delete
    //     </button>
    //   )
    // };

    //   const user = auth.getCurrentUser();
    //   if (user && user.isAdmin) {
    //     newColumns.push(deleteColumn);
    //   }
    setColumns(newColumns);
  }, []);

  //const { data  } = props;
  const obj = {
    //test object
    date: "05-6-2019",
    day: "mon",
    description: "There may be alot of text hereasd aasdas d asd asdasd asdada",
    activity: (
      <select className="custom-select">
        <option value="Orientering">orientering</option>
        <option value="Løping">løping</option>
        <option value="Ski">ski</option>
        <option value="Styrke">styrke</option>
      </select>
    ),
    zone1: "123",
    zone2: "123",
    zone3: "123",
    zone4: "123",
    zone5: "123",
    width: {
      date: 10,
      day: 10,
      description: 10,
      activity: 10,
      zone1: 10,
      zone2: 10,
      zone3: 10,
      zone4: 10,
      zone5: 10
    }
  };
  const data = [
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj,
    obj
  ];

  const widths = ["10%", "5%", "40%", "20%", "5%", "5%", "5%", "5%", "5%"];

  return <Table columns={columns} data={data} widths={widths} />;
};

export default InputTable;
