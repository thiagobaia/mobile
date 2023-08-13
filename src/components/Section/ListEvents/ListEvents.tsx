import { FlashList } from "@shopify/flash-list";
import { Container, Title } from "./styles";
import { Load } from "../../Elements/Load/Load";
import { SearchInput } from "../../Elements/SearchInput/SearchInput";
import { EmptyError } from "../../Elements/EmptyError/EmptyError";
import { CardLocalList } from "../../Elements/CardLocalList/CardLocalList";
import { useEvent } from "../../../hooks/EventsContext";

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

export const ListEvents: React.FC = () => {
  const { events, loading, getSearch } = useEvent();

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
          data={events}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyError componentName={"Eventos"} />}
          renderItem={({ item }: { item: IEvent }) => (
            <CardLocalList
              key={item.id}
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
