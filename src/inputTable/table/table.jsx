import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ columns, data, widths }) => {
  console.log("Rerendering table with: ", data); //Keeping track of unexpected renders during development.
  return (
    <table className="table-sm table-bordered">
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} widths={widths} />
    </table>
  );
};

export default Table;
