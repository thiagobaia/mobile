import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  City,
  Local,
  Temp,
  TextNumber,
  TextTempCelcius,
  Widget,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { Load } from "../Load/Load";

export interface weatherModel {
  temp: string;
  city: string;
  description: string;
  rain: number;
}

export const Weather = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<weatherModel>({} as weatherModel);

  async function getWeather() {
    try {
      const response = await axios.get(
        "https://api.hgbrasil.com/weather?key=0a389869&city_name=Tucurui,PA"
      );

      let localData = response.data.results;
      setWeather(localData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getWeather();
  }, [weather]);
  return (
    <View>
      {loading ? (
        <Load />
      ) : (
        <>
          <Local>
            <Ionicons name="location-outline" size={20} color="white" />
            <City>{weather.city}</City>
          </Local>

          <Widget>
            {weather.rain > 0 ? (
              <Ionicons name="rainy-outline" size={80} color="white" />
            ) : (
              <Ionicons name="partly-sunny-outline" size={80} color="white" />
            )}

            {/* */}
            <Temp>
              <TextNumber>{weather.temp}</TextNumber>
              <TextTempCelcius>°C</TextTempCelcius>
            </Temp>
          </Widget>
        </>
      )}
    </View>
  );
};
