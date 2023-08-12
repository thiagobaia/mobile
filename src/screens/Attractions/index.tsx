import React, { useEffect, useState } from "react";
import axios from "axios";

import { Linking, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { BackBtn } from "../../components/Elements/BackBtn/BackBtn";
import { Assessment } from "../../components/Elements/Assessment/Assessment";
import { ModalGallery } from "../../../src/components/Compositions/ModalGallery";
import { FontAwesome } from "@expo/vector-icons";
import { Load } from "../../components/Elements/Load/Load";
import { api } from "../../services/api";

import {
  Container,
  ContainerContent,
  ContentDescription,
  TextTitle,
  Local,
  Photo,
  Tag,
  Info,
  ContainerInfo,
  Maps,
} from "./styles";

export const Attractions = () => {
  const [loading, setLoading] = useState(true);
  const [avaliacao, setAvaliacao] = useState("");

  async function getAttraction() {
    try {
      const responseAvaliacao = await axios.get(
        "https://maps.googleapis.com/maps/api/place/details/json?place_id=" +
          `${placeId}` +
          "&fields=name%2Crating&key=AIzaSyCOtbhY5ghwlQz8Nj500BdGE4fyIC53bL8"
      );
      setAvaliacao(responseAvaliacao.data.result.rating);

 
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAttraction();
  }, []);

  const route = useRoute();
  const {
    description,
    facebook,
    instagram,
    whatsapp,
    maps,
    place,
    placeId,
    category,
    image,
    galery,
  }: any = route.params;

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Container showsVerticalScrollIndicator={false}>
        <Photo source={{ uri: `${process.env.API_URL}${image.url}` }} />
        <BackBtn color="white" text={"voltar"} />

        <View
          style={{
            backgroundColor: "white",
            position: "relative",
            top: -26,
            borderRadius: 20,
            flex: 1,
          }}
        >
          <Local>{place}</Local>
          <View
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {loading ? <Load /> : <Assessment note={avaliacao} />}

      
              <Tag>{category.name}</Tag>
            
          </View>
          <TextTitle>Descrição:</TextTitle>
          <ContainerContent>
            <ContentDescription>{description}</ContentDescription>
          </ContainerContent>

          {facebook && instagram && whatsapp == "" && (
            <TextTitle>Contatos</TextTitle>
          )}
          <ContainerInfo>
            {facebook && (
              <Info>
                <FontAwesome
                  name="facebook-square"
                  size={40}
                  color="#005e2a"
                  onPress={() => Linking.openURL(facebook)}
                />
              </Info>
            )}
            {instagram && (
              <Info>
                <FontAwesome
                  name="instagram"
                  size={40}
                  color="#005e2a"
                  onPress={() => Linking.openURL(instagram)}
                />
              </Info>
            )}
            {whatsapp && (
              <Info>
                <FontAwesome
                  name="whatsapp"
                  size={40}
                  color="#005e2a"
                  onPress={() => Linking.openURL(whatsapp)}
                />
              </Info>
            )}
          </ContainerInfo>

          {loading ? <Load /> : <ModalGallery photoGallery={galery} />}

          <Maps onPress={() => Linking.openURL(maps)}>VER NO GOOGLE MAPS</Maps>
        </View>
      </Container>
    </View>
  );
};
