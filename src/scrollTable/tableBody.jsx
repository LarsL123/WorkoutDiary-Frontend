import React from "react";
import _ from "lodash";
import styles from "./customTable.module.css";

const renderCell = (item, column) => {
  if (column.content) {
    return column.content(item);
  }

  return _.get(item, column.path);
};

const createKey = (item, column) => {
  return item._id + (column.path || column.key);
};

const TableBody = props => {
  const { data, columns, widths } = props;
  return (
    <tbody>
      {columns
        ? data.map(item => (
            <tr key={item._id}>
              {columns.map((column, index) => (
                <td
                  key={createKey(item, column)}
                  className={styles.td}
                  style={{ width: widths[index], maxWidth: "100px" }}
                  contentEditable={true}
                >
                  {renderCell(item, column)}
                </td>
              ))}
            </tr>
          ))
        : null}
    </tbody>
  );
};

export default TableBody;
