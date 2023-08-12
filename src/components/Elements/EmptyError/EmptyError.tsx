import React from "react";
import { Container, Text, ErrorIcon } from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface EmptyErrorModel {
  componentName: string;
}

export function EmptyError({ componentName }: EmptyErrorModel) {
  return (
    <Container>
      <ErrorIcon>
        <Ionicons name="alert-circle-outline" size={40} color="white" />
      </ErrorIcon>

      <Text>
        Ops!, não encontramos {componentName} cadastrados ou tivemos algum
        problema no servidor, tente mais tarde.
      </Text>
    </Container>
  );
}
