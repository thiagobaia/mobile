import React from "react";
import { ComponentMeta, StoryObj } from "@storybook/react-native";
import { PlaceElement, PlaceElementModel } from "./PlaceElement";
const bank = require('../../../../assets/icons/bank.svg');

export default {
  title: "Components/Elements/PlaceElement",
  component: PlaceElement,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "gray" }],
    },
  },
} as ComponentMeta<typeof PlaceElement>;

export const Default: StoryObj<PlaceElementModel> = {
  args: {
    title:"Bancos",
    icon: bank,
  },
};
