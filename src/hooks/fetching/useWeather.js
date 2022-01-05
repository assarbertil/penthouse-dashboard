import useSWR from "swr";
import { useContext } from "react";

import { GeoContext } from "@/contexts/geoContext";

const weatherAPIKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const weatherFetcher = async url => {
  const res = await fetch(url).then(res => res.json());

  if (res.cod === 429) {
    throw new Error("Rate limit exceeded (Open Weather Map)");
  }

  return res;
};

export default function useWeather() {
  const {
    geoPos: { lat, lon },
  } = useContext(GeoContext);

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${weatherAPIKey}&units=metric`,
    weatherFetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
