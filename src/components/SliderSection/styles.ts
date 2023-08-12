import React from "react";
import styled from "styled-components/native";
import { theme } from "../../styles/theme";


export const ContainerSlider = styled.ScrollView`
  display: flex;
  width: 100%;
  padding: 0px 0px 0px 15px;
`;

export const TitleSlider = styled.View`
  margin-top: 15px;
  padding: 10px 10px 10px 0px;
  justify-content: space-between;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const Text1 = styled.Text`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 16px; 
  color: ${theme.colors.titlePrincipal};
  text-transform: uppercase;
`;

export const Text2 = styled.Text`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 12px;
  color: #374957;
  text-transform: uppercase;
`;

export const SliderItem = styled.ScrollView`
  display: flex;
`;

