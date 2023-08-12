import React from "react";
import { StoryObj } from "@storybook/react-native";
import { CardSliderPartnersItem } from "./CardSliderPartnersItem";
import { DataPartners } from "../../../model/interfaces";

export default {
  title: "Components/Elements/Card/CardSliderPartnersItem",
  component: CardSliderPartnersItem,
  argTypes: {},
} 

export const Default: StoryObj<DataPartners> = {
  args: {

    photo:
      "https://static.portaldacidade.com/unsafe/842x0/https://s3.amazonaws.com/tucurui.portaldacidade.com/img/news/editor/editor-60f57b5fada7e.png",
  },
};
