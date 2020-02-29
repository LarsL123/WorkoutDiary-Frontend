//Based of: https://formidable.com/open-source/victory/gallery/brush-and-zoom/
import React, { useState } from "react";
import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryLine,
  VictoryAxis,
  VictoryBrushContainer
} from "victory";

const MinuteGraph = ({ data }) => {
  const [zoomDomain, setZoomDomain] = useState({ x: [1, 50] });

  const handleZoom = domain => {
    console.log("Changing zoom");
    console.log(domain);
    setZoomDomain({ zoomDomain: domain.x });
  };

  return (
      <VictoryChart
        width={600}
        height={470}
        scale={{ x: "linear" }}
        containerComponent={
          <VictoryZoomContainer
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={handleZoom}
          />
        }
      >
        {data.map((value, index) => 
          <VictoryLine
            key={index}
            style={{
              data: { stroke: "tomato" }
            }}
            data={value}
            x="week"
            y="minutes"
          />
        )}
      </VictoryChart>
  );
};

export default MinuteGraph;

{
  /* <VictoryChart
padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
width={600}
height={100}
scale={{ x: "time" }}
containerComponent={
  <VictoryBrushContainer
    brushDimension="x"
    brushDomain={zoomDomain}
    onBrushDomainChange={handleZoom}
  />
}
>
<VictoryAxis tickFormat={x => new Date(x).getFullYear()} />
<VictoryLine
  style={{
    data: { stroke: "tomato" }
  }}
  data={[
    { key: new Date(1982, 1, 1), b: 125 },
    { key: new Date(1987, 1, 1), b: 257 },
    { key: new Date(1993, 1, 1), b: 345 },
    { key: new Date(1997, 1, 1), b: 515 },
    { key: new Date(2001, 1, 1), b: 132 },
    { key: new Date(2005, 1, 1), b: 305 },
    { key: new Date(2011, 1, 1), b: 270 },
    { key: new Date(2015, 1, 1), b: 470 }
  ]}
  x="key"
  y="b"
/>
</VictoryChart> */
}
