import React from "react";
import { Container, Name, SectionOne } from "./styles";
import { navigationRef } from "../../../RootNavigation";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../../../styles/theme";

export interface PlaceElementModel {
  name: string;
  icon: any;
  dataItem?: any;
  navigateString?: any;
}

export function PlaceElement({
  name,
  icon,
  navigateString,
  dataItem,
}: PlaceElementModel) {
  const PlaceElementNavigation = () => {
    navigationRef.navigate(navigateString, dataItem);
  };

  return (
    <Container>
      <SectionOne onPress={PlaceElementNavigation}>
        <FontAwesome5 name={icon} size={25} color={theme.colors.primary} />
        <Name>{name}</Name>
      </SectionOne>
    </Container>
  );
}
