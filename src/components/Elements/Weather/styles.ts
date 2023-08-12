import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Local = styled.View`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
`;

export const City = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;

export const Widget = styled.View`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

export const Temp = styled.View`
  display: flex;
  flex-direction: row;
`;

export const TextTempCelcius = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;

export const TextNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(40)}px;
`;
