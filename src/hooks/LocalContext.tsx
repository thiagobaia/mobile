import {
    createContext,
    useEffect,
    useState,
    ReactNode,
    useContext,
  } from "react";
  
  import { api } from "../services/api";
  
  interface ILocal {
    id: number;
    name: string;
    phone: string;
    adress: string;
    maps: string;
    icon: any;
    latitude: number;
    latitudeDelta: number;
    longitude: number;
    longitudeDelta: number;
    category:{
      name:string;
    };
  }
  
  interface LocalProviderProps {
    children: ReactNode;
  }
  
  interface LocalContextData {
    local: ILocal[];
    loading: boolean;
  }
  
  const LocalContext = createContext<LocalContextData>({} as LocalContextData);
  
  export const LocalProvider = ({ children }: LocalProviderProps) => {
    const [loading, setLoading] = useState(true);
    const [localData, setLocalData] = useState<ILocal[]>([]);

    async function getLocal() {
      try {
        const response = await api.get("/locals");
        setLocalData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
        getLocal();
    }, []);
  
    return (
      <LocalContext.Provider
        value={{
          local: localData,
          loading: loading,
          
        }}
      >
        {children}
      </LocalContext.Provider>
    );
  };
  
  export const useLocal = (): LocalContextData => {
    const context = useContext(LocalContext);
    return context;
  };
  