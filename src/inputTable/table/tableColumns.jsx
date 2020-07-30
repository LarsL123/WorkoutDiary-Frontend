import React from "react";
import DropRight from "../components/dropRight";
import NewWorkout from "../components/newWorkout";
import DateDisplay from "../components/dateDisplay";
import SportSelect from "../components/sportSelect";

const columns = [
  {
    key: "delete",
    content: (column) => <DropRight column={column}></DropRight>,
    headerContent: () => <NewWorkout></NewWorkout>,
    width: "5%",
  },
  {
    key: "date",
    content: (column) => <DateDisplay column={column}></DateDisplay>,
    label: "Date",
    width: "10%",
  },
  {
    path: "description",
    label: "Description",
    contentEditable: true,
    width: "40%",
  },
  {
    key: "sport",
    content: (column) => <SportSelect column={column}></SportSelect>,
    label: "Sport",
    width: "20%",
  },
  { path: "zones.1", label: "1", contentEditable: true, width: "5%" },
  { path: "zones.2", label: "2", contentEditable: true, width: "5%" },
  { path: "zones.3", label: "3", contentEditable: true, width: "5%" },
  { path: "zones.4", label: "4", contentEditable: true, width: "5%" },
  { path: "zones.5", label: "5", contentEditable: true, width: "5%" },
];

export const widths = columns.map((column) => column.width);
export default columns;
