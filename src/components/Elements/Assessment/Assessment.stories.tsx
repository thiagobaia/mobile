import React from "react";
import { ComponentMeta, StoryObj } from "@storybook/react-native";
import { Assessment, AssessmentModel } from "./Assessment";

export default {
  title: "Components/Elements/Assessment",
  component: Assessment,
  argTypes: {},
} as ComponentMeta<typeof Assessment>;

export const Default: StoryObj<AssessmentModel> = {
  args: {
    note: "7.0",
  },
};
