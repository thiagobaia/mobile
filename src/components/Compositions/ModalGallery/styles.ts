import React from "react";
import styled from "styled-components/native";

export const Galery = styled.View`
  padding: 0px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageGalery = styled.Image`
  flex: 1;
  object-fit: cover;
`;

export const PhotoPress = styled.TouchableOpacity`
  width: 115px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
`;

export const MaskModal = styled.TouchableOpacity`
  width: 115px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 14px;
`;

export const TextMaskModal = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

export const Container = styled.View`
  flex: 1;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
`;

export const ModalText = styled.Text`
  font-size: 20px;
  color: white;
  margin-bottom: 20px;
`;

export const ContainerSwiper = styled.View`
  height: 400px;
  width: 100%;
`;
