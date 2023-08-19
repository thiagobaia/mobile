import React from "react";
import styled from "styled-components/native";
import { theme } from "../../../styles/theme";

export const Container = styled.View`
  padding: 30px 15px;
  display: flex;
  flex: 1;
  row-gap: 15px;
  background: ${theme.colors.shape};
`;

export const Title = styled.Text`
  margin: 15px 0px 10px;
  font-size: 18px;
  color: ${theme.colors.titlePrincipal};
`;


