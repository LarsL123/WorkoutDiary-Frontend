import React from "react";
import { stringify } from "joi-browser";

//Direction is eather dropdown, dropup, dropleft or dropright

//TODO: Cahnge to labeledDropdown and then another called ButtonDropdown

const ButtonDropdown = ({ children, direction, size = 40 }) => {
  return (
    <div className={direction} contentEditable={false}>
      <button
        className="btn btn-info dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {children}
      </div>
    </div>
  );
};

export default ButtonDropdown;

export const DropdownItem = (props) => {
  return (
    <div {...props} className={combine("dropdown-item", props.className)}>
      {props.children}
    </div>
  );
};

export const DropdownDivider = (props) => {
  return (
    <div {...props} className={combine("dropdown-divider", props.className)}>
      {props.children}
    </div>
  );
};

function combine(standardClass, className) {
  return [standardClass, className].join(" ");
}
