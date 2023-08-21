import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { BackBtn } from "../../components/Elements/BackBtn/BackBtn";
import { useRoute } from "@react-navigation/native";
import { Linking, View } from "react-native";

import {
  ContainerInfo,
  Local,
  Maps,
  Tag,
  TextTitle,
  TitleSecundary,
  Text,
} from "./styles";

export const Locations = () => {
  const route = useRoute();
  const {
    name,
    phone,
    adress,
    maps,
    category,
    latitude,
    latitudeDelta,
    longitude,
    longitudeDelta,
  }: any = route.params;

  // const onRegionChange = (region:any) => {
  //   console.log(region);
  // };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <BackBtn color="black" text={"voltar"} />
      <TitleSecundary>
        <Local>{name}</Local>
        <Tag>{category.name}</Tag>
      </TitleSecundary>

      <TextTitle>Informações:</TextTitle>

      <ContainerInfo>
        <Text>Endereço: {adress}</Text>
        <Text>Telefone: {phone}</Text>

        <MapView
          style={{ width: "100%", height: "60%" }}
          provider={PROVIDER_GOOGLE}
          // onRegionChange={onRegionChange}
          region={{
            latitude,
            latitudeDelta,
            longitude,
            longitudeDelta,
          }}
        >
          <Marker pinColor="#e0230b" coordinate={{ latitude, longitude }} />
        </MapView>

        <Maps onPress={() => Linking.openURL(maps)}>VER NO GOOGLE MAPS</Maps>
      </ContainerInfo>
    </View>
  );
};
