import { ElementContainer } from "../utilities/ElementContainer";

import Clock from "./Clock";
import CurrentWeather from "./CurrentWeather";
import ForecastChart from "./ForecastChart";

export const ClockWeather = () => (
  <ElementContainer
    header
    title={Intl.DateTimeFormat().resolvedOptions().timeZone}
    headerColor="bg-blue-800"
  >
    <Clock />
    <CurrentWeather />
    <ForecastChart />
  </ElementContainer>
);

/**
 * @todo
 * Gör animationer för forecastChart
 */
