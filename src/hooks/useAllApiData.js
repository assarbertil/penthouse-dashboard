import { useEffect, useState } from "react";

import useTwitterTrends from "@/hooks/fetching/useTwitterTrends";
import useStockPrice from "@/hooks/fetching/useStockPrice";
import useStockInfo from "@/hooks/fetching/useStockInfo";
import useDropboxUsage from "@/hooks/fetching/useDropboxUsage";
import useWeather from "@/hooks/fetching/useWeather";
import useNews from "@/hooks/fetching/useNews";

export const useAllApiData = () => {
  const { data: stockPriceData, isError: stockPriceError } = useStockPrice();
  const { data: stockInfoData, isError: stockInfoError } = useStockInfo();
  const { data: twitterData, isError: twitterError } = useTwitterTrends();
  const { data: dropBoxData, isError: dropboxError } = useDropboxUsage();
  const { data: weatherData, isError: weatherError } = useWeather();
  const { data: newsData, isError: newsError } = useNews();

  const [allData, setAllData] = useState([]);
  const [allErrors, setAllErrors] = useState([]);

  useEffect(() => {
    if (
      stockPriceData &&
      stockInfoData &&
      twitterData &&
      dropBoxData &&
      weatherData &&
      newsData
    ) {
      // Check if all data is here, set the object
      setAllData([
        stockPriceData ? stockPriceData : null,
        stockInfoData ? stockInfoData : null,
        twitterData ? twitterData : null,
        dropBoxData ? dropBoxData : null,
        weatherData ? weatherData : null,
        newsData ? newsData : null,
      ]);
    }
  }, [
    stockPriceData,
    stockInfoData,
    twitterData,
    dropBoxData,
    weatherData,
    newsData,
  ]);

  useEffect(() => {
    // Error handling
    if (
      stockPriceError ||
      stockInfoError ||
      twitterError ||
      dropboxError ||
      weatherError ||
      newsError
    ) {
      setAllErrors([
        stockPriceError ? stockPriceError : null,
        stockInfoError ? stockInfoError : null,
        twitterError ? twitterError : null,
        dropboxError ? dropboxError : null,
        weatherError ? weatherError : null,
        newsError ? newsError : null,
      ]);
    }
  }, [
    stockPriceError,
    stockInfoError,
    twitterError,
    dropboxError,
    weatherError,
    newsError,
  ]);

  useEffect(
    () =>
      allErrors.some(i => typeof i !== null) &&
      console.log("Error exists", allErrors),
    [allErrors]
  );

  useEffect(() => {
    if (false) {
      allData.length === 6 && console.log("All data arrived", allData);
    }
  }, [allData]);

  return {
    data: allData.length === 6 && allData,
    errors: allErrors.some(i => typeof i !== null) && allErrors,
  };
};
