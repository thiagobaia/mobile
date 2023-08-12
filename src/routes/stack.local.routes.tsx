import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Locations } from "../screens/Locations";
import { ListLocal } from "../components/Section/ListLocal/ListLocal";
import { LocationsItem } from "../components/Section/LocationsItem/LocationsItem";

const { Screen, Navigator } = createNativeStackNavigator();

export const StackLocationRoutes = () => {
  return (
    <Navigator>
      <Screen
        name="LocationsScreen1"
        component={ListLocal}
        options={{ headerShown: false }}
      />
          <Screen
        name="LocationsScreen2"
        component={LocationsItem}
        options={{ headerShown: false }}
      />
      <Screen
        name="LocationsScreen3"
        component={Locations}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};