import { useEffect, useState } from "react";
import { GeoContext } from "../contexts/geoContext";

export default function GeolocationContext({ children }) {
  const [geoPos, setGeoPos] = useState({ lat: 59.330786, lon: 18.071753 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoPos => {
      setGeoPos({ lat: geoPos.coords.latitude, lon: geoPos.coords.longitude });
    });
  }, []);

  return (
    <GeoContext.Provider value={{ geoPos, setGeoPos }}>
      {children}
    </GeoContext.Provider>
  );
}
