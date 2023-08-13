import React from "react";
import {
  Container,
  ContainerInfo,
  ContainerPhoto,
  ContainerTitle,
  Photo,
} from "./styles";

import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import { navigationRef } from "../../../RootNavigation";

export interface CardOptionHomeModel {
  id?: number;
  name: string;
  city: string;
  place: string;
  photo: any;
  routeScreen?: any;
  dataItem?: any;
  navigateString?: any;
}

export const CardOptionHome = ({
  photo,
  name,
  place,
  city,
  routeScreen,
  dataItem,
  navigateString,
}: CardOptionHomeModel) => {
  const CardOptionHomeNavigation = () => {
    if (!routeScreen) {
      navigationRef.navigate(navigateString, dataItem);
    } else {
      navigationRef.dispatch(
        CommonActions.navigate({
          name: routeScreen,
        })
      );
    }
  };

  return (
    <Container onPress={CardOptionHomeNavigation}>
      <ContainerPhoto>
        <Photo source={{ uri: `${photo}` }} />
      </ContainerPhoto>

      <ContainerTitle>

        {name ? <Text>{name}</Text> : <Text>{place}</Text>}
        
      </ContainerTitle>

      <ContainerInfo>
        <Ionicons name="location-outline" size={15} color="black" />
        <Text>{city}</Text>
      </ContainerInfo>
    </Container>
  );
};
