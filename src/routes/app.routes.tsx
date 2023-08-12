import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { TabRoutes } from "./tab.routes";
import { navigationRef } from "../RootNavigation";

export const AppRoutes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <TabRoutes />
    </NavigationContainer>
  );
};
