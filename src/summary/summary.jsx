import React from "react";
import ZoneDiagram from "./intensityZones/intensityZoneDiagram";
import LineChart from "./lineChart/lineChart";

const Summary = () => {
  return (
    <React.Fragment>
      <LineChart></LineChart>
      <ZoneDiagram></ZoneDiagram>
    </React.Fragment>
  );
};

export default Summary;