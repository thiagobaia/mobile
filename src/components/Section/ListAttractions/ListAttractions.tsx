import { FlashList } from "@shopify/flash-list";
import { Container, Title } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Load } from "../../Elements/Load/Load";
import { SearchInput } from "../../Elements/SearchInput/SearchInput";
import { EmptyError } from "../../Elements/EmptyError/EmptyError";
import { CardLocalList } from "../../Elements/CardLocalList/CardLocalList";

export const ListAttractions: React.FC = () => {
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
          data={initialData}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <EmptyError componentName={"Pontos Turisticos"} />
          }
          renderItem={({ item }: any) => (
            <CardLocalList
              key={item.attractionId}
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
