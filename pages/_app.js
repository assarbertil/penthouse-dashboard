import "../styles/globals.css";

import { SWRConfig } from "swr";
import { GeolocationContext } from "../src/contexts/geoContext";

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
    <div className="h-full overflow-hidden antialiased bg-gray-900 select-none text-gray-50">
      <GeolocationContext>
        <SWRConfig value={fetchConfig}>
          <Component {...pageProps} />
        </SWRConfig>
      </GeolocationContext>
    </div>
  );
}

export default MyApp;
