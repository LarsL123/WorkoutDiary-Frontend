import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

//TODO: Sorround <table> with  <div class="table-responsive"> ... </div> to make the tbale responsive on phone: https://www.w3schools.com/bootstrap/bootstrap_ref_css_tables.asp

const Table = ({ columns, data, widths }) => {
  console.log(data);
  return (
    //Potentially table-sm ??
    <table className="table table-bordered">
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} widths={widths} />
    </table>
  );
};

export default Table;
