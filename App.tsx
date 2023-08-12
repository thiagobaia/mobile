import * as React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import { AppRoutes } from "./src/routes/app.routes";
import { theme } from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle={"light-content"}
      />
      <AppRoutes />
    </ThemeProvider>
  );
}
