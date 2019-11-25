import React, { useState, useEffect } from "react";
import Table from "./table";
import getRows from "./data/serverToView.js";

const useFetch = url => {
  const [data, updateData] = useState(undefined);

  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() {
      const response = await getRows(url);

      updateData(response);
    }
    fetchData();
  }, [url]);

  return data;
}; //Fetching hook. Placeholder before implementing the real fetching hooks

const InputTable = props => {
  const [columns, setColumns] = useState(null);

  const data = useFetch(0) || [];

  //Create columns:
  useEffect(() => {
    let newColumns = [
      { path: "date", label: "Date" },
      { path: "day", label: "Day" },
      { path: "description", label: "Description" },
      { path: "type", label: "Activity" },
      { path: "zones.1", label: "1" },
      { path: "zones.2", label: "2" },
      { path: "zones.3", label: "3" },
      { path: "zones.4", label: "4" },
      { path: "zones.5", label: "5" }
    ];
    {
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
    }
    setColumns(newColumns);
  }, []);

  return (
    <Table
      columns={columns}
      data={data}
      widths={["10%", "5%", "40%", "20%", "5%", "5%", "5%", "5%", "5%"]}
    />
  );
};

export default InputTable;

// const [height, setHeight] = useState(0);

// useEffect(() => {
//   const handleScroll = () => {
//     setHeight(window.scrollY);
//     console.log(window.scrollY);
//   };

//   window.addEventListener("scroll", handleScroll, true);
//   return () => {
//     window.removeEventListener("scroll", handleScroll); //Confirm that it removes
//   };
// }, []);
