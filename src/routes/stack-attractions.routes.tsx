import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Attractions } from "../screens/Attractions";
import { ListAttractions } from "../components/Section/ListAttractions/ListAttractions";

const { Screen, Navigator } = createNativeStackNavigator();

export const StackAttractionsRoutes = () => {
  return (
    <Navigator>
      <Screen
        name="ListAttractionsScreen"
        component={ListAttractions}
        options={{ headerShown: false }}
      />
      <Screen
        name="AttractionsScreen"
        component={Attractions}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
