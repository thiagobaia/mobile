import { FlashList } from "@shopify/flash-list";
import { Container, Title } from "./styles";
import { Load } from "../../Elements/Load/Load";
import { CardLocalListModel } from "../../../model/interfaces";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { SearchInput } from "../../Elements/SearchInput/SearchInput";
import { EmptyError } from "../../Elements/EmptyError/EmptyError";
import { CardLocalList } from "../../Elements/CardLocalList/CardLocalList";

export const ListEvents: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState<CardLocalListModel[]>([]);
  const [originalData, setOriginalData] = useState([]);

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

  function getSearch(searchText: any) {
    let arr = JSON.parse(JSON.stringify(originalData));
    setInitialData(
      arr.filter((d: any) => d.name.toLowerCase().includes(searchText))
    );
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Container>
      <Title>Evento</Title>
      <SearchInput
        placeholderInput={"Pesquisar evento..."}
        textInput={(searchText: any) => getSearch(searchText.toLowerCase())}
      />
      {loading ? (
        <Load />
      ) : (
        <FlashList
          numColumns={1}
          data={initialData}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyError componentName={"Eventos"} />}
          renderItem={({ item }: { item: CardLocalListModel }) => (
            <CardLocalList
              key={item.eventId}
              name={item.name}
              photo={`${process.env.API_URL}${item.image.url}`}
              description={item.description}
              city={item.city}
              dataItem={item}
              navigateString={"EventsScreen"}
            />
          )}
          estimatedItemSize={200}
        />
      )}
    </Container>
  );
};
