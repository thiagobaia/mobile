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
}

const SponsorsContext = createContext<SponsorsContextData>(
  {} as SponsorsContextData
);

export const SponsorsProvider = ({ children }: SponsorsProviderProps) => {
  const [sponsorsData, setSponsorsData] = useState<ISponsors[]>([]);

  async function getSponsors() {
    try {
      const response = await api.get("/sponsors");
      setSponsorsData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSponsors();
  }, []);

  return (
    <SponsorsContext.Provider
      value={{
        sponsors: sponsorsData,
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
