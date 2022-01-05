import "../styles/globals.css";
import Script from "next/script";

import { SWRConfig } from "swr";
import { GeolocationContext } from "../src/contexts/geoContext";

function MyApp({ Component, pageProps }) {
  const fetchConfig = {
    onSuccess: (data, key) => console.log(data),
    // onError: err => console.log(err),
  };

  return (
    <div className="h-full overflow-hidden antialiased bg-gray-900 select-none text-gray-50">
      <Script src="globe/detector.js" strategy="beforeInteractive" />
      <Script src="globe/data.js" strategy="beforeInteractive" />
      <Script src="globe/grid.js" strategy="beforeInteractive" />
      <Script src="globe/encom-globe.min.js" strategy="beforeInteractive" />

      <GeolocationContext>
        <SWRConfig value={fetchConfig}>
          <Component {...pageProps} />
        </SWRConfig>
      </GeolocationContext>
    </div>
  );
}

export default MyApp;
