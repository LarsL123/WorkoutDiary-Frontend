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
let lastInstanceId = null;

const onChange = function ({ target }) {
  const _id = target.parentElement.getAttribute("_id");

  if (changeTimer !== false && _id === lastInstanceId) {
    clearTimeout(changeTimer);
  }
  lastInstanceId = _id;
  changeTimer = setTimeout(function () {
    updateWorkout(target.parentElement);
    changeTimer = false;
  }, 3000);
};

const TableBody = (props) => {
  const { data, columns, widths } = props;
  return (
    <tbody>
      {columns
        ? data.map((item) => (
            <tr key={item._id} _id={item._id}>
              {columns.map((column, index) => (
                <td
                  key={createKey(item, column)}
                  className={styles.td}
                  style={{ width: widths[index], maxWidth: "200px" }}
                  contentEditable={true}
                  onInput={onChange}
                  suppressContentEditableWarning={true} //React is warning about changing the ts's childeren without triggering rerender. Dont think that is a problem here.
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
