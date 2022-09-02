import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react"

interface GeoPosition {
  lat: number
  lon: number
}

// Context object
export const GeoContext = createContext<{
  geoPos: GeoPosition
  setGeoPos?: Dispatch<SetStateAction<GeoPosition>>
}>({
  geoPos: {
    lat: 5,
    lon: 1,
  },
})

// Provider
export const GeoContextProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [geoPos, setGeoPos] = useState<GeoPosition>({
    lat: 59.330786,
    lon: 18.071753,
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoPos => {
      setGeoPos({
        lat: geoPos.coords.latitude,
        lon: geoPos.coords.longitude,
      })
    })
  }, [])

  return (
    <GeoContext.Provider value={{ geoPos, setGeoPos }}>
      {children}
    </GeoContext.Provider>
  )
}

// useContext hook
export const useGeoContext = () => useContext(GeoContext)
