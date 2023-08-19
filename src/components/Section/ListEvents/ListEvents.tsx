import { FlashList } from "@shopify/flash-list";
import { Container } from "./styles";
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
  const { events, loading, getSearch, loadMoreItem } = useEvent();
  return (
    <Container>
      <SearchInput
        placeholderInput={"Pesquisar evento..."}
        textInput={(searchText: string) => getSearch(searchText.toLowerCase())}
      />
      <FlashList
        numColumns={1}
        data={events}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyError componentName={"sua pesquisa não foi encontrada"} />
        }
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
        ListFooterComponent={!loading ? <Load /> : null}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0.2}
        estimatedItemSize={200}
      />
    </Container>
  );
};
