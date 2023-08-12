import React from "react";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Container } from "./styles";

interface SearchInputModel {
  placeholderInput: string;
  textInput: any;
}

export const SearchInput = ({
  placeholderInput,
  textInput,
}: SearchInputModel) => {
  return (
    <Container>
      <TextInput
        placeholder={placeholderInput}
        placeholderTextColor="#888888"
        onChangeText={textInput}
      />
      <Ionicons name="ios-search" size={24} color="#888888" />
    </Container>
  );
};
