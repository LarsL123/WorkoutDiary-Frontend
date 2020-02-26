//Based on: https://formidable.com/open-source/victory/gallery/custom-tooltip-labels/

import React, { useState, useEffect } from "react";
import { VictoryLabel, VictoryTooltip, VictoryPie } from "victory";
import getZoneData from "./formatData";

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

  console.log(fromDate);
  console.log(toDate);

  console.log(fromDate.toISOString().split("T")[0]);
  console.log(toDate.toISOString().split("T")[0]);

  return (
    <React.Fragment>
      <div className="row">
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
        innerRadius={100}
        labelRadius={120}
        labels={({ datum }) => 
           datum.y === 0 ? "" : `# ${datum.x}`
        }
        labelComponent={<ZoneLabel />}
        data={data}
      />
    </React.Fragment>
  );
};

export default ZoneDiagram;

const ZoneLabel = props => {
  return (
    <g>
      <VictoryLabel {...props} />
      <VictoryTooltip
        {...props}
        x={200}
        y={250}
        orientation="top"
        pointerLength={0}
        cornerRadius={50}
        flyoutWidth={100}
        flyoutHeight={100}
        flyoutStyle={{ fill: "black" }}
        text={({ datum }) => `Minutes: ${datum.y}`}
      />
    </g>
  );
};

ZoneLabel.defaultEvents = VictoryTooltip.defaultEvents;
