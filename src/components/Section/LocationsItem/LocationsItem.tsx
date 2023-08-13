import { Container, Title } from "./styles";
import { useRoute } from "@react-navigation/native";
import { CardLocals } from "../../Elements/CardLocals/CardLocals";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { BackBtn } from "../../Elements/BackBtn/BackBtn";
import { OpitonSection } from "../../../utils/opitionIcon";
import { FlashList } from "@shopify/flash-list";
import { Load } from "../../Elements/Load/Load";
import { EmptyError } from "../../Elements/EmptyError/EmptyError";
import { useLocal } from "../../../hooks/LocalContext";

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
  category: {
    name: string;
  };
}

export const LocationsItem: React.FC = () => {
  const [option, setOption] = useState<any>("");

  const route = useRoute();
  const { name }: any = route.params;

  const { loading, local } = useLocal();
  const dataLocal = local.filter((item) => item.category.name === option);

  useEffect(() => {
    setOption(OpitonSection(name));
  }, []);

  return (
    <Container>
      <BackBtn color="black" text={"voltar"} />
      {loading ? (
        <Load />
      ) : (
        <>
          <Title>{option}</Title>
          <FlashList
            numColumns={1}
            data={dataLocal}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyError componentName={option} />}
            renderItem={({ item }: { item: ILocal }) => (
              <CardLocals
                key={item.id}
                url={`${process.env.API_URL}${item.icon.url}`}
                name={item.name}
                dataItem={item}
                navigateString="LocationsScreen3"
              />
            )}
            estimatedItemSize={200}
          />
        </>
      )}
    </Container>
  );
};
