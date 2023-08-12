import React from "react";
import styled from "styled-components/native";
import { theme } from "../../../styles/theme";

export const Container = styled.TouchableOpacity`
  background: transparent;
  position: absolute;
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  align-items: center;
  justify-content: center;
  top: 30px;
  left: 20px;
`;

export const Title = styled.Text<{ $color: string; }>`
 color: ${theme.colors.shape};
 color: ${props => props.$color};
 text-transform: uppercase;
 font-weight: 600;
`;


