import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  
`;


export const Image = styled.Image<{ $size: string; }>`
  object-fit: cover;
  height: ${props => props.$size}px;
  width: ${props => props.$size}px;
`;




