import React, { useEffect, useRef, useState } from "react";
import { select, Selection } from "d3-selection";

const data = [
  { width: 100, height: 100, fill: "red" },
  { width: 100, height: 100, fill: "blue" },
  { width: 100, height: 100, fill: "yellow" },
];

const DataJoins = () => {
  const dataJoinsRef = useRef<SVGSVGElement | null>(null);
  const [selection, setSelection] = useState<null | Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  >>(null);

  useEffect(() => {
    if (!selection) {
      setSelection(select(dataJoinsRef.current));
    } else {
      selection
        .data(data)
        .append("rect")
        .attr("width", (d) => d.width)
        .attr("height", (d) => d.height)
        .attr("fill", (d) => d.fill);
    }
  }, [selection]);

  return (
    <div>
      <svg ref={dataJoinsRef}></svg>
    </div>
  );
};

export default DataJoins;
