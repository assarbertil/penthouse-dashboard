import { useState, useEffect } from "react";

import { useFormatTwitterTrends } from "@/hooks/useFormatTwitterTrends";
import TrendChart from "./TrendChart";
import ElementHeader from "../utilities/ElementHeader";

export default function TwitterTrends() {
  const {
    globalSeries,
    globalLabels,
    renderGlobalChart,
    swedenSeries,
    swedenLabels,
    renderSwedenChart,
  } = useFormatTwitterTrends();

  return (
    <>
      <ElementHeader title="Twitter Trends" color="bg-blue-800" />
      <div className="text-xs">
        <div className="grid grid-cols-2">
          {renderGlobalChart && (
            <TrendChart
              id="globalTrends"
              data={globalSeries}
              labelNames={globalLabels}
            />
          )}

          {renderSwedenChart && (
            <TrendChart
              id="swedenTrends"
              data={swedenSeries}
              labelNames={swedenLabels}
            />
          )}
        </div>
        {/* {renderGlobalChart && (
          <>
            {data?.globalResponse &&
              data.globalResponse[0].trends.map(i => (
                <TrendItem key={i.name} trend={i.name}></TrendItem>
              ))}

            {data?.swedenResponse &&
              data.swedenResponse[0].trends.map(i => (
                <TrendItem key={i.name} trend={i.name}></TrendItem>
              ))}
          </>
        )} */}
      </div>
    </>
  );
}
