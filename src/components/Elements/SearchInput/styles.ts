import styled from "styled-components/native";
import { theme } from "../../../styles/theme";

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  max-height: 50px;
  border-radius: 8px;
  margin: 30px 0px;
  background: ${theme.colors.shape};
  border: rgba(0, 0, 0, 0.73) solid 0.5px;
`;


