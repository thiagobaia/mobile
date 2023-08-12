import {
  ContainerSlider,
  ContainerSwiper,
  Text1,
  Text2,
  Titlelider,
} from "./style";
import { PropsPartners } from "../../model/interfaces";

import { View } from "react-native";
import Swiper from "react-native-swiper";
import { CardSliderPartnersItem } from "../Elements/CardSliderPartnersItem/CardSliderPartnersItem";
import { useNavigation } from "@react-navigation/native";

export const SliderPartners = ({
  data,
  title,
  seeall,
  routeScreen,
}: PropsPartners) => {
  const navigation = useNavigation();
  const openScreen = () => {
    navigation.navigate(routeScreen);
  };
  return (
    <ContainerSlider>
      <Titlelider>
        <Text1>{title}</Text1>
        <Text2 onPress={openScreen}>{seeall}</Text2>
      </Titlelider>

      <ContainerSwiper>
        <Swiper
          height={280}
          horizontal
          autoplay
          showsPagination={true}
          activeDot={
            <View
              style={{
                backgroundColor: "#00000082",
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
        >
          {data.map((item) => {
            return (
              <CardSliderPartnersItem
                key={item.id}
                photo={`${process.env.API_URL}/${item.photo}`}
                partners={item.partners}
              />
            );
          })}
        </Swiper>
      </ContainerSwiper>
    </ContainerSlider>
  );
};
