import React from "react";
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: #fff;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 15px;
  padding: 5px 15px;
  margin-bottom: 15px;
`;

export const Image = styled.Image`
width: 35px;
height: 35px;

`;

export const Text = styled.Text`
font-size: 15px;
  font-weight: 400;

`;


