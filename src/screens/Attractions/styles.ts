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
  padding: 40px 15px 15px;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #1e1e1e;
`;

export const Tag = styled.Text`
  border: 1px black solid;
  border-radius: 15px;
  padding: 7px 10px;
  max-width: 135px;
  text-align: center;
  margin: 22px 15px 25px;
`;

export const TextTitle = styled.Text`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 14px;
  margin: 15px 15px;
  color: #1e1e1e;
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
  margin: 20px 20px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
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
  margin: 41px 15px 15px;
  position: relative;
  text-align: right;
`;
