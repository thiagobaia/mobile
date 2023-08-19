import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";

import { apiWeather } from "../services/api";

interface IWeather {
  temp: string;
  city: string;
  rain: number;
  loading: boolean;
}

interface WeatherProviderProps {
  children: ReactNode;
}

interface WeatherContextData {
  weather: IWeather;
  loading: boolean;
}

const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData
);

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<IWeather>({} as IWeather);

  async function getWeather() {
    try {
      const response = await apiWeather.get("/weathers");
      setWeatherData(response.data[response.data.length - 1]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weather: weatherData,
        loading: loading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = (): WeatherContextData => {
  const context = useContext(WeatherContext);
  return context;
};
