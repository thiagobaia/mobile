import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const { Screen, Navigator } = createBottomTabNavigator();

// SCREENS
import { Attractions } from "../screens/Attractions";
import { Contact } from "../screens/Contact";
import { Locations } from "../screens/Locations";

//ROUTES
import { StackHomeRoutes } from "./stack-home.routes";
import { StackEventsRoutes } from "./stack-events.routes";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../styles/theme";
import { StackAttractionsRoutes } from "./stack-attractions.routes";
import { StackLocationRoutes } from "./stack.local.routes";

export const TabRoutes = () => {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "#4e4744",
        },
        headerTintColor: "#fff",
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "#4e4744",
        tabBarLabelStyle: { paddingBottom: 10 },
        tabBarIconStyle: { top: 4 },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Eventos") {
            iconName = focused ? "beer" : "beer-outline";
          } else if (route.name === "Locais") {
            iconName = focused ? "map" : "map-outline";
          } else if (route.name === "P.Turisticos") {
            iconName = focused ? "compass" : "compass-outline";
          } else if (route.name === "Contato") {
            iconName = focused ? "phone-portrait" : "phone-portrait-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? theme.colors.primary : "#888888"}
            />
          );
        },
      })}
    >
      <Screen
        name="Home"
        component={StackHomeRoutes}
        options={{ headerShown: false }}
      />
      <Screen
        name="Eventos"
        component={StackEventsRoutes}
        options={{ headerShown: false }}
      />
      <Screen
        name="Locais"
        component={StackLocationRoutes}
        options={{ headerShown: false }}
      />
      <Screen
        name="P.Turisticos"
        component={StackAttractionsRoutes}
        options={{ headerShown: false }}
      />
      <Screen
        name="Contato"
        component={Contact}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
