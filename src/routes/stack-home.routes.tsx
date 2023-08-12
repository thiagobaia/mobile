import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Partners } from "../screens/Partners";
import { Highlighted } from "../screens/Highlighted";

const { Screen, Navigator, Group } = createNativeStackNavigator();

export const StackHomeRoutes = () => {
  return (
    <Navigator>
      <Group>
        <Screen
          name="HomePartners"
          component={Home}
          options={{ headerShown: false }}
        />
        <Screen name="Parceiros" component={Partners} />
      </Group>
      <Group>
        <Screen
          name="HomeHighlighted"
          component={Home}
          options={{ headerShown: false }}
        />
        <Screen name="Em Destaque" component={Highlighted} />
      </Group>
    </Navigator>
  );
};
