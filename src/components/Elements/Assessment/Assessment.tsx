import React from "react";
import { Container, Note } from "./styles";
import { AntDesign } from "@expo/vector-icons";

export interface AssessmentModel {
  note: any;
}

export const Assessment = ({ note }: AssessmentModel) => {
  return (
    <Container>
      <AntDesign name="star" size={24} color="#FAA419" />
      <Note>{note}</Note>
    </Container>
  );
};
