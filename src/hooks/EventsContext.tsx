import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";

import { api } from "../services/api";

interface IEvent {
  id: number;
  name: string;
  place: string;
  city: string;
  date: Date;
  description: string;
  prohibited: string;
  maps: string;
  image: any;
  outlets: string;
  category: string;
}

interface EventProviderProps {
  children: ReactNode;
}

interface EventsContextData {
  events: IEvent[];
  originalData: IEvent[];
  loading: boolean;
  getSearch: (searchText: string) => void;
}

const EventContext = createContext<EventsContextData>({} as EventsContextData);

export const EventProvider = ({ children }: EventProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [originalData, setOriginalData] = useState<IEvent[]>([]);
  const [initialData, setInitialData] = useState<IEvent[]>([]);

  async function getEvents() {
    try {
      const response = await api.get("/events");
      setInitialData(response.data);
      setOriginalData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function getSearch(searchText: string) {
    let arr = JSON.parse(JSON.stringify(originalData));
    setInitialData(
      arr.filter((d: any) => d.name.toLowerCase().includes(searchText))
    );
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <EventContext.Provider
      value={{
        events: initialData,
        originalData: originalData,
        loading: loading,
        getSearch,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = (): EventsContextData => {
  const context = useContext(EventContext);
  return context;
};
