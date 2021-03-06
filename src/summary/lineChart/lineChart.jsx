import React, { useState } from "react";
import MinuteGraph from "./graph";
import CurrentYears from "./yearsToDisplay";
import Selector from "../../common/components/select";
import getChartLine from "./data";
import getRandomColor from "../../common/utils/color"

const timeRanges = [
  { name: "Full Year", obj: { from: "01.01.", to: "12.31." } },
  {
    name: "More time ranges comming soon...",
    obj: { from: "01.01.", to: "12.31." }
  }
  //To add: 
  // { name: "Winter", obj: { from: "11.01.", to: "31.4." } },
  // { name: "Summer", obj: { from: "04.01.", to: "10.31." } }
];

const LineChart = () => {
  const [data, setData] = useState([]);
  const [yearSpan, setYearSpan] = useState(timeRanges[0].obj);

  const addYear = async year => {
    year = Number.parseInt(year);

    for (const value of data) {
      if (value.year === year) return;
    }

    const newYear = {
      color: getRandomColor(),
      year,
      weeks: await getChartLine(yearSpan.from + year, yearSpan.to + year)
    };

    setData(data.concat(newYear));
  };

  return (
    <React.Fragment>
      <div style={{ width: "80%", float: "left" }}>
        <div style={{ position: "relative", top: "20px" }}>
          <h3
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
              float: "left"
            }}
          >
            Total Hours
          </h3>

          <div style={{ float: "right", width: "50%" }}>
            <Selector
              listOption={timeRanges}
              selectedSetter={setYearSpan}
            ></Selector>
          </div>
        </div>

        <hr style={{ position: "relative", top: "50px" }}></hr>

        <MinuteGraph data={data}></MinuteGraph>
      </div>
      <div style={{ width: "20%", float: "right" }}>
        <CurrentYears
          data={data}
          addYear={addYear}
          setData={setData}
        ></CurrentYears>
      </div>
    </React.Fragment>
  );
};

export default LineChart;
