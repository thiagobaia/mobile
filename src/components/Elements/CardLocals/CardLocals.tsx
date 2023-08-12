import React from "react";
import { Container, Image, Text } from "./styles";
import { navigationRef } from "../../../RootNavigation";

interface PropsLocals {
  url: any;
  name: string;
  dataItem?: any;
  navigateString?: any;
}

export function CardLocals({
  url,
  name,
  dataItem,
  navigateString,
}: PropsLocals) {
  const PlaceElementNavigation = () => {
    navigationRef.navigate(navigateString, dataItem);
  };

  return (
    <Container onPress={PlaceElementNavigation}>
      <Image source={{ uri: url}} />
      <Text>{name}</Text>
    </Container>
  );
}
