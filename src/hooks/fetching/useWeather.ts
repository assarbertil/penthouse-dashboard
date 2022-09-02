import useSWR from "swr"
import { useGeoContext } from "@/contexts/GeoContext"

const weatherAPIKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY

interface WeatherResponse {
  current: {
    clouds: number
    dew_point: number
    dt: number
    feels_like: number
    humidity: number
    pressure: number
    sunrise: number
    sunset: number
    temp: number
    uvi: number
    visibility: number
    weather: {
      description: string
      icon: string
      id: number
      main: string
    }[]
    wind_deg: number
    wind_speed: number
  }

  daily: {
    clouds: number
    dew_point: number
    dt: number
    feels_like: {
      day: number
      eve: number
      morn: number
      night: number
    }
    humidity: number
    moon_phase: number
    moonrise: number
    moonset: number
    pop: number
    pressure: number
    sunrise: number
    sunset: number
    temp: {
      day: number
      eve: number
      max: number
      min: number
      morn: number
      night: number
    }
    uvi: number
    weather: {
      description: string
      icon: string
      id: number
      main: string
    }[]
    wind_deg: number
    wind_gust: number
    wind_speed: number
  }[]

  hourly: {
    clouds: number
    dew_point: number
    dt: number
    feels_like: number
    humidity: number
    pop: number
    pressure: number
    temp: number
    uvi: number
    visibility: number
    weather: {
      description: string
      icon: string
      id: number
      main: string
    }[]
    wind_deg: number
    wind_gust: number
    wind_speed: number
  }[]

  lat: number
  lon: number
  timezone: string
  timezone_offset: number
}

export const useWeather = () => {
  const {
    geoPos: { lat, lon },
  } = useGeoContext()

  const { data, error } = useSWR<WeatherResponse>(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${weatherAPIKey}&units=metric`
  )

  return {
    weatherData: data,
    error,
    isLoading: !error && !data,
  }
}
