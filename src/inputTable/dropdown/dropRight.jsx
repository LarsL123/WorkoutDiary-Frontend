import React from "react";

const DropRight = () => {
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
        <a className="dropdown-item" href="#">
          Insert New
        </a>
        <div class="dropdown-divider"></div>

        <a className="dropdown-item" href="#">
          Delete: &nbsp;&nbsp;&nbsp; <i className="far fa-trash-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default DropRight;
