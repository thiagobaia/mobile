import styled from "styled-components/native";
import { theme } from "../../../styles/theme";


export const Container = styled.View`
  padding: 15px 15px;
  display: flex;
  flex: 1;
  background: ${theme.colors.shape};
`;

export const Title = styled.Text`
  margin: 15px 0px 0;
  font-size: 18px;
  color: ${theme.colors.titlePrincipal};
`;
