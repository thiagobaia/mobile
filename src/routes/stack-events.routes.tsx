import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Events } from "../screens/Events";
import { ListEvents } from "../components/Section/ListEvents/ListEvents";

const { Screen, Navigator } = createNativeStackNavigator();

export const StackEventsRoutes = () => {
  return (
    <Navigator>
      <Screen
        name="ListEventsScreen"
        component={ListEvents}
        options={{ headerShown: false }}
      />
      <Screen
        name="EventsScreen"
        component={Events}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
