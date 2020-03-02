import React, { useState, useEffect } from "react";
import MinuteGraph from "./minuteGraph";
import getChartLine from "./chartData";
import CurrentYears from "./currentYears";

const LineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const line1 = await getChartLine("01.01.2020", "01.01.2021");
      const line2 = await getChartLine("01.01.2019", "01.01.2020");
      const line3 = await getChartLine("01.01.2018", "01.01.2019");
      setData([
        { year: 2020, weeks: line1 },
        { year: 2019, weeks: line2 },
        { year: 2018, weeks: line3 }
      ]);
    }
    //fetchData();
  }, []);

  const addYear = async year => {
    year = Number.parseInt(year);

    for (const value of data) {
      if (value.year === year) return;
    }

    const newYear = {
      color: getRandomColor(),
      year,
      weeks: await getChartLine("01.01." + year, "12.31." + year)
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
            Total Minutes
          </h3>
          <div style={{ float: "right", width: "50%" }}>
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-secondary">
                Summer
              </button>
              <button type="button" className="btn btn-secondary">
                Winter
              </button>
              <button type="button" className="btn btn-secondary">
                Year
              </button>
            </div>
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

//MOve to utils
const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 0x1000000).toString(16);
};
