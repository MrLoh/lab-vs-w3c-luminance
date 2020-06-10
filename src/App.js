import React from "react";
import { VictoryScatter, VictoryChart } from "victory";
import { times } from "lodash";
import chroma from "chroma-js";

export default function App() {
  const data = times(100).map(i => {
    const col = chroma.random();
    return { x: col.luminance(), y: col.lch()[0], col };
  });
  return (
    <div className="App">
      <VictoryChart>
        <VictoryScatter style={{ data: { fill: d => d.col } }} data={data} />
      </VictoryChart>
    </div>
  );
}
