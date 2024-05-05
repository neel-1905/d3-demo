import React, { useEffect, useRef } from "react";
import { select, selectAll } from "d3-selection";

const Selections = () => {
  const selectionRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // select single elements
    // select(selectionRef.current)
    //   .append("rect")
    //   .attr("width", 50)
    //   .attr("height", 200)
    //   .attr("fill", "red");

    // select all elements
    selectAll("rect")
      .attr("height", 100)
      .attr("width", 100)
      .attr("fill", "red")
      .attr("x", (_, i) => i * 100);
  });

  return (
    <div>
      <svg ref={selectionRef}>
        <rect />
        <rect />
        <rect />
      </svg>
    </div>
  );
};

export default Selections;
