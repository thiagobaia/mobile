import React from "react";
import { ComponentMeta, StoryObj } from "@storybook/react-native";
import { BackBtn, ButtonBackModel } from "./BackBtn";

export default {
  title: "Components/Elements/BackBtn",
  component: BackBtn,
  parameters: {
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "gray" }],
    },
  },
  argTypes: {},
} as ComponentMeta<typeof BackBtn>;

export const Default: StoryObj<ButtonBackModel> = {
  args: {
    text: "Voltar",
  },
};
