import React from "react";
import styled from "styled-components/native";

export const Image = styled.Image`
  background: transparent;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 400px;
  border-radius: 5px;
`;

export const Container = styled.View`
  display: flex;
  flex: 1;
  height: 350px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;


