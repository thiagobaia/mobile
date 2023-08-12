import React from "react";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  flex: 1;
  border-radius: 5px;
  border: 0.2px solid #000;
  padding: 10px;
  column-gap: 10px;
  margin-bottom: 15px;
`;

export const PhotoContainer = styled.View`
  width: 85px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Photo = styled.Image`
  width: 85px;
  height: 120px;
  border-radius: 5px;
`;

export const ContainerDescription = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  margin: 0 0 8px;
`;

export const Description = styled.View`
  width: 100%;
  max-width: 232px;
`;

export const P = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;

export const ContainerTitle = styled.View``;

export const ContainerInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 7px;
  margin: 9px 0 0;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(12)}px;
`;
