import { ScrollView } from "react-native";
import { BackgroundTop, ContainerHome } from "./styles";
import { SliderPartners } from "../../../src/components/SliderPartners";
import { DataPartners } from "../../model/interfaces";
import { SliderSection } from "../../../src/components/SliderSection";
import { View } from "react-native";
import { theme } from "../../styles/theme";
import { ListAttractionsData } from "../../mocks/DataMocks.mock";
import { Weather } from "../../components/Elements/Weather/Weather";


export const ListPartners: DataPartners[] = [
  {
    id: 1,
    partners: "Abs Distribuidora",
    photo:
      "uploads/2023-07-02T04:08:33.875ZGusttavo Lima.png",
  },
  {
    id: 2,
    partners: "BR Food",
    photo:
      "uploads/2023-07-02T04:08:33.875ZGusttavo Lima.png",
  },
  {
    id: 3,
    partners: "Supermercado Supernorte",
    photo:
      "uploads/2023-07-02T04:08:33.875ZGusttavo Lima.png",
  },
];

export const Home = () => {
  return (
    <View style={{ backgroundColor: `${theme.colors.shape}` }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackgroundTop source={require("../../../assets/UHT.png")}>
          <Weather/>
        </BackgroundTop>

        <ContainerHome>
          <SliderPartners
            title="Parceiros"
            seeall="Ver Mais"
            data={ListPartners}
            routeScreen={"Parceiros"}
          />
          <SliderSection
            title="Em Destaque"
            seeall="Ver todos"
            dataCardSliderItem={ListAttractionsData}
            routeScreen={"Em Destaque"}
          />
          <SliderSection
            title="Eventos"
            seeall="Ver todos"
            dataCardSliderItem={ListAttractionsData}
            routeScreen={"Eventos"}
          />
          <SliderSection
            title="Pontos Turísticos"
            seeall="Ver todos"
            dataCardSliderItem={ListAttractionsData}
            routeScreen={"P.Turisticos"}
          />
        </ContainerHome>
      </ScrollView>
    </View>
  );
};
