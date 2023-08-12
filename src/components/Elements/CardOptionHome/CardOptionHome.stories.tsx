import React from "react";
import { ComponentMeta, StoryObj } from "@storybook/react-native";
import { CardOptionHome, CardOptionHomeModel } from "./CardOptionHome";

export default {
  title: "Components/Elements/Card/CardOptionHome",
  component: CardOptionHome,
  argTypes: {},
} as ComponentMeta<typeof CardOptionHome>;

export const Default: StoryObj<CardOptionHomeModel> = {
  args: {
    id: 1,
    photo:
      "https://static.portaldacidade.com/unsafe/842x0/https://s3.amazonaws.com/tucurui.portaldacidade.com/img/news/editor/editor-60f57b5fada7e.png",
    city: "Breu Branco",
    name: "Parque Aratera",
  },
};
