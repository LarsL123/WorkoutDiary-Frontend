//Based of: https://formidable.com/open-source/victory/gallery/brush-and-zoom/
import React, { useState } from "react";
import { VictoryChart, VictoryZoomContainer, VictoryLine } from "victory";

const MinuteGraph = ({ data }) => {

  const [zoomDomain, setZoomDomain] = useState({ x: [1, 50] }); //Change to controll

  const handleZoom = domain => {
    setZoomDomain({ zoomDomain: domain.x });
  };

  return (
    <VictoryChart
      width={600}
      height={450}
      scale={{ x: "linear" }}
      containerComponent={
        <VictoryZoomContainer
          zoomDimension="x"
          zoomDomain={zoomDomain}
          onZoomDomainChange={handleZoom}
        />
      }
    >
      {data.map((value, index) => (
        <VictoryLine
          key={index}
          style={{
            data: { stroke: value.color }
          }}
          data={value.weeks}
          x="week"
          y="minutes"
        />
      ))}
    </VictoryChart>
  );
};

export default MinuteGraph;
