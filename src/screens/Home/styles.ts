import styled from "styled-components/native";
import { theme } from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const BackgroundTop = styled.ImageBackground`
  display: flex;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerHome = styled.View`
  position: relative;
  background: ${theme.colors.shape};
  width: 100%;
  border-radius: 25px 25px 0px 0;
  display: flex;
  padding: 30px 0 0;
  top: -25px;
`;

