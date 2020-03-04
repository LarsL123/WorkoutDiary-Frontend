//Based on: https://formidable.com/open-source/victory/gallery/custom-tooltip-labels/
import React, { useState, useEffect } from "react";
import { VictoryPie } from "victory";
import ZoneLabel from "./label";
import getZoneData from "./data";

const colorScale = [
  "lightGreen",
  "green",
  "yellow",
  "orange",
  "red",
  "blue",
  "aqua"
];

const ZoneDiagram = () => {
  const [data, setData] = useState([]);
  const [fromDate, setFromDate] = useState(new Date("02.01.2020"));
  const [toDate, setToDate] = useState(new Date("03.01.2020"));

  useEffect(() => {
    async function fetchData() {
      setData(await getZoneData(fromDate, toDate));
    }
    fetchData();
  }, [fromDate, toDate]);

  return (
    <React.Fragment>
      <div className="row" style={{ width: "100%" }}>
        <label htmlFor="example-date-input" className="col-2 col-form-label">
          From/To
        </label>
        <div className="col-5">
          <input
            className="form-control"
            type="date"
            value={fromDate.toISOString().split("T")[0]}
            onChange={({ target }) => setFromDate(new Date(target.value))}
            id="example-date-input"
          />
        </div>
        <div className="col-5">
          <input
            className="form-control"
            type={"date"}
            value={toDate.toISOString().split("T")[0]}
            onChange={({ target }) => setToDate(new Date(target.value))}
            id="example-date-input"
          />
        </div>
      </div>

      <VictoryPie
        style={{ labels: { fill: "white" } }}
        colorScale={colorScale}
        innerRadius={100}
        labelRadius={120}
        labels={({ datum }) => (datum.minutes === 0 ? "" : `# ${datum.zone}`)}
        labelComponent={<ZoneLabel />}
        data={data}
        x="zone"
        y="minutes"
      />
    </React.Fragment>
  );
};

export default ZoneDiagram;
