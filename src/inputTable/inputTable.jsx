import React, { useState, useEffect } from "react";
import Table from "./table";
import getRows from "./data/serverToView.js";

const InputTable = () => {
  const [columns, setColumns] = useState(null);
  const [data, updateData] = useState(undefined);

  //Create columns:
  useEffect(() => {
    let cols = [
      { path: "date", label: "Date" },
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

  const rows = data || [];

  return (
    <Table
      columns={columns}
      data={rows}
      widths={["15%", "40%", "20%", "5%", "5%", "5%", "5%", "5%"]}
    />
  );
};

export default InputTable;

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
