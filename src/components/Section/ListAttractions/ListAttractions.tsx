import { FlashList } from "@shopify/flash-list";
import { Container, Title } from "./styles";
import { Load } from "../../Elements/Load/Load";
import { SearchInput } from "../../Elements/SearchInput/SearchInput";
import { EmptyError } from "../../Elements/EmptyError/EmptyError";
import { CardLocalList } from "../../Elements/CardLocalList/CardLocalList";
import { useAttractions } from "../../../hooks/AttractionsContext";

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


export const ListAttractions: React.FC = () => {
  const { attractions, loading, getSearch } = useAttractions();

  return (
    <Container>
      <Title>Pontos Turisticos</Title>
      <SearchInput
        placeholderInput={"Pesquisar ponto turistico..."}
        textInput={(searchText: any) => getSearch(searchText.toLowerCase())}
      />
      {loading ? (
        <Load />
      ) : (
        <FlashList
          numColumns={1}
          data={attractions}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <EmptyError componentName={"Pontos Turisticos"} />
          }
          renderItem={({ item }: { item: IAttractions }) => (
            <CardLocalList
              key={item.id}
              name={item.place}
              photo={`${process.env.API_URL}${item.image.url}`}
              description={item.description}
              city={item.city}
              dataItem={item}
              navigateString={"AttractionsScreen"}
            />
          )}
          estimatedItemSize={200}
        />
      )}
    </Container>
  );
};
