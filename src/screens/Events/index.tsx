import React from "react";
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
  HeaderInfo,
} from "./styles";
import { Linking, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { BackBtn } from "../../components/Elements/BackBtn/BackBtn";

export const Events = () => {
  const route = useRoute();
  const {
    id,
    name,
    description,
    place,
    image,
    maps,
    prohibited,
    outlets,
    date,
    category,
  }: any = route.params;

  function formatData(data: string) {
    const splitData = data.split("-");
    const dataFormat = `${splitData[2]}/${splitData[1]}/${splitData[0]}`;
    return dataFormat;
  }

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
          <HeaderInfo>
            <Local>{name}</Local>
            <Tag>{category.name}</Tag>
          </HeaderInfo>

          <TextTitle>Descrição:</TextTitle>
          <ContainerContent>
            <ContentDescription>{description}</ContentDescription>
          </ContainerContent>
          <TextTitle>Informações:</TextTitle>

          <ContainerInfo key={id}>
            <Text>Data: {formatData(date)}</Text>
            <Text>Local: {place}</Text>
            {prohibited == "Pago" ? (
              <View>
                <Text style={{ marginBottom: 15 }}>
                  Entrada: <Text style={{ color: "red" }}>{prohibited}</Text>
                </Text>
                <Text
                  onPress={() => Linking.openURL(outlets)}
                  style={{ color: "blue" }}
                >
                  Clique aqui para comprar o ingresso
                </Text>
              </View>
            ) : (
              <Text>
                Entrada: <Text style={{ color: "green" }}>{prohibited}</Text>
              </Text>
            )}
          </ContainerInfo>

          <Maps onPress={() => Linking.openURL(maps)}>VER NO GOOGLE MAPS</Maps>
        </View>
      </Container>
    </View>
  );
};
