import React from "react";
import { ComponentMeta, StoryObj } from "@storybook/react-native";
import { IconHot, IconHotProps } from "./IconHot";
const bank = require('../../../../assets/icons/bank.svg');

export default {
  title: "Components/Elements/IconHot",
  component: IconHot,
  argTypes: {},
} as ComponentMeta<typeof IconHot>;

export const Default: StoryObj<IconHotProps> = {
  args: {
    url: bank,
    size:"25"
  },
};
