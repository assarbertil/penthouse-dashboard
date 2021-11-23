import { useState, useEffect } from "react";

import useTwitterTrends from "@/hooks/useTwitterTrends";
import TrendChart from "./TrendChart";
import ElementHeader from "../utilities/ElementHeader";

export default function TwitterTrendsElement() {
  const [globalSeries, setGlobalSeries] = useState([]);
  const [globalLabels, setGlobalLabels] = useState([]);
  const [renderGlobalChart, setRenderGlobalChart] = useState(false);

  const [swedenSeries, setSwedenSeries] = useState([]);
  const [swedenLabels, setSwedenLabels] = useState([]);
  const [renderSwedenChart, setRenderSwedenChart] = useState(false);

  const { data } = useTwitterTrends();

  useEffect(() => {
    if (data?.globalResponse[0]?.trends) {
      const globalFormattedArray = data?.globalResponse[0].trends
        .map(i => ({
          name: i.name,
          volume: i.tweet_volume !== null ? i.tweet_volume : 0,
        }))
        .sort((a, b) => b.volume - a.volume)
        .slice(0, 16);

      setGlobalLabels(globalFormattedArray.map(i => i.name));
      setGlobalSeries(
        globalFormattedArray.map(
          i => (i.volume * 100) / globalFormattedArray[0].volume
        )
      );
      setRenderGlobalChart(true);
    }

    if (data?.swedenResponse[0]?.trends) {
      const swedenFormattedArray = data?.swedenResponse[0].trends
        .map(i => ({
          name: i.name,
          volume: i.tweet_volume !== null ? i.tweet_volume : 0,
        }))
        .sort((a, b) => b.volume - a.volume)
        .slice(0, 16);

      setSwedenLabels(swedenFormattedArray.map(i => i.name));
      setSwedenSeries(
        swedenFormattedArray.map(
          i => (i.volume * 100) / swedenFormattedArray[0].volume
        )
      );
      setRenderSwedenChart(true);
    }
  }, [data]);

  /*   const TrendItem = ({ trend }) => (
    <span className="inline-flex text-blue-700">{trend}</span>
  ); */

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
