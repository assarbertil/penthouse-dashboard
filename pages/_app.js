import "../styles/globals.css";

import { SWRConfig } from "swr";
import GeolocationContext from "./components/GeolocationContext";

function MyApp({ Component, pageProps }) {
  const fetchConfig = {
    /*     refreshInterval: 600000,
    focusThrottleInterval: 10000,
    dedupingInterval: 10000,
    revalidateOnMount: true,
    revalidateOnFocus: true, */

    onSuccess: (data, key) => console.log(data),
    onError: err => console.log(err),
  };

  return (
    <GeolocationContext>
      <SWRConfig value={fetchConfig}>
        <Component {...pageProps} />
      </SWRConfig>
    </GeolocationContext>
  );
}

export default MyApp;
