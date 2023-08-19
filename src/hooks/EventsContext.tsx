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
  loadMoreItem: () => void;
}

const EventContext = createContext<EventsContextData>({} as EventsContextData);

export const EventProvider = ({ children }: EventProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [originalData, setOriginalData] = useState<IEvent[]>([]);
  const [initialData, setInitialData] = useState<IEvent[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const start = +currentPage === 1 ? 0 : (+currentPage - 1) * 5;

  async function getEvents() {
    try {
      setLoading(true);
      const response = await api.get(`/events?_limit=5&_start=${start}`);
      if (response.data) {
        setInitialData([...initialData, ...response.data]);
        setOriginalData([...originalData, ...response.data]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  function getSearch(searchText: string) {
    let arr = JSON.parse(JSON.stringify(originalData));
    setInitialData(
      arr.filter((d: any) => d.name.toLowerCase().includes(searchText))
    );
  }

  useEffect(() => {
    getEvents();
  }, [currentPage]);

  return (
    <EventContext.Provider
      value={{
        events: initialData,
        originalData: originalData,
        loading: loading,
        getSearch,
        loadMoreItem,
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
