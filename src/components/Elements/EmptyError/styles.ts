import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  max-height: 120px;
  background: #F0F2F5;
  margin-top: 10px;
`;

export const ErrorIcon = styled.View`
 display: flex;
 background: #f13328;
 height: 100%;
 justify-content: center;
 padding: 0 5px;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #f13328;
  line-height: 20px;
  width: 100%;
  max-width: 250px;
`;


