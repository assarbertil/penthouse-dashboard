import { ElementContainer } from "../utilities/ElementContainer";
import { Cell } from "./Cell";

const SSR = typeof window === "undefined";

export const WeekGraph = () => {
  const RenderRandom = () => (
    <Cell filled={Math.random() >= 0.5} special={Math.random() >= 0.5} />
  );

  return (
    <ElementContainer title="Week graph" headerColor="bg-blue-800" header>
      <div className="grid grid-cols-[repeat(52,_1fr)] gap-[1px] w-max">
        {/* Render 52 * 90 Cells */}
        {!SSR &&
          [...Array(52 * 90).keys()].map((_, i) => (
            <Cell
              key={i}
              filled={Math.random() >= 0.5}
              special={Math.random() >= 0.5}
            />
          ))}
      </div>
    </ElementContainer>
  );
};
