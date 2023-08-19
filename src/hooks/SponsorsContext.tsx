import {
    createContext,
    useEffect,
    useState,
    ReactNode,
    useContext,
  } from "react";
  
  import { api } from "../services/api";
  
  interface ISponsors {
    id: number;
    name: string;
    image: {
      url: string;
    };
  }
  
  interface SponsorsProviderProps {
    children: ReactNode;
  }
  
  interface SponsorsContextData {
    sponsors: ISponsors[];
    loading: boolean;
  }
  
  const SponsorsContext = createContext<SponsorsContextData>(
    {} as SponsorsContextData
  );
  
  export const SponsorsProvider = ({ children }: SponsorsProviderProps) => {
    const [sponsorsData, setSponsorsData] = useState<ISponsors[]>([]);
    const [loading, setLoading] = useState(false);
  
    async function getSponsors() {
      try {
        setLoading(true);
        const response = await api.get("/sponsors");
        setSponsorsData(response.data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getSponsors();
    }, []);
  
    return (
      <SponsorsContext.Provider
        value={{
          sponsors: sponsorsData,
          loading: loading,
        }}
      >
        {children}
      </SponsorsContext.Provider>
    );
  };
  
  export const useSponsors = (): SponsorsContextData => {
    const context = useContext(SponsorsContext);
    return context;
  };
  