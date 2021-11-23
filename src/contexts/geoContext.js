import { createContext, useEffect, useState } from "react";

export const GeoContext = createContext({ lat: 5, lon: 1 });

/* 
  The UI component
*/

export const GeolocationContext = ({ children }) => {
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
};
