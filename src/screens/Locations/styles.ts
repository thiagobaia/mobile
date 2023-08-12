import React from "react";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  width: 100%;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 400px;
`;

export const Local = styled.Text`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 18px;
  color: #1e1e1e;
`;

export const Tag = styled.Text`
  border: 1px black solid;
  border-radius: 15px;
  padding: 7px 10px;
  max-width: 135px;
  text-align: center;
`;

export const HeaderInfo = styled.View`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0px 15px;
`;

export const TextTitle = styled.Text`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 14px;
  margin: 15px 15px 0px;
  color: #1e1e1e;
  text-transform: capitalize;
`;

export const ContainerContent = styled.View`
  display: flex;
  max-width: 350px;
  margin: 15px 15px 0px;
`;

export const ContentDescription = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  text-align: left;
`;

export const ContainerInfo = styled.View`
  margin: 10px 20px 5px;
  display: flex;
  row-gap: 10px;
`;

export const Info = styled.View`
  font-weight: 400;
`;

export const Maps = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #005e2a;
  margin: 10px 15px 15px;
  position: relative;
  text-align: right;
`;

export const TitleSecundary = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 80px 15px 0px;
`;

export const Text = styled.Text`
  font-size: 14px;
`;

