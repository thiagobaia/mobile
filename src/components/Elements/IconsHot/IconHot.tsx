import React from "react";
import { Container, Image } from "./styles";
export interface IconHotProps {
  url: any;
  size: string;
}

export function IconHot({ url, size }: IconHotProps) {
  return (
    <Container>
      <Image source={{ uri: url }} $size={size} />
    </Container>
  );
}
