import { TabActions, useNavigation } from "@react-navigation/native";
import { CardOptionHome } from "../Elements/CardOptionHome/CardOptionHome";

import {
  ContainerSlider,
  SliderItem,
  Text1,
  Text2,
  TitleSlider,
} from "./styles";

export interface SliderSectionModel {
  dataCardSliderItem: any[];
  title: string;
  seeall: string;
  routeScreen: any;
}

export const SliderSection = ({
  dataCardSliderItem,
  title,
  seeall,
  routeScreen,
}: SliderSectionModel) => {
  const navigation = useNavigation();
  const openScreen = () => {
    const jumpToAction = TabActions.jumpTo(routeScreen);
    if (routeScreen == "Em Destaque") {
      navigation.navigate(routeScreen);
    } else {
      navigation.dispatch(jumpToAction);
    }
  };
  return (
    <ContainerSlider>
      <TitleSlider>
        <Text1>{title}</Text1>
        <Text2 onPress={openScreen}>{seeall}</Text2>
      </TitleSlider>

      <SliderItem horizontal showsHorizontalScrollIndicator={false}>
        {dataCardSliderItem.map((item) => {
          return (
            <CardOptionHome
              routeScreen={routeScreen}
              key={item.id}
              photo={`${process.env.API_URL}${item.image.url}`}
              place={item.place}
              name={item.name}
              city={item.city}
            />
          );
        })}
      </SliderItem>
    </ContainerSlider>
  );
};
