import React, { useContext } from "react";
import { DeleteContext } from "../../common/react/deleteContext";

const DropRight = ({ col }) => {
  const onDelete = useContext(DeleteContext);

  const onClick = () => {
    onDelete(col._id);
  };
  return (
    <div className="dropright" contentEditable={false}>
      <button
        className="btn btn-info dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{ width: "40px", height: "40px" }}
      ></button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div className="dropdown-item">Insert New</div>
        <div className="dropdown-divider"></div>
        <div className="dropdown-item" onClick={onClick}>
          Delete: &nbsp;&nbsp;&nbsp; <i className="far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default DropRight;
