import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import useWeater from "../hooks/useWeather";
import useStockPrice from "../hooks/useStockPrice";
import useStockData from "../hooks/useStockData";
import useDropboxUsage from "../hooks/useDropboxUsage";
import useTwitterTrends from "../hooks/useTwitterTrends";
import useNews from "../hooks/useNews";
import Logo from "../assets/dashboard-block_xl-dark.svg";

export default function SplashScreen(props) {
  const [fadeCountDown, setFadeCountDown] = useState(false);

  const { data: weatherData, isError: weatherError } = useWeater();
  const { data: stockDataData, isError: stockDataError } = useStockData();
  const { data: stockPriceData, isError: stockPriceError } = useStockPrice();
  const { data: dropBoxData, isError: dropboxError } = useDropboxUsage();
  const { data: twitterData, isError: twitterError } = useTwitterTrends();
  const { data: newsData, isError: newsError } = useNews();

  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  useEffect(() => {
    // process.env.NODE_ENV === "development" && setFadeCountDown(true);

    if (
      weatherData?.lat &&
      stockDataData?.["Meta Data"] &&
      stockPriceData?.["Realtime Currency Exchange Rate"] &&
      dropBoxData?.used &&
      twitterData?.globalResponse[0].trends &&
      twitterData?.swedenResponse[0].trends &&
      newsData?.status
    ) {
      controls.start({ opacity: 0 });

      setInterval(() => setFadeCountDown(true), 1000);
    }
  }, [
    controls,
    weatherData,
    stockDataData,
    stockPriceData,
    dropBoxData,
    twitterData,
    newsData,
  ]);

  if (fadeCountDown) {
    return props.children;
  } else {
    return (
      <motion.div
        className="flex flex-col items-center justify-center w-screen h-screen align-middle"
        animate={controls}
        initial={{ opacity: 0 }}
        transition={{
          type: "tween",
          ease: "backIn",
          duration: 0.5,
        }}
      >
        <img src={Logo} alt="" className="h-14" />

        {weatherError ||
        stockDataError ||
        stockPriceError ||
        dropboxError ||
        twitterError ||
        newsError ? (
          <>
            <span className="text-red-600">Fetching error</span>
          </>
        ) : null}

        {(stockDataData?.["Information"] ||
          stockPriceData?.["Information"] ||
          twitterData?.globalResponse.errors ||
          twitterData?.swedenResponse.errors) && (
          <>
            <span className="mt-4 text-red-600">ratelimited</span>
            <button
              className="px-3 py-1 mt-4 text-gray-900 bg-red-600"
              onClick={e => {
                e.preventDefault();
                setFadeCountDown(true);
              }}
            >
              proceed
            </button>
          </>
        )}
      </motion.div>
    );
  }
}
