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

export const LocationsItem: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [option, setOption] = useState<any>("");

  const route = useRoute();
  const { name }: any = route.params;

  const dataLocal = data.filter((item) => item.category.name === option);

  async function getLocation() {
    try {
      const {data} = await api.get("/locals");
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getLocation();
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
            renderItem={({ item }: { item: any }) => (
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
