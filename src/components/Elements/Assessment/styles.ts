import React from "react";
import styled from "styled-components/native";
import { theme } from "../../src/styles/theme";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  margin: 0 15px;
`;

export const Note = styled.Text`
  font-weight: 500;
`;
