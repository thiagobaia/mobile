import { FlashList } from "@shopify/flash-list";
import { Container, Title } from "./styles";
import { Load } from "../../Elements/Load/Load";
import { useEffect, useState } from "react";
import { PlaceElement } from "../../Elements/PlaceElement/PlaceElement";
import { PropsModel, iconsData } from "../../../mocks/icons.mock";
import { EmptyError } from "../../Elements/EmptyError/EmptyError";

export const ListLocal: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [locais, setLocais] = useState<PropsModel[]>([]);

  async function getEvents() {
    try {
      setLocais(iconsData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Container>
      <Title>Locais</Title>
      {loading ? (
        <Load />
      ) : (
        <FlashList
          numColumns={1}
          data={locais}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyError componentName={"Locais"} />}
          renderItem={({ item }: { item: PropsModel }) => (
            <PlaceElement
              key={item.name}
              icon={item.icon}
              name={item.name}
              navigateString={"LocationsScreen2"}
              dataItem={item}
            />
          )}
          estimatedItemSize={200}
        />
      )}
    </Container>
  );
};
