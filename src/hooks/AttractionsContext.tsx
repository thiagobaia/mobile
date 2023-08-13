import {
    createContext,
    useEffect,
    useState,
    ReactNode,
    useContext,
  } from "react";
  
  import { api } from "../services/api";
  
  interface IAttractions {
    id: number;
    place: string;
    placeId:string;
    city: string;
    description: string;
    facebook: string;
    instagram: string;
    whatsapp: string;
    maps: string;
    image:any;
    galery: any;
    category:string;
  }
  
  interface TransactionsProviderProps {
    children: ReactNode;
  }
  
  interface AttractionsContextData {
    attractions: IAttractions[];
    originalData: IAttractions[];
    loading: boolean;
    getSearch: (searchText: string) => void;
  }
  
  const AttractionsContext = createContext<AttractionsContextData>({} as AttractionsContextData);
  
  export const AttractionsProvider = ({ children }: TransactionsProviderProps) => {

    const [loading, setLoading] = useState(true);
    const [initialData, setInitialData] = useState<any[]>([]);
    const [originalData, setOriginalData] = useState([]);
  
    async function getAttractions() {
      try {
        const response = await api.get("/attractions");
        setInitialData(response.data);
        setOriginalData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  
    function getSearch(searchText: any) {
      let arr = JSON.parse(JSON.stringify(originalData));
      setInitialData(
        arr.filter((d: any) => d.place.toLowerCase().includes(searchText))
      );
    }
  
    useEffect(() => {
      getAttractions();
    }, []);
  

  
    return (
      <AttractionsContext.Provider
        value={{
          attractions: initialData,
          originalData: originalData,
          loading: loading,
          getSearch,
        }}
      >
        {children}
      </AttractionsContext.Provider>
    );
  };
  
  export const useAttractions = (): AttractionsContextData => {
    const context = useContext(AttractionsContext);
    return context;
  };
  