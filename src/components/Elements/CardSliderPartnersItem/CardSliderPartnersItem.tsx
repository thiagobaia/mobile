import React from "react";

import { Container, Image } from "./styles";
import { DataPartners } from "../../../model/interfaces";

export function CardSliderPartnersItem({ photo }: DataPartners) {
  return (
    <Container>
      <Image source={{ uri: photo }} />
    </Container>
  );
}
