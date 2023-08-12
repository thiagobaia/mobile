import React from "react";
import { ComponentMeta, StoryObj } from "@storybook/react-native";
import { ListSectionTab, ListSectionTabModel } from "./ListSectionTab";

export default {
  title: "Components/Compositions/ListSectionTab",
  component: ListSectionTab,
  argTypes: {},
  parameters: {
    backgrounds: {
      viewport: {
        defaultViewport: {
          mobileDefault: {
            name: 'Mobile Default',
            styles: {
              width: '533px',
              height: '801px',
            },
          },
        }
      },
      default: "gray",
      values: [{ name: "gray", value: "gray" }],
    },
  },
} as ComponentMeta<typeof ListSectionTab>;

export const Default: StoryObj<ListSectionTabModel> = {
  args: {
    title:'Eventos',
    navigateRoute: "",
    dataList:[
      {
        "name": "Gusttavo Lima",
        "photo":"uploads/2023-07-02T04:08:33.875ZGusttavo Lima.png",
        "city": "Tucurui-Pará"
      },
      {
        "name": "Gusttavo Lima",
        "photo":"uploads/2023-07-02T04:08:33.875ZGusttavo Lima.png",
        "city": "Tucurui-Pará"
      },
      {
        "name": "Gusttavo Lima",
        "photo":"uploads/2023-07-02T04:08:33.875ZGusttavo Lima.png",
        "city": "Tucurui-Pará"
      },
      {
        "name": "Gusttavo Lima",
        "photo":"uploads/2023-07-02T04:08:33.875ZGusttavo Lima.png",
        "city": "Tucurui-Pará"
      },
    
    ]
  },
};


