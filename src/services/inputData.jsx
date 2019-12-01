import React from "react";

export function getRow() {
  return {
    //test object
    date: "05-6-2019",
    day: "mon",
    description: "There may be alot of text hereasd aasdas d asd asdasd asdada",
    activity: (
      <select className="custom-select">
        <option value="Orientering">orientering</option>
        <option value="Løping">løping</option>
        <option value="Ski">ski</option>npm
        <option value="Styrke">styrke</option>
      </select>
    ),
    1: "123",
    2: "123",
    3: "123",
    4: "123",
    5: "123"
  };
}

export function getModelRows(yTop, yBottom) {
  return [
    getRow(),
    getRow(),
    getRow(),
    getRow(),
    getRow(),
    getRow(),
    getRow(),
    getRow(),
    getRow(),
    getRow(),
    getRow(),
    getRow(),
    getRow(),
    getRow(),
    getRow(),
    getRow()
  ];
}
