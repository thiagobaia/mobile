import React, { useState } from "react";
import { Modal, SafeAreaView, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  ContainerSwiper,
  Galery,
  ImageGalery,
  MaskModal,
  ModalContainer,
  PhotoPress,
  TextMaskModal,
} from "./styles";

import { ModalGalleryTypes } from "./modalGallery.model";
import Swiper from "react-native-swiper";
import { CardSliderPartnersItem } from "../../Elements/CardSliderPartnersItem/CardSliderPartnersItem";

const styles = StyleSheet.create({
  wrapper: {},
  text: {
    color: "white",
    fontSize: 50,
    fontWeight: "normal",
  },
});

export const ModalGallery = ({ photoGallery }: ModalGalleryTypes) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
        >
          <ModalContainer>
            <AntDesign
              onPress={() => {
                setShowModal(!showModal);
              }}
              name="close"
              size={40}
              color="white"
              style={{ position: "absolute", top: 100, right: 20, zIndex: 9 }}
            />

            <ContainerSwiper>
              <Swiper
                showsButtons={true}
                nextButton={<Text style={styles.text}>›</Text>}
                prevButton={<Text style={styles.text}>‹</Text>}
                height={280}
                activeDotStyle={{ display: "none" }}
              >
                {photoGallery.map((item: any) => {
                  return (
                    <CardSliderPartnersItem
                      photo={`${process.env.API_URL}${item.url}`}
                      key={item.id}
                    />
                  );
                })}
              </Swiper>
            </ContainerSwiper>
          </ModalContainer>
        </Modal>
        <Galery>
          {photoGallery.slice(0, 3).map((item: any) => {
            return (
              <PhotoPress
                key={item.id}
                onPress={() => {
                  setShowModal(!showModal);
                }}
              >
                <ImageGalery
                  source={{ uri: `${process.env.API_URL}${item.url}` }}
                  key={item.id}
                />
              </PhotoPress>
            );
          })}
          {photoGallery.length > 3 && (
            <MaskModal
              onPress={() => {
                setShowModal(!showModal);
              }}
            >
              <TextMaskModal>+{photoGallery.length - 3 }</TextMaskModal>
            </MaskModal>
          )}
        </Galery>
      </Container>
    </SafeAreaView>
  );
};
