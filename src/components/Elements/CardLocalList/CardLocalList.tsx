import React from "react";
import {
  Container,
  Photo,
  ContainerDescription,
  Description,
  Title,
  Text,
  ContainerInfo,
  P,
  PhotoContainer,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import { navigationRef } from "../../../RootNavigation";

export interface CardLocalListModel {
  id?: number;
  name: string;
  city: string;
  photo: string;
  description: string;
  routeScreen?: any;
  dataItem?: any;
  navigateString?: any;
}

export const CardLocalList = ({
  photo,
  name,
  city,
  description,
  routeScreen,
  dataItem,
  navigateString,
}: CardLocalListModel) => {
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
      <PhotoContainer>
        <Photo source={{ uri: `${photo}` }} />
      </PhotoContainer>

      <ContainerDescription>
        <Title>{name}</Title>

        <Description>
          <P>
            {description.length <= 99
              ? description
              : description.slice(0, 99 - 3) + "..."}
          </P>
        </Description>

        <ContainerInfo>
          <Ionicons name="location-outline" size={15} color="black" />
          <Text>{city}</Text>
        </ContainerInfo>
      </ContainerDescription>
    </Container>
  );
};
