import { Selection, select } from "d3-selection";
import { useEffect, useRef, useState } from "react";
import { scaleLinear, scaleBand } from "d3-scale";
import { max } from "d3-array";

const data = [
  { name: "John", number: 10000 },
  { name: "Jack", number: 30000 },
  { name: "James", number: 25000 },
  { name: "Harry", number: 50000 },
];

const Scales = () => {
  const scalesRef = useRef<SVGSVGElement | null>(null);
  const [selection, setSelection] = useState<null | Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  >>(null);

  const maxVal = max(data, (d) => d.number);

  const y = scaleLinear().domain([0, maxVal!]).range([0, 800]);

  const x = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, 800])
    .padding(0.1);

  useEffect(() => {
    if (!selection) {
      setSelection(select(scalesRef.current));
    } else {
      selection
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", x.bandwidth)
        .attr("x", (d) => x(d.name)!)
        .attr("fill", "blue")
        .attr("height", (d) => y(d.number));
    }
  }, [selection]);

  return (
    <div>
      <svg ref={scalesRef} height={500} width={800} />
    </div>
  );
};

export default Scales;
