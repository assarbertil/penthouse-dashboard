import "../styles/globals.css"
import Script from "next/script"
import type { AppProps } from "next/app"

import { SWRConfig, SWRConfiguration } from "swr"
import { GeoContextProvider } from "@/contexts/GeoContext"
import axios from "axios"

function MyApp({ Component, pageProps }: AppProps) {
  const swrConfig: SWRConfiguration = {
    // onSuccess: (data, key) => console.log(data),
    onError: (err) => console.log(err),
    fetcher: (url: string) => axios.get(url).then((res) => res.data),
  }

  return (
    <div className="h-full overflow-hidden antialiased bg-gray-900 select-none text-gray-50">
      <Script src="globe/data.js" strategy="beforeInteractive" />
      <Script src="globe/grid.js" strategy="beforeInteractive" />
      <Script src="globe/encom-globe.min.js" strategy="beforeInteractive" />

      <GeoContextProvider>
        <SWRConfig value={swrConfig}>
          <Component {...pageProps} />
        </SWRConfig>
      </GeoContextProvider>
    </div>
  )
}

export default MyApp
