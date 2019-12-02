import React from "react";
import _ from "lodash";
import styles from "./table.module.css";
import updateWorkout from "../data/saveWorkout";

const renderCell = (item, column) => {
  if (column.content) {
    return column.content(item);
  }

  return _.get(item, column.path);
};

const createKey = (item, column) => {
  return item._id + (column.path || column.key);
};

let changeTimer = false;
let lastInstance = null;

const onChange = function({ _targetInst, target }) {
  if (changeTimer !== false && _targetInst === lastInstance) {
    clearTimeout(changeTimer);
  }
  lastInstance = _targetInst;
  changeTimer = setTimeout(function() {
    updateWorkout(target.parentElement);
    changeTimer = false;
  }, 3000);
};

const TableBody = props => {
  const { data, columns, widths } = props;
  return (
    <tbody>
      {columns
        ? data.map(item => (
            <tr key={item._id} _id={item._id}>
              {columns.map((column, index) => (
                <td
                  key={createKey(item, column)}
                  className={styles.td}
                  style={{ width: widths[index], maxWidth: "200px" }}
                  contentEditable={true}
                  onInput={onChange}
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
