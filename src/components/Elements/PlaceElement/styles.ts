import React from "react";
import styled from "styled-components/native";
import { theme } from "../../../styles/theme";

export const Container = styled.View`
margin-bottom: 15px;
`;

export const Icon = styled.Image`
  height: 50px;
  width: 50px;
`;

export const Name = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: ${theme.colors.title};
`;


export const SectionOne = styled.TouchableOpacity`
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: #fff;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 15px;
  padding: 5px 15px;
`;
