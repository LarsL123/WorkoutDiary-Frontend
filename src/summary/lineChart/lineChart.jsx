import React, { useState, useEffect } from "react";
import MinuteGraph from "./graph";
import getChartLine from "./chartData";

const LineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const line1 = await getChartLine("01.01.2020", "01.01.2021");
      const line2 = await getChartLine("01.01.2019", "01.01.2020");
      const line3 = await getChartLine("01.01.2018", "01.01.2019");
      setData([line1, line2, line3]);
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div style={{ width: "75%", float: "left" }}>
        <MinuteGraph data={data}></MinuteGraph>
      </div>
      <div style={{ width: "25%", float: "right" }}>
        <h1>Placeholder</h1>
      </div>
    </React.Fragment>
  );
};

export default LineChart;
