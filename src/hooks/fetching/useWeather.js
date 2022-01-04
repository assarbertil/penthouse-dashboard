import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { useContext } from "react";

import { GeoContext } from "@/contexts/geoContext";

const weatherAPIKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function useWeather() {
  const {
    geoPos: { lat, lon },
  } = useContext(GeoContext);

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${weatherAPIKey}&units=metric`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
