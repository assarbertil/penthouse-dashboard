import GridItem from "./GridItem";

import { ClockWeather } from "./elements/ClockWeather";
import EncomeGlobe from "./elements/EncomGlobe";
import StockPrice from "./elements/StockPrice";
import TwitterTrends from "./elements/TwitterTrends";
import NewsFeed from "./elements/NewsFeed";
import { WeekGraph } from "./elements/WeekGraph";

export default function GridLayout() {
  return (
    <div className="grid w-screen h-screen grid-cols-7 grid-rows-6 px-4 py-8 gap-x-4 gap-y-2">
      <GridItem cols={3} rows={5} x content={<EncomeGlobe />} />
      <GridItem cols={2} rows={4} x content={<NewsFeed />} />
      <GridItem cols={2} rows={4} x content={<WeekGraph />} />
      <GridItem cols={2} rows={2} x content={<TwitterTrends />} />
      <GridItem cols={2} rows={2} content={<ClockWeather />} />
      <GridItem cols={3} rows={3} x content={<StockPrice />} />
    </div>
  );
}
