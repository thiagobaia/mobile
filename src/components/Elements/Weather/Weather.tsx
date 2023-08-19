import React from "react";
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
import { Load } from "../Load/Load";
export interface weatherModel {
  temp: string;
  city: string;
  rain: number;
  loading: boolean;
}

export const Weather = ({ temp, city, rain, loading }: weatherModel) => (
  <View>
    {loading ? (
      <Load />
    ) : (
      <>
        <Local>
          <Ionicons name="location-outline" size={20} color="white" />
          <City>{city}</City>
        </Local>

        <Widget>
          {rain > 0 ? (
            <Ionicons name="rainy-outline" size={80} color="white" />
          ) : (
            <Ionicons name="partly-sunny-outline" size={80} color="white" />
          )}

          {/* */}
          <Temp>
            <TextNumber>{temp}</TextNumber>
            <TextTempCelcius>°C</TextTempCelcius>
          </Temp>
        </Widget>
      </>
    )}
  </View>
);
