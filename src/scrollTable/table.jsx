import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ columns, data, widths }) => {
  //Keeping track of unexpected renders during development.
  console.log("Rerendering table with: ", data);
  return (
    //Potentially table-sm ??
    <table className="table table-bordered">
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} widths={widths} />
    </table>
  );
};

export default Table;
