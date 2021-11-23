import GridItem from "./GridItem";

import ClockWeatherElement from "./elements/ClockWeatherElement";
import EncomeGlobeElement from "./elements/EncomGlobeElement";
import StockPriceElement from "./elements/StockPriceElement";
import TwitterTrendsElement from "./elements/TwitterTrendsElement";
import NewsFeedElement from "./elements/NewsFeedElement";

export default function Layout() {
  return (
    <div className="grid w-screen h-screen grid-cols-7 grid-rows-6 px-4 py-8 gap-x-4 gap-y-2">
      <GridItem cols={3} rows={5} content={<EncomeGlobeElement />} />
      <GridItem cols={2} rows={4} content={null} />
      <GridItem cols={2} rows={4} content={<NewsFeedElement />} />
      <GridItem cols={2} rows={2} content={<TwitterTrendsElement />} />
      <GridItem cols={2} rows={2} content={<ClockWeatherElement />} />
      <GridItem cols={3} rows={3} content={<StockPriceElement />} />
    </div>
  );
}
