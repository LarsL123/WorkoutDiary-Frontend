import React from "react";
import DropRight from "../components/dropRight";
import NewWorkout from "../components/newWorkout";
import DateDisplay from "../components/dateDisplay";
import SportSelect from "../components/sportSelect";

export default [
  {
    key: "delete",
    content: (column) => <DropRight column={column}></DropRight>,
    headerContent: () => <NewWorkout></NewWorkout>,
  },
  {
    key: "date",
    content: (column) => <DateDisplay column={column}></DateDisplay>,
    label: "Date",
  },
  { path: "description", label: "Description", contentEditable: true },
  {
    key: "sport",
    content: (column) => <SportSelect column={column}></SportSelect>,
    label: "Sport",
  },
  { path: "zones.1", label: "1", contentEditable: true },
  { path: "zones.2", label: "2", contentEditable: true },
  { path: "zones.3", label: "3", contentEditable: true },
  { path: "zones.4", label: "4", contentEditable: true },
  { path: "zones.5", label: "5", contentEditable: true },
];
