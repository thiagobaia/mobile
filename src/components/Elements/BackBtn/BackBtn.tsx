import React from "react";
import { Container, Title } from "./styles";
import { SimpleLineIcons } from "@expo/vector-icons";
import { openScreen } from "../../../RootNavigation";
// import { useNavigation } from "@react-navigation/native";

export interface ButtonBackModel {
  text: string;
  color: string;
}

export const BackBtn = ({ text, color }: ButtonBackModel) => {
  return (
    <Container onPress={() => openScreen()}>
      <SimpleLineIcons name="arrow-left-circle" size={24} color={`${color}`} />
      <Title $color={`${color}`}>{text}</Title>
    </Container>
  );
};
