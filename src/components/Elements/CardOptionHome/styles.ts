import React from "react";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin: 0px 8px;
`;

export const ContainerPhoto = styled.View`
  width: 168px;
  height: 240px;
  border-radius: 7px;
  background: gray;
  overflow: hidden;
`;

export const Photo = styled.Image`
  flex: 1;
  width: undefined;
  height: undefined;
  object-fit: cover;
`;

export const ContainerTitle = styled.View`
  margin: 10px 5px 0px;
`;

export const ContainerInfo = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px 5px;
  align-items: center;
  column-gap: 5px;
`;
