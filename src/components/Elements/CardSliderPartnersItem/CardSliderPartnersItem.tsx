import React from "react";

import { Container, Image } from "./styles";


interface DataPartners {
  id?: number;
  partners?: string;
  image?: any;
}

export function CardSliderPartnersItem({ image }: DataPartners) {
  return (
    <Container>
      <Image source={{ uri: `${image}` }}/>
    </Container>
  );
}
