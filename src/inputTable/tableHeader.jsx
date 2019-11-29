import React from "react";
import styles from "./customTable.module.css";

const TableHeader = props => {
  const { columns } = props;
  return (
    <thead>
      <tr>
        {columns
          ? columns.map(column => (
              <th
                className={styles.th}
                style={{
                  top: -1
                }}
                key={column.path || column.key}
                scope="col"
              >
                {column.label || column.headerContent(column)}
              </th>
            ))
          : null}
      </tr>
    </thead>
  );
};

export default TableHeader;
