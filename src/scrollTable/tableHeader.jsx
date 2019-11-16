import React from "react";

// const raiseSort = (path, sortColumn, onSort) => {
//   if (sortColumn.path === path) {
//     sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
//   } else {
//     sortColumn.path = path;
//     sortColumn.order = "asc";
//   }
//   onSort(sortColumn);
// };

const TableHeader = props => {
  const {  columns } = props;
  return (
    <thead>
      <tr>
        {columns
          ? columns.map(column => (
              <th
                className="clickable"
                key={column.path || column.key}
               // onClick={() => raiseSort(column.path, sortColumn, onSort)}
                scope="col"
              >
                {column.label} 
              </th>
            ))
          : null}
      </tr>
    </thead>
  );
};

export default TableHeader;
