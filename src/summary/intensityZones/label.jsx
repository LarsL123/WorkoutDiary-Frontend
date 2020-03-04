import React from "react";
import { VictoryLabel, VictoryTooltip } from "victory";

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
        text={({ datum }) => `Minutes: ${datum.minutes}`}
      />
    </g>
  );
};

ZoneLabel.defaultEvents = VictoryTooltip.defaultEvents;

export default ZoneLabel;
