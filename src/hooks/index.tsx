import React, { ReactNode } from "react";

import { EventProvider } from "./EventsContext";
import { AttractionsProvider } from "./AttractionsContext";
import { LocalProvider } from "./LocalContext";
import { SponsorsProvider } from "./SponsorsContext";
import { WeatherProvider } from "./WeatherContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <EventProvider>
      <AttractionsProvider>
        <LocalProvider>
          <SponsorsProvider>
            <WeatherProvider>{children}</WeatherProvider>
          </SponsorsProvider>
        </LocalProvider>
      </AttractionsProvider>
    </EventProvider>
  );
};
