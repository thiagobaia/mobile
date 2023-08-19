import { ScrollView } from "react-native";
import { BackgroundTop, ContainerHome } from "./styles";
import { SliderPartners } from "../../../src/components/SliderPartners";
import { SliderSection } from "../../../src/components/SliderSection";
import { View } from "react-native";
import { theme } from "../../styles/theme";
import { Weather } from "../../components/Elements/Weather/Weather";
import { useAttractions } from "../../hooks/AttractionsContext";
import { useEvent } from "../../hooks/EventsContext";
import { useSponsors } from "../../hooks/SponsorsContext";
import { useWeather } from "../../hooks/WeatherContext";

export const Home = () => {
  const { attractions } = useAttractions();
  const { events } = useEvent();
  const { sponsors } = useSponsors();
  const { weather, loading } = useWeather();

  return (
    <View style={{ backgroundColor: `${theme.colors.shape}` }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackgroundTop source={require("../../../assets/UHT.png")}>
          <Weather
            loading={loading}
            city={weather.city}
            rain={weather.rain}
            temp={weather.temp}
          />
        </BackgroundTop>

        <ContainerHome>
          <SliderPartners
            title="Parceiros"
            seeall="Ver Mais"
            data={sponsors}
            routeScreen={"Parceiros"}
          />
          <SliderSection
            title="Em Destaque"
            seeall="Ver todos"
            dataCardSliderItem={events}
            routeScreen={"Em Destaque"}
          />
          <SliderSection
            title="Eventos"
            seeall="Ver todos"
            dataCardSliderItem={events}
            routeScreen={"Eventos"}
          />
          <SliderSection
            title="Pontos Turísticos"
            seeall="Ver todos"
            dataCardSliderItem={attractions}
            routeScreen={"P.Turisticos"}
          />
        </ContainerHome>
      </ScrollView>
    </View>
  );
};
